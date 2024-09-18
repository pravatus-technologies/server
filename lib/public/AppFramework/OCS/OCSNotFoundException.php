<?php
/**
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\AppFramework\OCS;

use Exception;
use OCP\AppFramework\Http;

/**
 * Class OCSNotFoundException
 *
 * @since 9.1.0
 */
class OCSNotFoundException extends OCSException {
	/**
	 * @since 9.1.0
	 */
	public function __construct(string $message = '', ?Exception $previous = null) {
		parent::__construct($message, Http::STATUS_NOT_FOUND, $previous);
	}
}
