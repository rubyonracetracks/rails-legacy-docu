---
id: a-codetriage
title: "Example: CodeTriage"
sidebar_label: "CodeTriage"
---

## Back Story
[CodeTriage](https://www.codetriage.com/) is a site where users can pick their favorite GitHub repositories for receiving an email about a different open issue each day.

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
* When prompted for a port offset value, enter "14".
* Enter the command "cd rvm-rails-codetriage; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

## Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/jhsu802701/codetriage.git
cd codetriage
git checkout ruby_on_racetracks
sh build_fast.sh; sh server.sh
```
* The build_fast.sh script will give you instructions on further actions to take before continuing.  These actions include setting up an instance of the app on GitHub, running a Redis server, and setting environment variables for the OmniAuth capability.
* Remember that your port offset is 14, which means that port 3000 in Docker converts to port 3014 in your desktop Linux system.
* Thus, the Homepage URL to enter in GitHub is http://localhost:3014/, and the Authorization callback URL to enter is http://localhost:3014/users/auth/github/callback.
* The build_fast.sh script installs the gems, configures the PostgreSQL database, and runs the tests. This process takes a few minutes. If all goes well, all of the tests will pass.

## Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 14, port 3000 in Docker is linked to port 3014 in your desktop Linux system.
* Go to http://localhost:3014/ to view the app.

## Viewing the App's Database
* Open pgAdmin in your desktop Linux setup to view the data in the app.
* Because you chose a port offset value of 14, port 5432 in Docker is linked to port 15446 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* In the upper left corner of the pgAdmin window, click on the plug icon to add a server.
* Fill in the following server parameters:
  * Name: codetriage
  * Host: localhost
  * Port: 15446
  * Username: winner
* In the Object browser, go to Server Groups -> Servers -> codetriage -> Databases -> triage_development -> schemas -> public - Tables.  Right-click on the desired object and go to View Data -> View All Rows.  You can now see the data.
