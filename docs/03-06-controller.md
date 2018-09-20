---
id: 03-06-controller
title: "Unit 3 Chapter 6: Controller Tests"
sidebar_label: "Chapter 6: Controller Tests"
---

In this chapter, you will add controller tests to the app.

## Outlining
From the root directory of the app, enter the command "sh outline.sh".  This generates outlines and block diagrams of the MVC architecture in the log directory.  Additionally, the block diagrams of the controllers will include lists of methods in each controller.

## Tests to Add
* For every controller in app/controllers, there should be tests for each one (in spec/controllers, test/controllers, or in an integration test of consolidated controller tests).
* For every controller with methods, there should be tests for each method.  There should be tests for what happens when a visitor, a user, and when ad admin tries to perform the action.
* Each time you add a set of controller tests and get them to pass, git add/commit/push your changes.

## Spaghetti Code
* Watch out for spaghetti code requiring controller methods to perform many tasks that are NOT normally done in controllers.  This can make it extremely difficult or impossible to write good tests.
* Watch out for complex URLs.  They may be a reflection of trying to do too many things all at once.  You may need to add intermediate models and/or actions in the "lib" directory.  Trying to do too many things at once (such as data processing) can lead to problems that only manifest in the production environment, such as timeout errors and excessive memory usage.
