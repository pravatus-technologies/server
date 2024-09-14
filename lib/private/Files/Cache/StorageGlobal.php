<?php

declare (strict_types=1);
/**
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\Files\Cache;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Handle the mapping between the string and numeric storage ids
 *
 * Each storage has 2 different ids
 *    a string id which is generated by the storage backend and reflects the configuration of the storage (e.g. 'smb://user@host/share')
 *    and a numeric storage id which is referenced in the file cache
 *
 * A mapping between the two storage ids is stored in the database and accessible through this class
 *
 * @package OC\Files\Cache
 */
class StorageGlobal {
	/** @var IDBConnection */
	private $connection;

	/** @var array<string, array> */
	private $cache = [];
	/** @var array<int, array> */
	private $numericIdCache = [];

	public function __construct(IDBConnection $connection) {
		$this->connection = $connection;
	}

	/**
	 * @param string[] $storageIds
	 */
	public function loadForStorageIds(array $storageIds) {
		$builder = $this->connection->getQueryBuilder();
		$query = $builder->select(['id', 'numeric_id', 'available', 'last_checked'])
			->from('storages')
			->where($builder->expr()->in('id', $builder->createNamedParameter(array_values($storageIds), IQueryBuilder::PARAM_STR_ARRAY)));

		$result = $query->execute();
		while ($row = $result->fetch()) {
			$this->cache[$row['id']] = $row;
		}
		$result->closeCursor();
	}

	/**
	 * @param string $storageId
	 * @return array|null
	 */
	public function getStorageInfo(string $storageId): ?array {
		if (!isset($this->cache[$storageId])) {
			$builder = $this->connection->getQueryBuilder();
			$query = $builder->select(['id', 'numeric_id', 'available', 'last_checked'])
				->from('storages')
				->where($builder->expr()->eq('id', $builder->createNamedParameter($storageId)));

			$result = $query->execute();
			$row = $result->fetch();
			$result->closeCursor();

			if ($row) {
				$this->cache[$storageId] = $row;
				$this->numericIdCache[(int)$row['numeric_id']] = $row;
			}
		}
		return $this->cache[$storageId] ?? null;
	}

	/**
	 * @param int $numericId
	 * @return array|null
	 */
	public function getStorageInfoByNumericId(int $numericId): ?array {
		if (!isset($this->numericIdCache[$numericId])) {
			$builder = $this->connection->getQueryBuilder();
			$query = $builder->select(['id', 'numeric_id', 'available', 'last_checked'])
				->from('storages')
				->where($builder->expr()->eq('numeric_id', $builder->createNamedParameter($numericId)));

			$result = $query->execute();
			$row = $result->fetch();
			$result->closeCursor();

			if ($row) {
				$this->numericIdCache[$numericId] = $row;
				$this->cache[$row['id']] = $row;
			}
		}
		return $this->numericIdCache[$numericId] ?? null;
	}

	public function clearCache() {
		$this->cache = [];
	}
}
