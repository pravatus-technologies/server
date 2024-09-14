<?php

declare (strict_types=1);
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\DB\QueryBuilder;

use OCP\DB\QueryBuilder\IQueryFunction;

class QueryFunction implements IQueryFunction {
	/** @var string */
	protected $function;

	public function __construct($function) {
		$this->function = $function;
	}

	public function __toString(): string {
		return (string)$this->function;
	}
}
