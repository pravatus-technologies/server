/**
 * @copyright 2024 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import moment from '@nextcloud/moment'
import { Column, Node } from '@nextcloud/files'
import { getCurrentUser } from '@nextcloud/auth'
import { dirname } from '@nextcloud/paths'
import { translate as t } from '@nextcloud/l10n'

import Vue from 'vue'
import NcUserBubble from '@nextcloud/vue/dist/Components/NcUserBubble.js'

import { sortByDeletionTime } from './utils.ts'

const parseOriginalLocation = (node: Node): string => {
	const path = node.attributes?.['trashbin-original-location'] !== undefined ? String(node.attributes?.['trashbin-original-location']) : null
	if (!path) {
		return t('files_trashbin', 'Unknown')
	}
	const dir = dirname(path)
	if (dir === path) { // Node is in root folder
		return t('files_trashbin', 'All files')
	}
	return dir.replace(/^\//, '')
}

interface DeletedBy {
	userId: null | string
	displayName: null | string
	label: null | string
}

const generateLabel = (userId: null | string, displayName: null | string) => {
	const currentUserId = getCurrentUser()?.uid
	if (userId === currentUserId) {
		return t('files_trashbin', 'You')
	}
	if (!userId && !displayName) {
		return t('files_trashbin', 'Unknown')
	}
	return null
}

const parseDeletedBy = (node: Node): DeletedBy => {
	const userId = node.attributes?.['trashbin-deleted-by-id'] !== undefined ? String(node.attributes?.['trashbin-deleted-by-id']) : null
	const displayName = node.attributes?.['trashbin-deleted-by-display-name'] !== undefined ? String(node.attributes?.['trashbin-deleted-by-display-name']) : null
	const label = generateLabel(userId, displayName)
	return {
		userId,
		displayName,
		label,
	}
}

const originalLocation = new Column({
	id: 'original-location',
	title: t('files_trashbin', 'Original location'),
	render(node) {
		const originalLocation = parseOriginalLocation(node)
		const span = document.createElement('span')
		span.title = originalLocation
		span.textContent = originalLocation
		return span
	},
	sort(nodeA, nodeB) {
		const locationA = parseOriginalLocation(nodeA)
		const locationB = parseOriginalLocation(nodeB)
		return locationA.localeCompare(locationB)
	},
})

const deletedBy = new Column({
	id: 'deleted-by',
	title: t('files_trashbin', 'Deleted by'),
	render(node) {
		const { userId, displayName, label } = parseDeletedBy(node)
		if (label) {
			const span = document.createElement('span')
			span.textContent = label
			return span
		}

		const UserBubble = Vue.extend(NcUserBubble)
		const propsData = {
			size: 32,
			user: userId ?? undefined,
			displayName: displayName ?? t('files_trashbin', 'Unknown'),
		}
		const userBubble = new UserBubble({ propsData }).$mount().$el
		return userBubble as HTMLElement
	},
	sort(nodeA, nodeB) {
		const deletedByA = parseDeletedBy(nodeA).label ?? parseDeletedBy(nodeA).displayName ?? t('files_trashbin', 'Unknown')
		const deletedByB = parseDeletedBy(nodeB).label ?? parseDeletedBy(nodeB).displayName ?? t('files_trashbin', 'Unknown')
		return deletedByA.localeCompare(deletedByB)
	},
})

const deleted = new Column({
	id: 'deleted',
	title: t('files_trashbin', 'Deleted'),
	render(node) {
		const deletionTime = node.attributes?.['trashbin-deletion-time']
		const span = document.createElement('span')
		if (deletionTime) {
			span.title = moment.unix(deletionTime).format('LLL')
			span.textContent = moment.unix(deletionTime).fromNow()
			return span
		}

		// Unknown deletion time
		span.textContent = t('files_trashbin', 'A long time ago')
		return span
	},
	sort: sortByDeletionTime,
})

export const columns = [
	originalLocation,
	deletedBy,
	deleted,
]
