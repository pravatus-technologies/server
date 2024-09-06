<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\User;

use InvalidArgumentException;
use OC\Accounts\AccountManager;
use OC\Avatar\AvatarManager;
use OC\Hooks\Emitter;
use OC_Helper;
use OCP\Accounts\IAccountManager;
use OCP\Comments\ICommentsManager;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Group\Events\BeforeUserRemovedEvent;
use OCP\Group\Events\UserRemovedEvent;
use OCP\IAvatarManager;
use OCP\IConfig;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserBackend;
use OCP\Notification\IManager as INotificationManager;
use OCP\User\Backend\IGetHomeBackend;
use OCP\User\Backend\IPasswordHashBackend;
use OCP\User\Backend\IProvideAvatarBackend;
use OCP\User\Backend\IProvideEnabledStateBackend;
use OCP\User\Backend\ISetDisplayNameBackend;
use OCP\User\Backend\ISetPasswordBackend;
use OCP\User\Events\BeforePasswordUpdatedEvent;
use OCP\User\Events\BeforeUserDeletedEvent;
use OCP\User\Events\PasswordUpdatedEvent;
use OCP\User\Events\UserChangedEvent;
use OCP\User\Events\UserDeletedEvent;
use OCP\User\GetQuotaEvent;
use OCP\UserInterface;
use function json_decode;
use function json_encode;

class User implements IUser {
	private const CONFIG_KEY_MANAGERS = 'manager';

	/** @var IAccountManager */
	protected $accountManager;
	/** @var string */
	private $uid;

	/** @var string|null */
	private $displayName;

	/** @var UserInterface|null */
	private $backend;

	/** @var IEventDispatcher */
	private $dispatcher;

	/** @var bool|null */
	private $enabled;

	/** @var Emitter|Manager */
	private $emitter;

	/** @var string */
	private $home;

	/** @var int|null */
	private $lastLogin;

	/** @var \OCP\IConfig */
	private $config;

	/** @var IAvatarManager */
	private $avatarManager;

	/** @var IURLGenerator */
	private $urlGenerator;

	public function __construct(string $uid, ?UserInterface $backend, IEventDispatcher $dispatcher, $emitter = null, ?IConfig $config = null, $urlGenerator = null) {
		$this->uid = $uid;
		$this->backend = $backend;
		$this->emitter = $emitter;
		if (is_null($config)) {
			$config = \OC::$server->getConfig();
		}
		$this->config = $config;
		$this->urlGenerator = $urlGenerator;
		if (is_null($this->urlGenerator)) {
			$this->urlGenerator = \OC::$server->getURLGenerator();
		}
		$this->dispatcher = $dispatcher;
	}

	public function getUID() {
		return $this->uid;
	}

	public function getDisplayName() {
		if ($this->displayName === null) {
			$displayName = '';
			if ($this->backend && $this->backend->implementsActions(Backend::GET_DISPLAYNAME)) {
				// get display name and strip whitespace from the beginning and end of it
				$backendDisplayName = $this->backend->getDisplayName($this->uid);
				if (is_string($backendDisplayName)) {
					$displayName = trim($backendDisplayName);
				}
			}

			if (!empty($displayName)) {
				$this->displayName = $displayName;
			} else {
				$this->displayName = $this->uid;
			}
		}
		return $this->displayName;
	}

	public function setDisplayName($displayName) {
		$displayName = trim($displayName);
		$oldDisplayName = $this->getDisplayName();
		if ($this->backend->implementsActions(Backend::SET_DISPLAYNAME) && !empty($displayName) && $displayName !== $oldDisplayName) {
			/** @var ISetDisplayNameBackend $backend */
			$backend = $this->backend;
			$result = $backend->setDisplayName($this->uid, $displayName);
			if ($result) {
				$this->displayName = $displayName;
				$this->triggerChange('displayName', $displayName, $oldDisplayName);
			}
			return $result !== false;
		}
		return false;
	}

	public function setEMailAddress($mailAddress) {
		$this->setSystemEMailAddress($mailAddress);
	}

