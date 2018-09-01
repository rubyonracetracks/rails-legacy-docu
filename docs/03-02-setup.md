---
id: 03-02-setup
title: "Unit 3 Chapter 2: Test Suite Setup"
sidebar_label: "Chapter 2: Test Suite Setup"
---

In this chapter, you will set up the tests if this task has not already been completed.  In a well-constructed app, there would be nothing to do here.

## MiniTest vs. RSpec vs. Cucumber
* If no tests have been provided, you are responsible for picking one of these options.
* I don't consider any of these options to be inherently superior over the others.  The important thing is making sure your test suite is fast and comprehensive.  So you might as well use the one that you are most familiar and comfortable with.
* I prefer MiniTest.  Using MiniTest makes it possible to use the Rails Neutrino source code as a giant cheat sheet.  I chose MiniTest over RSpec, because that's what Rails Tutorial uses.
* That said, if you are more comfortable and familiar with RSpec, then use that.  You can use older versions of Rails Tutorial for guidance, but be aware that many things have changed since those days.  (Rails Tutorial used RSpec initially but later switched to MiniTest.)

## Destroying Data Between Tests

## Database Cleaner

## Consolidating Tests
* Some apps are plagued with time-consuming test suites.
* If the test suite is long because the process of creating or destroying objects is agonizingly slow (and especially if some of these objects require the presence of other objects that take a long time to create), then you need to minimize the number of instances of creating these objects and then milk as many tests as you can from each instance.
* For some tests, you may wish to copy objects (with a command like "@object_1b = @object_1a") and then changing certain parameters.  This process is likely to be MUCH faster than creating a second object from scratch.
* You may need to consolidate all model tests into one big integration test.  You may need to consolidate all controller tests into another big integration test.
* If the processes in the lib directory are time-consuming, you may need to consolidate all lib tests into yet another big integration test.
* You may need to consolidate all integration tests of the show, index, create, edit, and destroy tests into one big integration test.
