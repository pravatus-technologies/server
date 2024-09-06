<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Files\Cache;

use OCP\Files\Cache\IWatcher;

/**
 * check the storage backends for updates and change the cache accordingly
 */
class Watcher implements IWatcher {
	protected $watchPolicy = self::CHECK_ONCE;

	protected $checkedPaths = [];

	/**
	 * @var \OC\Files\Storage\Storage $storage
	 */
	protected $storage;

	/**
	 * @var Cache $cache
	 */
	protected $cache;

	/**
	 * @var Scanner $scanner ;
	 */
	protected $scanner;

	/**
	 * @param \OC\Files\Storage\Storage $storage
	 */
	public function __construct(\OC\Files\Storage\Storage $storage) {
		$this->storage = $storage;
		$this->cache = $storage->getCache();
		$this->scanner = $storage->getScanner();
	}

	public function setPolicy($policy) {
		$this->watchPolicy = $policy;
	}

	public function getPolicy() {
		return $this->watchPolicy;
	}

	public function checkUpdate($path, $cachedEntry = null) {
		if (is_null($cachedEntry)) {
			$cachedEntry = $this->cache->get($path);
		}
		if ($cachedEntry === false || $this->needsUpdate($path, $cachedEntry)) {
			$this->update($path, $cachedEntry);

			if ($cachedEntry === false) {
				return true;
			} else {
				// storage backends can sometimes return false positives, only return true if the scanner actually found a change
				$newEntry = $this->cache->get($path);
				return $newEntry->getStorageMTime() > $cachedEntry->getStorageMTime();
			}
		} else {
			return false;
		}
	}

	public function update($path, $cachedData) {
		if ($this->storage->is_dir($path)) {
			$this->scanner->scan($path, Scanner::SCAN_SHALLOW);
		} else {
			$this->scanner->scanFile($path);
		}
		if (is_array($cachedData) && $cachedData['mimetype'] === 'httpd/unix-directory') {
			$this->cleanFolder($path);
		}
		if ($this->cache instanceof Cache) {
			$this->cache->correctFolderSize($path);
		}
	}

	public function needsUpdate($path, $cachedData) {
		if ($this->watchPolicy === self::CHECK_ALWAYS or ($this->watchPolicy === self::CHECK_ONCE and !in_array($path, $this->checkedPaths))) {
			$this->checkedPaths[] = $path;
			return $this->storage->hasUpdated($path, $cachedData['storage_mtime']);
		}
		return false;
	}

	public function cleanFolder($path) {
		$cachedContent = $this->cache->getFolderContents($path);
		foreach ($cachedContent as $entry) {
			if (!$this->storage->file_exists($entry['path'])) {
				$this->cache->remove($entry['path']);
			}
		}
	}
}
