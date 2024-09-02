<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace lib;

use OC\UserPreferences;
use OCP\IDBConnection;
use OCP\Security\ICrypto;
use OCP\UserPreferences\IUserPreferences;
use OCP\UserPreferences\ValueType;
use Psr\Log\LoggerInterface;
use Test\TestCase;

/**
 * Class UserPreferencesTest
 *
 * @group DB
 *
 * @package Test
 */
class UserPreferencesTest extends TestCase {
	protected IDBConnection $connection;
	private LoggerInterface $logger;
	private ICrypto $crypto;
	private array $originalPreferences;

	/**
	 * @var array<string, array<string, array<array<string, string, int, bool, bool>>> [userId => [appId => prefKey, prefValue, valueType, lazy, sensitive]]]
	 */
	private array $basePreferences =
		[
			'user1' =>
				[
					'app1' => [
						'key1' => ['key1', 'value1']
					],
					'only-lazy' => [
						'key1' => ['key1', 'value1', ValueType::STRING, true]
					]
				]
		];

	protected function setUp(): void {
		parent::setUp();

		$this->connection = \OCP\Server::get(IDBConnection::class);
		$this->logger = \OCP\Server::get(LoggerInterface::class);
		$this->crypto = \OCP\Server::get(ICrypto::class);

		// storing current preferences and emptying the data table
		$sql = $this->connection->getQueryBuilder();
		$sql->select('*')
			->from('preferences');
		$result = $sql->executeQuery();
		$this->originalPreferences = $result->fetchAll();
		$result->closeCursor();

		$sql = $this->connection->getQueryBuilder();
		$sql->delete('preferences');
		$sql->executeStatement();

		$sql = $this->connection->getQueryBuilder();
		$sql->insert('preferences')
			->values(
				[
					'userid' => $sql->createParameter('userid'),
					'appid' => $sql->createParameter('appid'),
					'configkey' => $sql->createParameter('configkey'),
					'configvalue' => $sql->createParameter('configvalue'),
					'type' => $sql->createParameter('type'),
					'lazy' => $sql->createParameter('lazy')
				]
			);

		foreach ($this->basePreferences as $userId => $userData) {
			foreach($userData as $appId => $appData) {
				foreach ($appData as $key => $row) {
					$value = $row[1];
					$type = ($row[2] ?? ValueType::MIXED)->value;
					if (($row[4] ?? false) === true) {
						$type |= ValueType::SENSITIVE->value;
						$value = self::invokePrivate(UserPreferences::class, 'ENCRYPTION_PREFIX') . $this->crypto->encrypt($value);
						$this->basePreferences[$userId][$appId][$key]['encrypted'] = $value;
					}

					$sql->setParameters(
						[
							'userid' => $userId,
							'appid' => $appId,
							'configkey' => $row[0],
							'configvalue' => $value,
							'type' => $type,
							'lazy' => (($row[3] ?? false) === true) ? 1 : 0
						]
					)->executeStatement();
				}
			}
		}
	}

	protected function tearDown(): void {
		$sql = $this->connection->getQueryBuilder();
		$sql->delete('preferences');
		$sql->executeStatement();

		$sql = $this->connection->getQueryBuilder();
		$sql->insert('preferences')
			->values(
				[
					'userid' => $sql->createParameter('userid'),
					'appid' => $sql->createParameter('appid'),
					'configkey' => $sql->createParameter('configkey'),
					'configvalue' => $sql->createParameter('configvalue'),
					'lazy' => $sql->createParameter('lazy'),
					'type' => $sql->createParameter('type'),
				]
			);

		foreach ($this->originalPreferences as $key => $configs) {
			$sql->setParameter('userid', $configs['userid'])
				->setParameter('appid', $configs['appid'])
				->setParameter('configkey', $configs['configkey'])
				->setParameter('configvalue', $configs['configvalue'])
				->setParameter('lazy', ($configs['lazy'] === '1') ? '1' : '0')
				->setParameter('type', $configs['type']);
			$sql->executeStatement();
		}

		parent::tearDown();
	}

	/**
	 * @param array $preLoading preload the 'fast' cache for a list of users)
	 *
	 * @return IUserPreferences
	 */
	private function generateUserPreferences(array $preLoading = []): IUserPreferences {
		$preferences = new \OC\UserPreferences(
			$this->connection,
			$this->logger,
			$this->crypto,
		);
		$msg = ' generateUserPreferences() failed to confirm cache status';

		// confirm cache status
		$status = $preferences->statusCache();
		$this->assertSame([], $status['fastLoaded'], $msg);
		$this->assertSame([], $status['lazyLoaded'], $msg);
		$this->assertSame([], $status['fastCache'], $msg);
		$this->assertSame([], $status['lazyCache'], $msg);
		foreach($preLoading as $preLoadUser) {
			// simple way to initiate the load of non-lazy preferences values in cache
			$preferences->getValueString($preLoadUser, 'core', 'preload');

			// confirm cache status
			$status = $preferences->statusCache();
			$this->assertSame(true, $status['fastLoaded'][$preLoadUser], $msg);
			$this->assertSame(false, $status['lazyLoaded'][$preLoadUser], $msg);

			$apps = array_values(array_diff(array_keys($this->basePreferences[$preLoadUser]), ['only-lazy']));
			$this->assertEqualsCanonicalizing($apps, array_keys($status['fastCache'][$preLoadUser]), $msg);
			$this->assertSame([], array_keys($status['lazyCache'][$preLoadUser]), $msg);
		}

		return $preferences;
	}

	public function testGetKeys(): void {
		$preferences = $this->generateUserPreferences(['user1']);
		$this->assertEqualsCanonicalizing(array_keys($this->basePreferences['user1']['app1']), $preferences->getKeys('user1', 'app1'));
	}

}
