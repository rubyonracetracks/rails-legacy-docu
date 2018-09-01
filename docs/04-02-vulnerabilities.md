---
id: 04-02-vulnerabilities
title: "Unit 4 Chapter 2: Upgrading Gems with Security Vulnerabilities"
sidebar_label: "Chapter 2: Gems with Vulnerabilities"
---

## Checking for Gem Vulnerabilities
Run the test_code.sh script.  The Bundler Audit and Brakeman tools will list any vulnerabilities.  The Gemsurance Report will highlight in red the vulnerable gems.

## Updating the Gemfile
* In the Gemfile, upgrade the flagged gems to the latest versions available.  Run the upgrade_gems.sh script.  If all goes well, all tests pass.
* If there are errors, you may need to hold back on upgrades or make other suggested adjustments.  (It doesn't do much good to replace warnings with errors.)  Run the upgrade_gems.sh script.
* When you can run the upgrade_gems.sh script and not get errors, you are ready to git add/commit/push your changes and move on.
