---
id: a-rubymn2
title: "Example: New Ruby.MN"
sidebar_label: "New Ruby.MN"
---

## Back Story
* The [Ruby.MN](https://www.meetup.com/ruby-mn/) group had a web site that listed sponsors and allowed users to post a "for hire" profile, projects, and job openings.
* The old Ruby.MN site was was retired in early 2018 due to concerns about security vulnerabilities.
* The old Ruby.MN site was first created on GitHub in 2006, during the very early days of Ruby on Rails and before the Devise gem and integration tests were available.  At the time it was retired, it was still in Rails 3.2.
* I used my [Generic App gem](https://www.genericapp.net/) to create a new site with the Devise gem for authentication and with integration tests.
* The new Ruby.MN site is at https://rubymn2.herokuapp.com/.

## Fresh Start
* If you have not already done so, install Docker on your machine.  More details are covered in the [Different Docker Tutorial](https://www.differentdockertutorial.com/).
* If you still have the jhsu802701 directory, delete it.
* Enter the following commands in LXTerminal:
```
cd
mkdir jhsu802701
cd jhsu802701
git clone https://gitlab.com/jhsu802701/docker-debian-stretch-use.git
cd docker-debian-stretch-use
sh rvm-rails-rubymn2.sh
```
* When prompted for a port offset value, enter "12".
* Enter the command "cd rvm-rails-rubymn2; sh download_new_image.sh" and follow the instructions.
* It will take a few minutes to download the Docker image.  When the process is finished, a Docker container will be created for you, and you will be automatically logged in.

## Setting Up The App
* In Docker, enter the following commands:
```
git clone https://github.com/jhsu802701/rubymn2
cd rubymn2
sh build_fast.sh; sh server.sh
```
* When you are prompted for the username and password, just press Enter to use the default values.
* The build_fast.sh script installs the gems, configures the PostgreSQL database, and runs the tests. This process takes just a few minutes. If all goes well, all of the tests will pass.

## Viewing the App
* In a few minutes, the build process will be finished, and you will see the Rails server running.
* Because you chose a port offset value of 12, port 3000 in Docker is linked to port 3012 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* Go to http://localhost:3012/ to view the app.

## Viewing the App's Database
* Open pgAdmin in your desktop Linux setup to view the data in the app.
* Because you chose a port offset value of 12, port 5432 in Docker is linked to port 15444 in your desktop Linux system.  The ports.txt file in the shared directory lists the port assignments.
* In the upper left corner of the pgAdmin window, click on the plug icon to add a server.
* Note that your database username and password are now stored in the config/application.yml file in your app.
* Fill in the following server parameters:
  * Name: rubymn2
  * Host: localhost
  * Port: 15444
  * Username: username_db_rubymn2
  * Password: long_way_stinks
* In the Object browser, go to Server Groups -> Servers -> rubymn2 -> Databases -> db_rubymn2_dev -> schemas -> public - Tables.  Right-click on the desired object and go to View Data -> View All Rows.  You can now see the data.
