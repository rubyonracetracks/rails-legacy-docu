---
id: 01-01-biggest_pet_peeve
title: "Unit 1 Chapter 1: Biggest Pet Peeve"
sidebar_label: "Chapter 1: Biggest Pet Peeve"
---

## Lousy Test Suites

My biggest pet peeve is lousy test suites.  A Rails app with no tests or very few tests is a low quality app.  It can be tempting to blow off testing (especially given enough time pressure or a lack of testing know-how), but this is EXTREMELY counterproductive.  The time saved by blowing off testing is lost many times over.  PLEASE practice test-driven development.  If you're not up to writing tests before adding features, then PLEASE add the tests as soon as you're finished adding the features.

## Why Tests Are Important
* A good test suite is a warranty against accidental breakages in your app.  Having a good test suite and running it before each git add/commit/push ensures that you do not break functions that were previously working.  I don't know about you, but I HATE having to deal with issues that I thought were resolved.  It feels like the bad dream in which your academic diplomas have been retroactively revoked due to a minor technicality.
* A good test suite makes troubleshooting MUCH easier.  Having a comprehensive test suite means that if a feature stops working, it's easy to see which step in the multi-step process behind the feature is the weak link.  Not having a comprehensive suite means that it's difficult to pinpoint where the problem is, and this makes troubleshooting FAR more time-consuming.
* A good test suite also forces you to write better code, because you must make it testable.  If you don't practice test-driven development, or if you don't add tests as soon as your new features work, you may end up writing code that is difficult to test and refactor.
* If you think it's hard to write tests before you add the feature or immediately after you add the feature, it will be harder to write them weeks, months, or years later, when what you did is no longer fresh in your mind.  It will be even harder for somebody else to do it.
* Not writing tests in your Rails app puts you on the wrong side of history and the wrong side of the infamous 10X productivity divide.  If there are people who can create reliable, bug-free Rails apps WITHOUT a comprehensive test suite, they are as rare as people who become millionaires by winning the Publishers Clearing House sweepstakes.

## How To Prevent Lousy Test Suites In New Rails Apps
* Go to the <a href=http://www.rubyonracetracks.com/">Ruby on Racetracks</a> site to learn about tools for automatically creating a new Rails app with basic features and a comprehensive test suite already included.
* If you don't like the Ruby on Racetracks tools for starting a new Rails app, try other Rails generating tools like <a href="https://github.com/thoughtbot/suspenders">Suspenders</a> or <a href="http://www.railscomposer.com/">Rails Composer</a>.
* If you don't like any of the above tools for starting a new Rails app, then start your own.
* If you can start an app completely from scratch with the "rails new" command and then add all of the most basic features  (like testing, static pages, user/admin authentication, etc.) manually WITHOUT being tempted to cut corners, then you are MUCH, MUCH faster than I am.

## Summary
* Always have a comprehensive test suite in your Rails app.
* Create tests before or immediately after adding features to your app.  If you wait, you are swimming upstream against history.
* If you're too slow to create a complex Rails app with the "rails new" command WITHOUT being tempted to cut corners, please use an autopilot Rails generator system to create your app.