	public function setSystemEMailAddress(string $mailAddress): void {
		$oldMailAddress = $this->getSystemEMailAddress();

		if ($mailAddress === '') {
			$this->config->deleteUserValue($this->uid, 'settings', 'email');
		} else {
			$this->config->setUserValue($this->uid, 'settings', 'email', $mailAddress);
		}

		$primaryAddress = $this->getPrimaryEMailAddress();
		if ($primaryAddress === $mailAddress) {
			// on match no dedicated primary settings is necessary
			$this->setPrimaryEMailAddress('');
		}

		if ($oldMailAddress !== strtolower($mailAddress)) {
			$this->triggerChange('eMailAddress', $mailAddress, $oldMailAddress);
		}
	}

	public function setPrimaryEMailAddress(string $mailAddress): void {
		if ($mailAddress === '') {
			$this->config->deleteUserValue($this->uid, 'settings', 'primary_email');
			return;
		}

		$this->ensureAccountManager();
		$account = $this->accountManager->getAccount($this);
		$property = $account->getPropertyCollection(IAccountManager::COLLECTION_EMAIL)
			->getPropertyByValue($mailAddress);

		if ($property === null || $property->getLocallyVerified() !== IAccountManager::VERIFIED) {
			throw new InvalidArgumentException('Only verified emails can be set as primary');
		}
		$this->config->setUserValue($this->uid, 'settings', 'primary_email', $mailAddress);
	}

	private function ensureAccountManager() {
		if (!$this->accountManager instanceof IAccountManager) {
			$this->accountManager = \OC::$server->get(IAccountManager::class);
		}
	}

	public function getLastLogin() {
		if ($this->lastLogin === null) {
			$this->lastLogin = (int)$this->config->getUserValue($this->uid, 'login', 'lastLogin', 0);
		}
		return (int)$this->lastLogin;
	}

	public function updateLastLoginTimestamp() {
		$previousLogin = $this->getLastLogin();
		$now = time();
		$firstTimeLogin = $previousLogin === 0;

		if ($now - $previousLogin > 60) {
			$this->lastLogin = time();
			$this->config->setUserValue(
				$this->uid, 'login', 'lastLogin', (string)$this->lastLogin);
		}

		return $firstTimeLogin;
	}

	public function delete() {
		if ($this->emitter) {
			/** @deprecated 21.0.0 use BeforeUserDeletedEvent event with the IEventDispatcher instead */
			$this->emitter->emit('\OC\User', 'preDelete', [$this]);
		}
		$this->dispatcher->dispatchTyped(new BeforeUserDeletedEvent($this));
		$result = $this->backend->deleteUser($this->uid);
		if ($result) {
			// FIXME: Feels like an hack - suggestions?

			$groupManager = \OC::$server->getGroupManager();
			// We have to delete the user from all groups
			foreach ($groupManager->getUserGroupIds($this) as $groupId) {
				$group = $groupManager->get($groupId);
				if ($group) {
					$this->dispatcher->dispatchTyped(new BeforeUserRemovedEvent($group, $this));
					$group->removeUser($this);
					$this->dispatcher->dispatchTyped(new UserRemovedEvent($group, $this));
				}
			}
			// Delete the user's keys in preferences
			\OC::$server->getConfig()->deleteAllUserValues($this->uid);

			\OC::$server->get(ICommentsManager::class)->deleteReferencesOfActor('users', $this->uid);
			\OC::$server->get(ICommentsManager::class)->deleteReadMarksFromUser($this);

			/** @var AvatarManager $avatarManager */
			$avatarManager = \OCP\Server::get(AvatarManager::class);
			$avatarManager->deleteUserAvatar($this->uid);

			$notification = \OC::$server->get(INotificationManager::class)->createNotification();
			$notification->setUser($this->uid);
			\OC::$server->get(INotificationManager::class)->markProcessed($notification);

			/** @var AccountManager $accountManager */
			$accountManager = \OCP\Server::get(AccountManager::class);
			$accountManager->deleteUser($this);

			if ($this->emitter) {
				/** @deprecated 21.0.0 use UserDeletedEvent event with the IEventDispatcher instead */
				$this->emitter->emit('\OC\User', 'postDelete', [$this]);
			}
			$this->dispatcher->dispatchTyped(new UserDeletedEvent($this));
		}
		return !($result === false);
	}

