---
id: 01-02-other_pet_peeves
title: "Unit 1 Chapter 2: Other Pet Peeves"
sidebar_label: "Chapter 2: Other Pet Peeves"
---

## Time-Consuming Test Suites
* I hate test suites that take a long time to run.  Given that you cannot be ready to move on from a task until you've made sure that all your tests still pass, it's important to be able to run the entire test suite in a reasonable amount of time.
* Short feedback loops are good, because they allow you to move quickly.  If everything checks out, you'll know this sooner and can move on to other tasks.
* Long feedback loops are terrible, because they slow you down.  If everything checks out, it takes you longer to find out, which means that it takes longer before you can move on.  If not everything checks out, waiting longer for results means waiting longer before taking corrective action and then having to run the entire test suite again.
* Long feedback loops are terrible because they encourage people to blow off testing in the name of "working faster".  As explained in the previous chapter, this results in a buggier app and much more time-consuming troubleshooting and debugging processes.

## Intermittently Failing Tests
* Intermittent tests mean that you cannot always believe everything you see and throw doubts on your code.  This slows down progress and encourages people to blow off testing.
* You should run the test suite frequently.  This allows you to see  intermittently failing tests earlier, which means you can take corrective action sooner.

## Excessive Screen and Log Output
* The screen output when you run the tests and database seeding script should be reasonably short and clean.  Excessive screen output obscures important messages, warnings, and information needed to troubleshoot and debug.
* Outputs to the development, testing, and production logs should be reasonably short and clean.  Excessive log output obscures important information needed to troubleshoot and debug.
