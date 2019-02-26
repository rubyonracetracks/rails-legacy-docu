---
id: a-bridge_troll
title: "Example: Bridge Troll"
sidebar_label: "Bridge Troll"
---

## Back Story
[Bridge Troll](https://www.bridgetroll.org/) is an event management system for RailsBridge, MobileBridge, GoBridge, and other -Bridge software development workshop events.

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
sh rails-bridge_troll.sh
```
* When prompted for a port offset value, enter "16".
* Enter the command "cd rails-bridge_troll; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

## Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/jhsu802701/bridge_troll.git
cd bridge_troll
git checkout ruby_on_racetracks
sh build_fast.sh; sh server.sh
```
* The build_fast.sh script will give you instructions on further actions to take before continuing.  These steps are necessary to allow you to log into the local app through Facebook, GitHub, Google, Meetup, or Twitter.
* The build_fast.sh script installs the gems, configures the database, and runs the tests. This process takes a few minutes. If all goes well, all of the tests will pass.

## Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 16, port 3000 in Docker is linked to port 3016 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:3016/ to view the app.

## Viewing Jasmine
* Jasmine is the tool used in this app for testing the JavaScript code.
* Start a new LXTerminal tab.  Run the join.sh script to enter the Docker container.
* Enter the command "cd bridge_troll; sh jasmine.sh".
* Because you chose a port offset value of 16, port 8888 in Docker is linked to port 8904 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:8904/ in your browser to view the Jasmine test output.

## Viewing the App's Database
* In your desktop Linux setup, it's time to view the data in the app.  Open SQLiteBrowser. Go to File -> Open Database, and open the db/development.sqlite3 within your app. (The directory tree is jhsu802701 -> docker-debian-stretch -> rails-bridge_troll -> shared -> bridge_troll.)
* Go to the "Browse Data" tab.  You can now view the data in your app's database.
