<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OC\DB\Middlewares;

use Doctrine\DBAL\Driver;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\Driver\Middleware;
use Doctrine\DBAL\Driver\Middleware\AbstractDriverMiddleware;

final class SQLiteCaseSensitiveLike implements Middleware {
	public function wrap(Driver $driver): Driver {
		return new class($driver) extends AbstractDriverMiddleware {
			/**
			 * {@inheritDoc}
			 */
			public function connect(
				#[\SensitiveParameter]
				array $params,
			): Connection {
				$connection = parent::connect($params);
				$connection->exec('PRAGMA case_sensitive_like = true');
				return $connection;
			}
		};
	}
}
