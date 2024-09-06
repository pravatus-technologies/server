<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\OCS;

use OCP\AppFramework\Http;
use OCP\Http\Client\IClient;
use OCP\Http\Client\IClientService;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\OCS\IDiscoveryService;

class DiscoveryService implements IDiscoveryService {
	/** @var ICache */
	private ICache $cache;

	/** @var IClient */
	private IClient $client;

	/**
	 * @param ICacheFactory $cacheFactory
	 * @param IClientService $clientService
	 */
	public function __construct(ICacheFactory $cacheFactory,
		IClientService $clientService
	) {
		$this->cache = $cacheFactory->createDistributed('ocs-discovery');
		$this->client = $clientService->newClient();
	}


	public function discover(string $remote, string $service, bool $skipCache = false): array {
		// Check the cache first
		if ($skipCache === false) {
			$cacheData = $this->cache->get($remote . '#' . $service);
			if ($cacheData) {
				$data = json_decode($cacheData, true);
				if (\is_array($data)) {
					return $data;
				}
			}
		}

		$discoveredServices = [];

		// query the remote server for available services
		try {
			$response = $this->client->get($remote . '/ocs-provider/', [
				'timeout' => 10,
				'connect_timeout' => 10,
			]);
			if ($response->getStatusCode() === Http::STATUS_OK) {
				$decodedServices = json_decode($response->getBody(), true);
				if (\is_array($decodedServices)) {
					$discoveredServices = $this->getEndpoints($decodedServices, $service);
				}
			}
		} catch (\Exception $e) {
			// if we couldn't discover the service or any end-points we return a empty array
		}

		// Write into cache
		$this->cache->set($remote . '#' . $service, json_encode($discoveredServices), 60 * 60 * 24);
		return $discoveredServices;
	}

	/**
	 * get requested end-points from the requested service
	 *
	 * @param array $decodedServices
	 * @param string $service
	 * @return array
	 */
	protected function getEndpoints(array $decodedServices, string $service): array {
		$discoveredServices = [];

		if (isset($decodedServices['services'][$service]['endpoints'])) {
			foreach ($decodedServices['services'][$service]['endpoints'] as $endpoint => $url) {
				if ($this->isSafeUrl($url)) {
					$discoveredServices[$endpoint] = $url;
				}
			}
		}

		return $discoveredServices;
	}

	/**
	 * Returns whether the specified URL includes only safe characters, if not
	 * returns false
	 *
	 * @param string $url
	 * @return bool
	 */
	protected function isSafeUrl(string $url): bool {
		return (bool)preg_match('/^[\/\.\-A-Za-z0-9]+$/', $url);
	}
}
