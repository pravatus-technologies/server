<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\DAV\Connector\Sabre;

use OC\Streamer;
use OCP\Files\File as NcFile;
use OCP\Files\Folder as NcFolder;
use OCP\Files\Node as NcNode;
use Psr\Log\LoggerInterface;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;
use Sabre\DAV\Tree;
use Sabre\HTTP\Request;
use Sabre\HTTP\Response;

/**
 * This plugin allows to download folders accessed by GET HTTP requests on DAV.
 * The WebDAV standard explicitly say that GET is not covered and should return what ever the application thinks would be a good representation.
 *
 * When a collection is accessed using GET, this will provide the content as a archive.
 * The type can be set by the `Accept` header (MIME type of zip or tar), or as browser fallback using a `accept` GET parameter.
 * It is also possible to only include some child nodes (from the collection it self) by providing a `filter` GET parameter or `X-NC-Files` custom header.
 */
class ZipFolderPlugin extends ServerPlugin {

	/**
	 * Reference to main server object
	 */
	private ?Server $server = null;

	public function __construct(
		private Tree $tree,
		private LoggerInterface $logger,
	) {
	}

	/**
	 * This initializes the plugin.
	 *
	 * This function is called by \Sabre\DAV\Server, after
	 * addPlugin is called.
	 *
	 * This method should set up the required event subscriptions.
	 */
	public function initialize(Server $server): void {
		$this->server = $server;
		$this->server->on('method:GET', $this->handleDownload(...), 100);
	}

	/**
	 * Adding a node to the archive streamer.
	 * This will recursively add new nodes to the stream if the node is a directory.
	 */
	protected function streamNode(Streamer $streamer, NcNode $node, string $rootPath): void {
		// Remove the root path from the filename to make it relative to the requested folder
		$filename = str_replace($rootPath, '', $node->getPath());

		if ($node instanceof NcFile) {
			$resource = $node->fopen('rb');
			if ($resource === false) {
				$this->logger->info('Cannot read file for zip stream', ['filePath' => $node->getPath()]);
				throw new \Sabre\DAV\Exception\ServiceUnavailable('Requested file can currently not be accessed.');
			}
			$streamer->addFileFromStream($resource, $filename, $node->getSize(), $node->getMTime());
		} elseif ($node instanceof NcFolder) {
			$streamer->addEmptyDir($filename);
			$content = $node->getDirectoryListing();
			foreach ($content as $subNode) {
				$this->streamNode($streamer, $subNode, $rootPath);
			}
		}
	}

	/**
	 * @return false|null
	 */
	public function handleDownload(Request $request, Response $response): bool|null {
		$node = $this->tree->getNodeForPath($request->getPath());
		if (!($node instanceof \OCA\DAV\Connector\Sabre\Directory)) {
			// only handle directories
			return null;
		}

		$query = $request->getQueryParameters();
		$filesParam = $query['files'] ?? '';
		$files = $request->getHeaderAsArray('X-NC-Files');
		// The preferred way would be headers, but this is not possible for simple browser requests ("links")
		// so we also need to support GET parameters
		if ($filesParam !== '') {
			$files = array_map(fn (string $name) => trim($name), explode(',', $filesParam));
		}

		// Get accept header - or if set overwrite with accept GET-param
		$accept = $request->getHeaderAsArray('Accept');
		$acceptParam = $query['accept'] ?? '';
		if ($acceptParam !== '') {
			$accept = array_map(fn (string $name) => strtolower(trim($name)), explode(',', $acceptParam));
		}
		$zipRequest = !empty(array_intersect(['application/zip', 'zip'], $accept));
		$tarRequest = !empty(array_intersect(['application/x-tar', 'tar'], $accept));
		if (!$zipRequest && !$tarRequest) {
			// does not accept zip or tar stream
			return null;
		}

		$folder = $node->getNode();
		$content = empty($files) ? $folder->getDirectoryListing() : [];
		foreach ($files as $path) {
			$child = $node->getChild($path);
			assert($child instanceof Node);
			$content[] = $child->getNode();
		}

		$streamer = new Streamer($tarRequest, -1, count($content));
		$streamer->sendHeaders($files ? 'download' : $folder->getName());
		$rootPath = $folder->getPath();
		foreach($content as $node) {
			$this->streamNode($streamer, $node, $rootPath);
		}
		$streamer->finalize();
		return false;
	
	}
}
