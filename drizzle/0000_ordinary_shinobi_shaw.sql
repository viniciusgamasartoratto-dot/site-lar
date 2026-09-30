CREATE TABLE `publications` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`title` text NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`category` text DEFAULT '' NOT NULL,
	`reference` text DEFAULT '' NOT NULL,
	`link` text DEFAULT '' NOT NULL,
	`starts` text DEFAULT '' NOT NULL,
	`ends` text DEFAULT '' NOT NULL,
	`published` integer DEFAULT 0 NOT NULL,
	`file_key` text NOT NULL,
	`filename` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`created` text NOT NULL,
	`updated` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `publications_public_idx` ON `publications` (`kind`,`published`);