	public function setPassword($password, $recoveryPassword = null) {
		$this->dispatcher->dispatchTyped(new BeforePasswordUpdatedEvent($this, $password, $recoveryPassword));
		if ($this->emitter) {
			$this->emitter->emit('\OC\User', 'preSetPassword', [$this, $password, $recoveryPassword]);
		}
		if ($this->backend->implementsActions(Backend::SET_PASSWORD)) {
			/** @var ISetPasswordBackend $backend */
			$backend = $this->backend;
			$result = $backend->setPassword($this->uid, $password);

			if ($result !== false) {
				$this->dispatcher->dispatchTyped(new PasswordUpdatedEvent($this, $password, $recoveryPassword));
				if ($this->emitter) {
					$this->emitter->emit('\OC\User', 'postSetPassword', [$this, $password, $recoveryPassword]);
				}
			}

			return !($result === false);
		} else {
			return false;
		}
	}

	public function getPasswordHash(): ?string {
		if (!($this->backend instanceof IPasswordHashBackend)) {
			return null;
		}
		return $this->backend->getPasswordHash($this->uid);
	}

	public function setPasswordHash(string $passwordHash): bool {
		if (!($this->backend instanceof IPasswordHashBackend)) {
			return false;
		}
		return $this->backend->setPasswordHash($this->uid, $passwordHash);
	}

	public function getHome() {
		if (!$this->home) {
			/** @psalm-suppress UndefinedInterfaceMethod Once we get rid of the legacy implementsActions, psalm won't complain anymore */
			if (($this->backend instanceof IGetHomeBackend || $this->backend->implementsActions(Backend::GET_HOME)) && $home = $this->backend->getHome($this->uid)) {
				$this->home = $home;
			} elseif ($this->config) {
				$this->home = $this->config->getSystemValueString('datadirectory', \OC::$SERVERROOT . '/data') . '/' . $this->uid;
			} else {
				$this->home = \OC::$SERVERROOT . '/data/' . $this->uid;
			}
		}
		return $this->home;
	}

	public function getBackendClassName() {
		if ($this->backend instanceof IUserBackend) {
			return $this->backend->getBackendName();
		}
		return get_class($this->backend);
	}

	public function getBackend(): ?UserInterface {
		return $this->backend;
	}

	public function canChangeAvatar() {
		if ($this->backend instanceof IProvideAvatarBackend || $this->backend->implementsActions(Backend::PROVIDE_AVATAR)) {
			/** @var IProvideAvatarBackend $backend */
			$backend = $this->backend;
			return $backend->canChangeAvatar($this->uid);
		}
		return true;
	}

	public function canChangePassword() {
		return $this->backend->implementsActions(Backend::SET_PASSWORD);
	}

	public function canChangeDisplayName() {
		if (!$this->config->getSystemValueBool('allow_user_to_change_display_name', true)) {
			return false;
		}
		return $this->backend->implementsActions(Backend::SET_DISPLAYNAME);
	}

	public function isEnabled() {
		$queryDatabaseValue = function (): bool {
			if ($this->enabled === null) {
				$enabled = $this->config->getUserValue($this->uid, 'core', 'enabled', 'true');
				$this->enabled = $enabled === 'true';
			}
			return $this->enabled;
		};
		if ($this->backend instanceof IProvideEnabledStateBackend) {
			return $this->backend->isUserEnabled($this->uid, $queryDatabaseValue);
		} else {
			return $queryDatabaseValue();
		}
	}

	public function setEnabled(bool $enabled = true) {
		$oldStatus = $this->isEnabled();
		$setDatabaseValue = function (bool $enabled): void {
			$this->config->setUserValue($this->uid, 'core', 'enabled', $enabled ? 'true' : 'false');
			$this->enabled = $enabled;
		};
		if ($this->backend instanceof IProvideEnabledStateBackend) {
			$queryDatabaseValue = function (): bool {
				if ($this->enabled === null) {
					$enabled = $this->config->getUserValue($this->uid, 'core', 'enabled', 'true');
					$this->enabled = $enabled === 'true';
				}
				return $this->enabled;
			};
			$enabled = $this->backend->setUserEnabled($this->uid, $enabled, $queryDatabaseValue, $setDatabaseValue);
			if ($oldStatus !== $enabled) {
				$this->triggerChange('enabled', $enabled, $oldStatus);
			}
		} elseif ($oldStatus !== $enabled) {
			$setDatabaseValue($enabled);
			$this->triggerChange('enabled', $enabled, $oldStatus);
		}
	}

