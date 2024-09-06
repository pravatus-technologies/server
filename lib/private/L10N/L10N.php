<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\L10N;

use OCP\IL10N;
use OCP\L10N\IFactory;
use Psr\Log\LoggerInterface;
use Punic\Calendar;
use Symfony\Component\Translation\IdentityTranslator;

class L10N implements IL10N {
	/** @var IFactory */
	protected $factory;

	/** @var string App of this object */
	protected $app;

	/** @var string Language of this object */
	protected $lang;

	/** @var string Locale of this object */
	protected $locale;

	/** @var IdentityTranslator */
	private $identityTranslator;

	/** @var string[] */
	private $translations = [];

	/**
	 * @param IFactory $factory
	 * @param string $app
	 * @param string $lang
	 * @param string $locale
	 * @param array $files
	 */
	public function __construct(IFactory $factory, $app, $lang, $locale, array $files) {
		$this->factory = $factory;
		$this->app = $app;
		$this->lang = $lang;
		$this->locale = $locale;

		foreach ($files as $languageFile) {
			$this->load($languageFile);
		}
	}

	public function getLanguageCode(): string {
		return $this->lang;
	}

	public function getLocaleCode(): string {
		return $this->locale;
	}

	public function t(string $text, $parameters = []): string {
		if (!\is_array($parameters)) {
			$parameters = [$parameters];
		}

		return (string)new L10NString($this, $text, $parameters);
	}

	public function n(string $text_singular, string $text_plural, int $count, array $parameters = []): string {
		$identifier = "_{$text_singular}_::_{$text_plural}_";
		if (isset($this->translations[$identifier])) {
			return (string)new L10NString($this, $identifier, $parameters, $count);
		}

		if ($count === 1) {
			return (string)new L10NString($this, $text_singular, $parameters, $count);
		}

		return (string)new L10NString($this, $text_plural, $parameters, $count);
	}

	public function l(string $type, $data = null, array $options = []) {
		if ($this->locale === null) {
			// Use the language of the instance
			$this->locale = $this->getLanguageCode();
		}
		if ($this->locale === 'sr@latin') {
			$this->locale = 'sr_latn';
		}

		if ($type === 'firstday') {
			return (int)Calendar::getFirstWeekday($this->locale);
		}
		if ($type === 'jsdate') {
			return (string)Calendar::getDateFormat('short', $this->locale);
		}

		$value = new \DateTime();
		if ($data instanceof \DateTime) {
			$value = $data;
		} elseif (\is_string($data) && !is_numeric($data)) {
			$data = strtotime($data);
			$value->setTimestamp($data);
		} elseif ($data !== null) {
			$data = (int)$data;
			$value->setTimestamp($data);
		}

		$options = array_merge(['width' => 'long'], $options);
		$width = $options['width'];
		switch ($type) {
			case 'date':
				return (string)Calendar::formatDate($value, $width, $this->locale);
			case 'datetime':
				return (string)Calendar::formatDatetime($value, $width, $this->locale);
			case 'time':
				return (string)Calendar::formatTime($value, $width, $this->locale);
			case 'weekdayName':
				return (string)Calendar::getWeekdayName($value, $width, $this->locale);
			default:
				return false;
		}
	}

	/**
	 * Returns an associative array with all translations
	 *
	 * Called by \OC_L10N_String
	 * @return array
	 */
	public function getTranslations(): array {
		return $this->translations;
	}

	/**
	 * @internal
	 * @return IdentityTranslator
	 */
	public function getIdentityTranslator(): IdentityTranslator {
		if (\is_null($this->identityTranslator)) {
			$this->identityTranslator = new IdentityTranslator();
			// We need to use the language code here instead of the locale,
			// because Symfony does not distinguish between the two and would
			// otherwise e.g. with locale "Czech" and language "German" try to
			// pick a non-existing plural rule, because Czech has 4 plural forms
			// and German only 2.
			$this->identityTranslator->setLocale($this->getLanguageCode());
		}

		return $this->identityTranslator;
	}

	/**
	 * @param string $translationFile
	 * @return bool
	 */
	protected function load(string $translationFile): bool {
		$json = json_decode(file_get_contents($translationFile), true);
		if (!\is_array($json)) {
			$jsonError = json_last_error();
			\OCP\Server::get(LoggerInterface::class)->warning("Failed to load $translationFile - json error code: $jsonError", ['app' => 'l10n']);
			return false;
		}

		$this->translations = array_merge($this->translations, $json['translations']);
		return true;
	}
}
