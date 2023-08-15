<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OC;

use OCP\IEventSource;
use OCP\IEventSourceFactory;
use OCP\IRequest;
use OCP\Security\CSRF\ICsrfValidator;

class EventSourceFactory implements IEventSourceFactory {
	public function __construct(
		private IRequest $request,
		private ICsrfValidator $csrfValidator,
	) {
	}

	public function create(): IEventSource {
		return new EventSource(
			$this->request,
			$this->csrfValidator,
		);
	}
}
