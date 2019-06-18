---
id: a-octobox
title: "Example: Octobox"
sidebar_label: "Octobox"
---

## Back Story
[Octobox](https://octobox.io/) is a site where users can search and filter their GitHub notifications.  It's also an app that can be deployed to Heroku or other sites.

## Getting Started

## Fresh Start
* If you have not already done so, install Docker on your machine.  More details are covered in the [Different Docker Tutorial](https://www.differentdockertutorial.com/).
* If you still have the jhsu802701 directory, delete it.
* Enter the following commands in LXTerminal:
```
cd
mkdir jhsu802701
cd jhsu802701
git clone https://gitlab.com/jhsu802701/docker-debian-stretch-use
cd docker-debian-stretch-use
sh rvm-rails-codetriage.sh
```
* When prompted for a port offset value, enter "15".
* Enter the command "cd rvm-rails-octobox; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

### Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/jhsu802701/octobox.git
cd octobox
git checkout ruby_on_racetracks
sh build_fast.sh; sh server.sh
```
* The build_fast.sh script will give you instructions on further actions to take before continuing.  These actions include setting up an instance of the app on GitHub, running a Redis server, and setting environment variables for the OmniAuth capability.
* Remember that your port offset is 15, which means that port 3000 in Docker converts to port 3015 in your desktop Linux system.
* Thus, the Homepage URL to enter in GitHub is http://localhost:3015/, and the Authorization callback URL to enter is http://localhost:3015/auth/github/callback.
* The build_fast.sh script installs the gems, configures the PostgreSQL database, and runs the tests. This process takes a few minutes. If all goes well, all of the tests will pass.

### Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 15, port 3000 in Docker is linked to port 3015 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:3015/ to view the app.

### Viewing the App's Database
* Open pgAdmin in your desktop Linux setup to view the data in the app.
* Because you chose a port offset value of 15, port 5432 in Docker is linked to port 15447 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* In the upper left corner of the pgAdmin window, click on the plug icon to add a server.
* Note that your database username and password are now stored in the config/application.yml file in your app.
* Fill in the following server parameters:
  * Name: octobox
  * Host: localhost
  * Port: 15447
  * Username: winner
* In the Object browser, go to Server Groups -> Servers -> octobox -> Databases -> octobox_development -> schemas -> public - Tables.  Right-click on the desired object and go to View Data -> View All Rows.  You can now see the data.

## Analysis

### Non-Standard Elements
* Environment variables are very important in this app, because they determine the availability of certain content and features.  For this reason, I provide multiple Bash scripts for starting up the local server in my ruby_on_racetracks branch.
* This app requires the MySQL database.  In fact, this app is designed to work with either PostgreSQL or MySQL.
* The config/database.yml file shows that database parameters like the database name, username, and password are parameters of DatabaseConfig.  You can see in lib/database_config.rb that these parameters are the result of the ENV.fetch command.  Although you see environment variable names that begin with "OCTOBOX_DATABASE", do NOT set them in the .env file, because that will cause tests in test/lib/database_config_test.rb to fail.  The ONLY variables that you should set in the .env file in your local development setup are GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET.  You can see in the test/lib/database_config_test.rb that the value of DatabaseConfig.username should be '' for PostgreSQL and "root" for MySQL.  The value of DatabaseConfig.password should be '' in either case.  Because MySQL comes with the user "root" with no password by default, there is NO need to do anything to configure MySQL.  For PostgreSQL, having '' specified for the username and password requires giving the Linux system user the superuser status in PostgreSQL.  All this is covered in the build_fast.sh script.  Yes, this issue gave me fits when the lib tests were re-enabled.
* Do NOT run the command "rails test".  Note that a complicated "rake" command is used in the .travis.yml file.  Note in the Rakefile that certain tests are skipped.  The test_app.sh and related Bash scripts are your friends, because you don't need to type in or consciously remember that complicated rake command.
* My custom Docker image and build_fast.sh script are my friends.  I found this app to be more finicky than most.  There were times when I began adding tests and had long cascade of errors and test failures.  Even after I removed all my changes, the cascade of errors and test failures persisted.

### Things I Disagree With
* Capybara is not used in this app.  The integration tests follow the Rails Tutorial playbook (Minitest without Capybara).  I prefer having Capybara because of the "click" and "fill_in" commands that do a better job of simulating the user experience.  My attempts to add Capybara caused long cascades of errors and test failures, so I never made any pull requests to do so.
* SimpleCov is no longer used in the mainline app.  (It was provided at one time but has since been removed.)  I use SimpleCov and a Codecov badge in my ruby_on_racetracks branch.  I had to make special tweaks in test/test_helper.rb because it showed certain lib directory files to be untested even though those tests were clearly being run.  I added 'track_files "{lib}/*.rb"' to SimpleCov.start, and I added "Dir[Rails.root.join('lib/*.rb')].each {|file| load file }".
