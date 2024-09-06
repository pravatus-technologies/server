<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\FullTextSearch;

use OCP\FullTextSearch\Exceptions\FullTextSearchAppNotAvailableException;
use OCP\FullTextSearch\IFullTextSearchManager;
use OCP\FullTextSearch\Model\IIndex;
use OCP\FullTextSearch\Service\IIndexService;
use OCP\FullTextSearch\Service\IProviderService;
use OCP\FullTextSearch\Service\ISearchService;

/**
 * Class FullTextSearchManager
 *
 * @package OC\FullTextSearch
 */
class FullTextSearchManager implements IFullTextSearchManager {
	private ?IProviderService $providerService = null;

	private ?IIndexService $indexService = null;

	private ?ISearchService $searchService = null;

	public function registerProviderService(IProviderService $providerService): void {
		$this->providerService = $providerService;
	}

	public function registerIndexService(IIndexService $indexService): void {
		$this->indexService = $indexService;
	}

	public function registerSearchService(ISearchService $searchService): void {
		$this->searchService = $searchService;
	}

	public function isAvailable(): bool {
		if ($this->indexService === null ||
			$this->providerService === null ||
			$this->searchService === null) {
			return false;
		}

		return true;
	}


	/**
	 * @throws FullTextSearchAppNotAvailableException
	 */
	private function getProviderService(): IProviderService {
		if ($this->providerService === null) {
			throw new FullTextSearchAppNotAvailableException('No IProviderService registered');
		}

		return $this->providerService;
	}


	/**
	 * @throws FullTextSearchAppNotAvailableException
	 */
	private function getIndexService(): IIndexService {
		if ($this->indexService === null) {
			throw new FullTextSearchAppNotAvailableException('No IIndexService registered');
		}

		return $this->indexService;
	}


	/**
	 * @throws FullTextSearchAppNotAvailableException
	 */
	private function getSearchService(): ISearchService {
		if ($this->searchService === null) {
			throw new FullTextSearchAppNotAvailableException('No ISearchService registered');
		}

		return $this->searchService;
	}


	public function addJavascriptAPI(): void {
		$this->getProviderService()->addJavascriptAPI();
	}


	public function isProviderIndexed(string $providerId): bool {
		return $this->getProviderService()->isProviderIndexed($providerId);
	}


	public function getIndex(string $providerId, string $documentId): IIndex {
		return $this->getIndexService()->getIndex($providerId, $documentId);
	}

	public function createIndex(
		string $providerId,
		string $documentId,
		string $userId,
		int $status = 0,
	): IIndex {
		return $this->getIndexService()->createIndex($providerId, $documentId, $userId, $status);
	}


	public function updateIndexStatus(
		string $providerId,
		string $documentId,
		int $status,
		bool $reset = false,
	): void {
		$this->getIndexService()->updateIndexStatus($providerId, $documentId, $status, $reset);
	}

	public function updateIndexesStatus(
		string $providerId,
		array $documentIds,
		int $status,
		bool $reset = false,
	): void {
		$this->getIndexService()->updateIndexesStatus($providerId, $documentIds, $status, $reset);
	}


	public function updateIndexes(array $indexes): void {
		$this->getIndexService()->updateIndexes($indexes);
	}


	public function search(array $request, string $userId = ''): array {
		$searchRequest = $this->getSearchService()->generateSearchRequest($request);

		return $this->getSearchService()->search($userId, $searchRequest);
	}
}
