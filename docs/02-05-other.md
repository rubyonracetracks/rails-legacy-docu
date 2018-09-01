---
id: 02-05-other
title: "Unit 2 Chapter 5: Other Steps"
sidebar_label: "Chapter 5: Other Steps"
---

## What's the point?
Now that you have a warranty against the infamous "but it works on my machine" problem, it's time to turn your attention to adding other Ruby on Racetracks elements to the app.

## Rails Neutrino
Once again, use the SearchMonkey tool to search the Rails Neutrino source code for instances of "WICHTIG".  You've added the elements from the mod-01-01.rb and mod-01-02.rb scripts.  Now it's time to add the elements from the other scripts.

## Highlights
You will add many additional Ruby on Racetracks features to the legacy app.  They include:
* Adding the brakeman, bundler-audit, and gemsurance gems to flag security vulnerabilities and outdated gems
* Pinning the gems in the Gemfile for easier upgrades
* Pinning the pin ffi, nokogiri, pg, and rails gems to aid maintenance of the custom Docker image: These gems take a long time to install, so it pays to pre-install them in the Docker image.
* Adding a script for deploying to Heroku
* Updating the credentials.sh script to aid the process of deploying to Heroku
* Enabling SSL for better security
* Configuring Puma for better performance
* Preventing accidental changes in the database in the production environment
* Adding scripts for running only model tests, only controller tests, and only helper/mailer tests.
* Adding the railroady and rails-erd gems to automatically outline the MVC architecture and list the parameters for each model
* Adding the better_errors, binding_of_caller, and pry-rails gems
* Adding a script for upgrading gems AND running the git_check.sh script
* Updating the REAME.md file
* Adding a debug box in the development environment
* Adding a seeding script, and adding it to the build_fast.sh script

## Procedure
* NOTE 1: Do not add the RuboCop or Rails Best Practices gems to a legacy app that doesn't already have them.  Cleaning up thousands of offenses is an industrial-sized job.
* NOTE 2: Some of the steps (like enabling SSL or configuring Puma) may have already been completed in the Rails app.  If that's the case, skip these steps.
* NOTE 3: If you need to keep the Ruby on Racetracks features out of your pull requests, skip adding the annotate gem.  Using the annotate gem adds comments to a large number of files.  Modifying so many files for the ruby_on_racetracks branch increases the risk of difficult merge conflicts.
* For each mod-*-*.rb script highlighted by SearchMonkey, perform the actions specified in the "WICHTIG" statement in the Rails app.  You may have to make slight changes along the way.  For example, the scripts for running tests are set up for MiniTest, not RSpec.
* Try out the feature added, and make sure everything works.
* When you see that all of the features you added in that particular mod-*-*.rb script are completed, git add/commit/push the change into the ruby_on_racetracks branch of the Rails app.
* Repeat this procedure until you have completed all of the highlighted additions.

## Git
* If you are a collaborator, submit the ruby_on_racetracks branch as a pull request.
* If you are contributing through pull requests from a fork, the ruby_on_racetracks branch is the one to switch to before working on features.
* From the ruby_on_racetracks branch, start a branch for a new feature.
* When your new feature is complete, git add/commit/push it.
* Go back to the master branch, and then start a new branch.  Just add "pr_" to the beginning of the name of the branch of your new feature.
* Use the "git cherry-pick" command to select the changes from the new feature branch you wish to add to the pr_* branch.
* Run the git_check.sh script to make sure you've covered all your bases.  When everything is ready, make a pull request for your pr_new_feature branch.

## Ruby on Racetracks Elements to Push
* If you need to keep most of the Ruby on Racetracks elements out of your pull requests but need to submit certain ones (such as switching from WEBrick to Puma), this section of this chapter is for you.
* For each feature addressed in a Git commit, go back to the master branch and then start a new branch for the feature.
  * Use the "git cherry-pick" command to select the changes from ruby_on_racetracks that you wish to submit.
  * Run the git_check.sh script in your new branch.
  * When everything is ready, make a new pull request for this branch.
