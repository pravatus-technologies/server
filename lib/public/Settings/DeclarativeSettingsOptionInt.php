<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCP\Settings;

use OC\Settings\DeclarativeSettingsOption;

/**
 * @psalm-import-type DeclarativeSettingsFormFieldType from IDeclarativeSettingsForm
 * @psalm-import-type DeclarativeSettingsFormFieldOptions from IDeclarativeSettingsForm
 */
class DeclarativeSettingsOptionInt implements IDeclarativeSettingsOption {
	private DeclarativeSettingsOption $internal;

	/**
	 * @param DeclarativeSettingsFormFieldOptions $options
	 */
	public function __construct(
		public readonly string $appName,
		public readonly DeclarativeSettingsForm $form,
		public readonly string $id,
		public readonly string $title,
		public readonly int $default,
		public readonly mixed $options,
		public readonly ?string $description = null,
		public readonly ?string $placeholder = null,
		public readonly ?string $label = null,
	) {
		$this->internal = new DeclarativeSettingsOption($this->appName, $this->form, $this->id);
	}

	public function getId(): string {
		return $this->id;
	}

	public function getTitle(): string {
		return $this->title;
	}

	public function getDescription(): ?string {
		return $this->description;
	}

	public function getType(): string {
		return DeclarativeSettingsTypes::NUMBER;
	}

	public function getPlaceholder(): ?string {
		return $this->placeholder;
	}

	public function getLabel(): ?string {
		return $this->label;
	}

	public function getDefault(): int {
		return $this->default;
	}

	public function getOptions(): mixed {
		return $this->options;
	}

	public function setValue(int $value): void {
		$this->internal->setValue($value);
	}

	public function getValue(): int {
		return $this->internal->getValue();
	}

	public function deleteValue(): void {
		$this->internal->deleteValue();
	}
}
