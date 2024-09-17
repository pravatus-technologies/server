/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export default class ProfileSections {

	_sections

	constructor() {
		this._sections = []
	}

	/**
	 * @param {registerSectionCallback} section To be called to mount the section to the profile page
	 */
	registerSection(section) {
		this._sections.push(section)
	}

	getSections() {
		return this._sections
	}

}
