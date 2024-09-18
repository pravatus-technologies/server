<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCP\BackgroundJob;

/**
 * This interface represents a background job run by cron
 *
 * To implement a background job, you must extend either \OCP\BackgroundJob\Job,
 * \OCP\BackgroundJob\TimedJob or \OCP\BackgroundJob\QueuedJob
 *
 * @since 7.0.0
 * @since 25.0.0 deprecated `execute()` method in favor of `start()`
 * @since 31.0.0 removed deprecated `execute()` method
 */
interface IJob {
	/**
	 * @since 24.0.0
	 */
	public const TIME_INSENSITIVE = 0;
	/**
	 * @since 24.0.0
	 */
	public const TIME_SENSITIVE = 1;

	/**
	 * Start the background job with the registered argument
	 *
	 * This methods will take care of running the background job, of initializing
	 * the state and cleaning up the job list after running the job.
	 *
	 * For common background job scenario, you will want to use TimedJob or QueuedJob
	 * instead of overwriting this method.
	 *
	 * @param IJobList $jobList The job list that manages the state of this job
	 * @since 25.0.0
	 */
	public function start(IJobList $jobList): void;

	/**
	 * @since 7.0.0
	 */
	public function setId(int $id);

	/**
	 * @since 7.0.0
	 */
	public function setLastRun(int $lastRun);

	/**
	 * @param mixed $argument
	 * @since 7.0.0
	 */
	public function setArgument($argument);

	/**
	 * Get the id of the background job
	 * This id is determined by the job list when a job is added to the list
	 *
	 * @return int
	 * @since 7.0.0
	 */
	public function getId();

	/**
	 * Get the last time this job was run as unix timestamp
	 *
	 * @return int
	 * @since 7.0.0
	 */
	public function getLastRun();

	/**
	 * Get the argument associated with the background job
	 * This is the argument that will be passed to the background job
	 *
	 * @return mixed
	 * @since 7.0.0
	 */
	public function getArgument();
}
