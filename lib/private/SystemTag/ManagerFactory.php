<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\SystemTag;

use OCP\EventDispatcher\IEventDispatcher;
use OCP\IServerContainer;
use OCP\SystemTag\ISystemTagManager;
use OCP\SystemTag\ISystemTagManagerFactory;
use OCP\SystemTag\ISystemTagObjectMapper;

/**
 * Default factory class for system tag managers
 *
 * @package OCP\SystemTag
 * @since 9.0.0
 */
class ManagerFactory implements ISystemTagManagerFactory {
	public function __construct(
		private IServerContainer $serverContainer,
	) {
	}

	public function getManager(): ISystemTagManager {
		return new SystemTagManager(
			$this->serverContainer->getDatabaseConnection(),
			$this->serverContainer->getGroupManager(),
			$this->serverContainer->get(IEventDispatcher::class),
		);
	}

	public function getObjectMapper(): ISystemTagObjectMapper {
		return new SystemTagObjectMapper(
			$this->serverContainer->getDatabaseConnection(),
			$this->getManager(),
			$this->serverContainer->get(IEventDispatcher::class),
		);
	}
}
