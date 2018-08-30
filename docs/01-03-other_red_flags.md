---
id: 01-03-other_red_flags
title: "Unit 1 Chapter 3: Other Red Flags"
sidebar_label: "Chapter 3: Other Red Flags"
---

## No Setup Instructions
* Not having setup instructions promotes the infamous "but it works on my machine" problem.  This makes it much more difficult for anyone who joins your project to get started, and you live in fear that something will happen to your original development environment.
* If you use the Ruby on Racetracks system (which includes a custom Docker image and a build_fast.sh script), you start your project already covered.

## No Database Seeding Script
* It shouldn't be difficult to provide a database seeding script, but not all projects provide one.  It allows you to see on your browser what a user of the app would see.  This is NOT a substitute for tests, but having data in your development app allows you to see the finer details that aren't covered by the tests.
* If you use the Ruby on Racetracks system (which includes the seeding script in the build_fast.sh script), you start your project already covered.

## Unpinned Gem Versions in the Gemfile
* Running "bundle update" means upgrading all of the unpinned gems listed in the Gemfile.  Given the risk of breaking things, it's better to upgrade gems in stages.  If things don't pan out, it's MUCH easier to pinpoint which gem is the culprit and take action to address this.
* If you pin every gem listed, the "bundle update" command upgrades the gems listed in Gemfile.lock but not in the Gemfile.  If this pans out, then you can turn your attention to upgrading the gems listed in the Gemfile.
* If you use the Ruby on Racetracks way to start your app, you start off with all gem versions in the Gemfile pinned.

## Not Using Bundler-Audit, Brakeman, and Gemsurance
* The bundler-audit and Brakeman gems check your app for security vulnerabilities.
* The Gemsurance gem checks your app for outdated gems and gems with security vulnerabilities and prints out a table with color-coded statuses of each gem version in your app.
* If you're unwilling to pay for continuous integration on a proprietary Rails app, it is especially important to have these gems to warn you of security vulnerabilities.
* If you use the Ruby on Racetracks way to start your app, you start off with these gems already included.

## Very Outdated Ruby Versions
Upgrading the app's version of Ruby is a frequently neglected task.  I know we're all busy, but it looks bad when an app's Ruby version is from several versions ago.  Worse yet, the Ruby team periodically drops support of old versions of Ruby.

## Very Outdated Ruby Gems
Upgrading the versions of the Ruby gems is a frequently neglected task.  I know we're all busy, but it looks bad when an app has very old gem versions.  Worse yet, the teams behind these gems often drop support of very old versions, and these old gem versions sometimes get flagged for security vulnerabilities.
