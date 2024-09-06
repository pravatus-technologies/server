<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Cache;

use OC\Files\Filesystem;
use OC\Files\View;
use OCP\ICache;
use OCP\Security\ISecureRandom;
use Psr\Log\LoggerInterface;

class File implements ICache {
	/** @var View */
	protected $storage;

	/**
	 * Returns the cache storage for the logged in user
	 *
	 * @return \OC\Files\View cache storage
	 * @throws \OC\ForbiddenException
	 * @throws \OC\User\NoUserException
	 */
	protected function getStorage() {
		if ($this->storage !== null) {
			return $this->storage;
		}
		if (\OC::$server->getUserSession()->isLoggedIn()) {
			$rootView = new View();
			$user = \OC::$server->getUserSession()->getUser();
			Filesystem::initMountPoints($user->getUID());
			if (!$rootView->file_exists('/' . $user->getUID() . '/cache')) {
				$rootView->mkdir('/' . $user->getUID() . '/cache');
			}
			$this->storage = new View('/' . $user->getUID() . '/cache');
			return $this->storage;
		} else {
			\OCP\Server::get(LoggerInterface::class)->error('Can\'t get cache storage, user not logged in', ['app' => 'core']);
			throw new \OC\ForbiddenException('Can\t get cache storage, user not logged in');
		}
	}

	public function get($key) {
		$result = null;
		if ($this->hasKey($key)) {
			$storage = $this->getStorage();
			$result = $storage->file_get_contents($key);
		}
		return $result;
	}

	/**
	 * Returns the size of the stored/cached data
	 *
	 * @param string $key
	 * @return int
	 */
	public function size($key) {
		$result = 0;
		if ($this->hasKey($key)) {
			$storage = $this->getStorage();
			$result = $storage->filesize($key);
		}
		return $result;
	}

	public function set($key, $value, $ttl = 0) {
		$storage = $this->getStorage();
		$result = false;
		// unique id to avoid chunk collision, just in case
		$uniqueId = \OC::$server->get(ISecureRandom::class)->generate(
			16,
			ISecureRandom::CHAR_ALPHANUMERIC
		);

		// use part file to prevent hasKey() to find the key
		// while it is being written
		$keyPart = $key . '.' . $uniqueId . '.part';
		if ($storage and $storage->file_put_contents($keyPart, $value)) {
			if ($ttl === 0) {
				$ttl = 86400; // 60*60*24
			}
			$result = $storage->touch($keyPart, time() + $ttl);
			$result &= $storage->rename($keyPart, $key);
		}
		return $result;
	}

	public function hasKey($key) {
		$storage = $this->getStorage();
		if ($storage && $storage->is_file($key) && $storage->isReadable($key)) {
			return true;
		}
		return false;
	}

	public function remove($key) {
		$storage = $this->getStorage();
		if (!$storage) {
			return false;
		}
		return $storage->unlink($key);
	}

	public function clear($prefix = '') {
		$storage = $this->getStorage();
		if ($storage and $storage->is_dir('/')) {
			$dh = $storage->opendir('/');
			if (is_resource($dh)) {
				while (($file = readdir($dh)) !== false) {
					if ($file != '.' and $file != '..' and ($prefix === '' || str_starts_with($file, $prefix))) {
						$storage->unlink('/' . $file);
					}
				}
			}
		}
		return true;
	}

	/**
	 * Runs GC
	 * @throws \OC\ForbiddenException
	 */
	public function gc() {
		$storage = $this->getStorage();
		if ($storage) {
			// extra hour safety, in case of stray part chunks that take longer to write,
			// because touch() is only called after the chunk was finished
			$now = time() - 3600;
			$dh = $storage->opendir('/');
			if (!is_resource($dh)) {
				return null;
			}
			while (($file = readdir($dh)) !== false) {
				if ($file != '.' and $file != '..') {
					try {
						$mtime = $storage->filemtime('/' . $file);
						if ($mtime < $now) {
							$storage->unlink('/' . $file);
						}
					} catch (\OCP\Lock\LockedException $e) {
						// ignore locked chunks
						\OCP\Server::get(LoggerInterface::class)->debug('Could not cleanup locked chunk "' . $file . '"', ['app' => 'core']);
					} catch (\OCP\Files\ForbiddenException $e) {
						\OCP\Server::get(LoggerInterface::class)->debug('Could not cleanup forbidden chunk "' . $file . '"', ['app' => 'core']);
					} catch (\OCP\Files\LockNotAcquiredException $e) {
						\OCP\Server::get(LoggerInterface::class)->debug('Could not cleanup locked chunk "' . $file . '"', ['app' => 'core']);
					}
				}
			}
		}
	}

	public static function isAvailable(): bool {
		return true;
	}
}
