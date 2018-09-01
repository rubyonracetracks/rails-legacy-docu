---
id: conclusions
title: "Conclusions: Refactoring and New Features"
sidebar_label: "Refactoring and New Features"
---

Congratulations!  Now you are in a good position to refactor and add features to the app.  Remember the following things:
* Make changes in many small steps instead of Holy Grail passes.
* If you need to keep the Ruby on Racetracks elements out of the source code:
  * Keep the master branch of your fork up-to-date.
  * Keep the ruby_on_racetracks branch of your fork up to date.
  * When you need to make changes to the mainline source code, go to your ruby_on_racetracks branch, start a new branch, and make your changes there.  Go to the master branch, start a new branch for the pull request, and cherry pick the changes you wish to put in this branch you specifically designated as the one for the pull request.
* Use test-driven development, or add tests immediately after adding a feature.  DO NOT WAIT!
* Keep the Ruby gem, gem versions, and custom Docker image of the app up-to-date.
