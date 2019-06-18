---
id: a-adoptatree
title: "Example: Adopt-A-Tree"
sidebar_label: "Adopt-A-Tree"
---

## Back Story
* During the warmer months of the year, trees need water to survive and grow.  Long periods without rain can stress the trees.  On the [Adopt-A-Tree](http://adoptatree.brewingabetterforest.com/) web site, users can sign up to water trees in their neighborhoods during the growing season.
* I found out about the Adopt-A-Tree app through the group [Open Twin Cities](http://www.opentwincities.org/), which builds and maintains this app for Minneapolis.
* As a collaborator, I added my Ruby on Racetracks elements to this app.  I also upgraded the Ruby version from 2.2 to 2.6 and the Rails version from 4.1 to 5.2. 

## Fresh Start
* If you have not already done so, install Docker on your machine.  More details are covered in the [Different Docker Tutorial](https://www.differentdockertutorial.com/).
* If you still have the OpenTwinCities directory, delete it.
* Enter the following commands in LXTerminal:
```
cd
mkdir OpenTwinCities
cd OpenTwinCities
git clone https://github.com/OpenTwinCities/docker-debian-stretch-use.git
cd docker-debian-stretch-use
sh rvm-rails-adoptatree.sh
```
* When prompted for a port offset value, enter "11".
* Enter the command "cd rvm-rails-adoptatree; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

## Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/OpenTwinCities/adopt-a-tree.git
cd adopt-a-tree
sh build_fast.sh; sh server.sh
```
* The build_fast.sh script installs the gems, configures the PostgreSQL database, and runs the tests. This process takes just a few minutes. If all goes well, all of the tests will pass.

## Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 11, port 3000 in Docker is linked to port 3011 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:3011/ to view the app.

## Viewing the App's Database
* Open pgAdmin in your desktop Linux setup to view the data in the app.
* Because you chose a port offset value of 11, port 5432 in Docker is linked to port 15443 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* In the upper left corner of the pgAdmin window, click on the plug icon to add a server.
* Fill in the following server parameters:
  * Name: adopt-a-tree
  * Host: localhost
  * Port: 15443
  * Username: adopta
* In the Object browser, go to Server Groups -> Servers -> adopt-a-tree -> Databases -> adopta_development -> schemas -> public - Tables.  Right-click on the desired object and go to View Data -> View All Rows.  You can now see the data.