	public function getEMailAddress() {
		return $this->getPrimaryEMailAddress() ?? $this->getSystemEMailAddress();
	}

	public function getSystemEMailAddress(): ?string {
		return $this->config->getUserValue($this->uid, 'settings', 'email', null);
	}

	public function getPrimaryEMailAddress(): ?string {
		return $this->config->getUserValue($this->uid, 'settings', 'primary_email', null);
	}

	public function getQuota() {
		// allow apps to modify the user quota by hooking into the event
		$event = new GetQuotaEvent($this);
		$this->dispatcher->dispatchTyped($event);
		$overwriteQuota = $event->getQuota();
		if ($overwriteQuota) {
			$quota = $overwriteQuota;
		} else {
			$quota = $this->config->getUserValue($this->uid, 'files', 'quota', 'default');
		}
		if ($quota === 'default') {
			$quota = $this->config->getAppValue('files', 'default_quota', 'none');

			// if unlimited quota is not allowed => avoid getting 'unlimited' as default_quota fallback value
			// use the first preset instead
			$allowUnlimitedQuota = $this->config->getAppValue('files', 'allow_unlimited_quota', '1') === '1';
			if (!$allowUnlimitedQuota) {
				$presets = $this->config->getAppValue('files', 'quota_preset', '1 GB, 5 GB, 10 GB');
				$presets = array_filter(array_map('trim', explode(',', $presets)));
				$quotaPreset = array_values(array_diff($presets, ['default', 'none']));
				if (count($quotaPreset) > 0) {
					$quota = $this->config->getAppValue('files', 'default_quota', $quotaPreset[0]);
				}
			}
		}
		return $quota;
	}

	public function setQuota($quota) {
		$oldQuota = $this->config->getUserValue($this->uid, 'files', 'quota', '');
		if ($quota !== 'none' and $quota !== 'default') {
			$bytesQuota = OC_Helper::computerFileSize($quota);
			if ($bytesQuota === false) {
				throw new InvalidArgumentException('Failed to set quota to invalid value '.$quota);
			}
			$quota = OC_Helper::humanFileSize($bytesQuota);
		}
		if ($quota !== $oldQuota) {
			$this->config->setUserValue($this->uid, 'files', 'quota', $quota);
			$this->triggerChange('quota', $quota, $oldQuota);
		}
		\OC_Helper::clearStorageInfo('/' . $this->uid . '/files');
	}

	public function getManagerUids(): array {
		$encodedUids = $this->config->getUserValue(
			$this->uid,
			'settings',
			self::CONFIG_KEY_MANAGERS,
			'[]'
		);
		return json_decode($encodedUids, false, 512, JSON_THROW_ON_ERROR);
	}

	public function setManagerUids(array $uids): void {
		$oldUids = $this->getManagerUids();
		$this->config->setUserValue(
			$this->uid,
			'settings',
			self::CONFIG_KEY_MANAGERS,
			json_encode($uids, JSON_THROW_ON_ERROR)
		);
		$this->triggerChange('managers', $uids, $oldUids);
	}

	public function getAvatarImage($size) {
		// delay the initialization
		if (is_null($this->avatarManager)) {
			$this->avatarManager = \OC::$server->get(IAvatarManager::class);
		}

		$avatar = $this->avatarManager->getAvatar($this->uid);
		$image = $avatar->get($size);
		if ($image) {
			return $image;
		}

		return null;
	}

	public function getCloudId() {
		$uid = $this->getUID();
		$server = rtrim($this->urlGenerator->getAbsoluteURL('/'), '/');
		if (str_ends_with($server, '/index.php')) {
			$server = substr($server, 0, -10);
		}
		$server = $this->removeProtocolFromUrl($server);
		return $uid . '@' . $server;
	}

	private function removeProtocolFromUrl(string $url): string {
		if (str_starts_with($url, 'https://')) {
			return substr($url, strlen('https://'));
		}

		return $url;
	}

	public function triggerChange($feature, $value = null, $oldValue = null) {
		$this->dispatcher->dispatchTyped(new UserChangedEvent($this, $feature, $value, $oldValue));
		if ($this->emitter) {
			$this->emitter->emit('\OC\User', 'changeUser', [$this, $feature, $value, $oldValue]);
		}
	}
}
