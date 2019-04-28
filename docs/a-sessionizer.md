---
id: a-sessionizer
title: "Example: Minnestar Sessionizer"
sidebar_label: "Minnestar Sessionizer"
---

## Back Story
* The [Minnestar](https://minnestar.org/) has an annual 1-day conference called Minnebar.
* Minnestar has a [Sessionizer](https://github.com/minnestar/sessionizer) app in which participants can add Minnebar sessions, and an algorithm provides a time slot and room for these sessions.
* The collaborators prefer the Vagrant setup.  My way is much faster.  Using Docker instead of Vagrant means faster performance and not having to wait for a bootup process to finish.
* Because I am not a collaborator, I contribute through my fork and with pull requests.  In my fork, I do my development in my ruby_on_racetracks branch, which contains my Ruby on Racetracks elements.  I use the "git cherry-pick" command for creating pull requests that provide the desired changes to the mainline code while keeping my Ruby on Racetracks elements out.
* Please note that the "src" directory in the sessionizer app is the root directory of the Rails app.

## Prerequisites
If you have not already done so, install Docker on your machine.  More details are covered in the [Different Docker Tutorial](https://www.differentdockertutorial.com/).

## Entering the Custom Docker Container
* Enter the following commands in LXTerminal:
```
cd
mkdir jhsu802701
cd jhsu802701
git clone https://gitlab.com/jhsu802701/docker-debian-stretch
cd docker-debian-stretch
sh rbenv-rails-sessionizer.sh
```
* When prompted for a port offset value, enter "13".
* Enter the command "cd rbenv-rails-sessionizer; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

## Database Configuration
* The config/database.yml file is different for the ruby_on_racetracks branch.  In this branch, no username or password is specified.  This allows the command "bundle exec rake app:make_believe" to work.
* The configuration of the master branch requires that your OS username be "vagrant".  If your OS username is anything else, the "bundle exec rake app:make_believe" command won't work, and you will be unable to seed the database.

## Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/jhsu802701/sessionizer
cd sessionizer
git checkout ruby_on_racetracks
cd src
sh build_fast.sh; sh server.sh
```
* The build_fast.sh script installs the gems, configures the PostgreSQL database, and runs the tests. This process takes just a few minutes. If all goes well, all of the tests will pass.

## Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 13, port 3000 in Docker is linked to port 3013 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:3013/ to view the app.

## Viewing the App's Database
* Open pgAdmin in your desktop Linux setup to view the data in the app.
* Because you chose a port offset value of 13, port 5432 in Docker is linked to port 15445 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* In the upper left corner of the pgAdmin window, click on the plug icon to add a server.
* Fill in the following server parameters:
  * Name: sessionizer
  * Host: localhost
  * Port: 15445
  * Username: postgres
* In the Object browser, go to Server Groups -> Servers -> sessionizer -> Databases -> sessionizer_development -> schemas -> public - Tables.  Right-click on the desired object and go to View Data -> View All Rows.  You can now see the data.
