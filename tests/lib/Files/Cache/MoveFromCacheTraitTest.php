<?php
/**
 * Copyright (c) 2016 Robin Appelman <icewind@owncloud.com>
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 * See the COPYING-README file.
 */

namespace Test\Files\Cache;

use OC\Files\Cache\MoveFromCacheTrait;
use OCP\Files\Cache\ICacheEntry;

class FallBackCrossCacheMoveCache extends \OC\Files\Cache\Cache {
	use MoveFromCacheTrait;
}

/**
 * Class MoveFromCacheTraitTest
 *
 * @group DB
 */
class MoveFromCacheTraitTest extends CacheTest {
	protected function setUp(): void {
		parent::setUp();

		$this->storage = new \OC\Files\Storage\Temporary([]);
		$this->storage2 = new \OC\Files\Storage\Temporary([]);
		$this->cache = new FallBackCrossCacheMoveCache($this->storage);
		$this->cache2 = new FallBackCrossCacheMoveCache($this->storage2);

		$this->cache->insert('', ['size' => 0, 'mtime' => 0, 'mimetype' => ICacheEntry::DIRECTORY_MIMETYPE]);
		$this->cache2->insert('', ['size' => 0, 'mtime' => 0, 'mimetype' => ICacheEntry::DIRECTORY_MIMETYPE]);
	}
}
