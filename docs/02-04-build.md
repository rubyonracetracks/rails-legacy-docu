---
id: 02-04-build
title: "Unit 2 Chapter 4: Build Script"
sidebar_label: "Chapter 4: Build Script"
---

NOTE: This chapter may involve lots of trial-and-error.  Don't expect to breeze through it in 5 minutes.  Be prepared to take good notes.

## What's the point?
* When you reset your development environment, git clone the Rails app in the Docker container, and run the build_fast.sh script in the app, you should be ready to roll.  This should take just a few minutes, not hours.
* Being able to destroy your development environment and be back in business within 5 minutes means that anyone who joins the app after you can be ready to roll in minutes, not hours or days.  This also makes it easy to make sure your setup procedure is up-to-date.
* The custom Docker image and the build_fast.sh script are a warranty against the infamous "but it works on my machine" problem.

## Objectives
* After you reset the Docker container, you should be able to run the build_fast.sh script without errors.
* All tests should pass.
* You can view the app in your web browser.
* You can access the database with pgAdmin.


## Rails Neutrino Source Code
* Go to the <a href="https://github.com/rubyonracetracks/rails_neutrino_5">Rails Neutrino</a> page.  Use the "git clone" command to download the source code.
* Use the SearchMonkey tool to search for the word "WICHTIG".  This shows you the elements from the Rails Neutrino app generator that you should add to legacy apps.
* For this chapter, focus on just the contents of the mod-01-02.rb script.  (You took care of the .DS_Store files in the previous chapter.)

## Adding the Scripts
* Add the Bash scripts mentioned in the "WICHTIG" comment in the mod-01-02.rb script.  Remove the "mod-01-02-" portions from the beginning of the script names.  These Bash scripts belong in the root directory of the Rails app.
* From the root directory of the rails app, enter the command "sh build_fast.sh".  No, this probably won't pan out.  At this point, you are relying on trial-and-error.  The first error messages you see are the ones to address, and they will probably be about PostgreSQL database authentication.

## Things To Examine Throughout This Chapter
* Check the setup instructions for this Rails app.  These will clue you in on what to add to the build_fast.sh script.
* Check the continuous integration configuration files/settings.  This information will also clue you in on what to add to the build_fast.sh script.
* You will likely need to do a web search of the error messages (especially the first ones) to see what you need to do.

## Things to Change

### PostgreSQL
* NOTE: I'm assuming here that the app uses a PostgreSQL database for the development environment.  If not, this PostgreSQL section is not applicable.
* The default PostgreSQL configuration provided in the Docker image assumes that you want good security and is designed for the Rails apps created under the Ruby on Racetracks system.  This configuration may not be suitable for some legacy Rails apps, which were configured differently.  For example, they may be configured to not require any username or password, or they may be configured to require a username but not a password.
* Manually configuring PostgreSQL is a painful process that I'm guaranteed to screw up several times before getting it right.  This is why I insist on using a script to do it on autopilot.
* Add the following commands to the beginning of your build_fast.sh script (just before the first command):
```
#################################################################
# BEGIN: section to omit if a username and password are specified
#################################################################

# If the username and password are both specified in the
# config/database.yml file, omit this section of the code.

PG_VERSION="$(ls /etc/postgresql)"
PG_HBA="/etc/postgresql/$PG_VERSION/main/pg_hba.conf"
echo '-------------------'
echo "Configuring $PG_HBA"

# If the config/database.yml file specifies the username but not the
# password, uncomment and customize the following lines (with the
# database username replacing "DATABASE_USER"):
#
# sudo bash -c "echo '# TYPE  DATABASE        USER            ADDRESS                 METHOD' > $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# Allow DATABASE_USER user to connect to database without password' >> $PG_HBA"
# sudo bash -c "echo 'local   all             DATABASE_USER                                  trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# Allow postgres user to connect to database without password' >> $PG_HBA"
# sudo bash -c "echo 'local   all             postgres                                trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo 'local   all             all                                     trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# IPv4 local connections:' >> $PG_HBA"
# sudo bash -c "echo 'host    all             all             0.0.0.0/0               trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# IPv6 local connections:' >> $PG_HBA"
# sudo bash -c "echo 'host    all             all             ::1/128                 trust' >> $PG_HBA"


# If the username and password are NOT specified in the
# config/database.yml file, uncomment the following lines:
#
# sudo bash -c "echo '# TYPE  DATABASE        USER            ADDRESS                 METHOD' > $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# Allow postgres user to connect to database without password' >> $PG_HBA"
# sudo bash -c "echo 'local   all             postgres                                trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo 'local   all             all                                     trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# Full access to 0.0.0.0 (localhost) for pgAdmin host machine access' >> $PG_HBA"
# sudo bash -c "echo '# IPv4 local connections:' >> $PG_HBA"
# sudo bash -c "echo 'host    all             all             0.0.0.0/0               trust' >> $PG_HBA"
# sudo bash -c "echo '' >> $PG_HBA"
# sudo bash -c "echo '# IPv6 local connections:' >> $PG_HBA"
# sudo bash -c "echo 'host    all             all             ::1/128                 trust' >> $PG_HBA"

###############################################################
# END: section to omit if a username and password are specified
###############################################################

sh pg-start.sh

echo '--------------'
echo 'bundle install'
bundle install

# Create and configure the PostgreSQL user here for the development
# and testing environments.
# If the config/database.yml file specifies a username and password,
# uncomment and customize the commands below:
#
# sudo -u postgres psql -c"CREATE ROLE $APP_DB_USER WITH CREATEDB LOGIN PASSWORD '$APP_DB_PASS';"
# sudo -u postgres psql -c"CREATE DATABASE $APP_DB_NAME_DEV WITH OWNER=$APP_DB_USER;"
# sudo -u postgres psql -c"CREATE DATABASE $APP_DB_NAME_TEST WITH OWNER=$APP_DB_USER;"

# If the config/database.yml file specifies a username but not a password
# for the development and testing environments, uncomment and customize
# the code below:
#
# echo '--------------------------------------'
# echo 'sudo -u postgres createuser -d db_user'
# sudo -u postgres createuser -d db_user
#
# echo '---------------------------------------------'
# echo "'create database db_development;' -U postgres"
# psql -c 'create database db_development;' -U postgres
#
# echo '----------------------------------------------'
# echo "psql -c 'create database db_test;' -U postgres"
# psql -c 'create database db_test;' -U postgres

# If the config/database.yml file does not specify a username or
# password for the development and testing environments, this means
# that PostgreSQL needs a user with the username of the underlying 
# system, and this user have superuser privileges.  If this is the case,
# uncomment and customize the code below.

# echo '----------------------------------------'
# echo "sudo -u postgres createuser -d $USERNAME"
# sudo -u postgres createuser -d $USERNAME
# 
# echo '-----------------------------------'
# echo "Make the user $USERNAME a superuser"
# psql -c "ALTER USER $USERNAME WITH SUPERUSER;" -U postgres
# 
# echo '-----------------------------------------------------'
# echo "psql -c 'create database db_development;' -U postgres"
# psql -c 'create database db_development;' -U postgres
# 
# echo '----------------------------------------------'
# echo "psql -c 'create database db_test;' -U postgres"
# psql -c 'create database db_test;' -U postgres
```
* Enter the command "sh build_fast.sh".  There will probably be errors, but there should be more progress and different errors now.
* If you get any errors regarding authentication issues, you probably need to tweak the above database setup procedure in the build_fast.sh script, and the run the script again.
* Enter the command "rails db:migrate".  (NOTE: Older versions of Rails require "bundle exec rake db:migrate" instead.)
  * If you get any errors saying that certain software is missing, install it, and make a note of it.
  * When the database migration scripts run without errors, this means that PostgreSQL is configured properly for the local environment.
* Enter the command "sh build_fast.sh" one more time just to make sure that any errors you see don't happen until AFTER the database migration stage.

## Sandbox
* From the root directory of the app, enter the command "sh sandbox.sh".  The sandbox should start up without error.
* Enter the command "exit" to return to the normal shell.

## Local Web Server
* If you haven't already done so, enter the command "tmux" to start a tmux window.
* Go to the root directory of the app, and enter the command "sh server.sh".  Open the web browser to http://localhost:3000/.  (Of course, if you are using a non-zero offset value, the port number will be different.  The ports.txt file in the shared directory of the Docker container shows the host port assignment corresponding to 3000 in Docker.)  You should see the app, and there should be no errors.

## Database Browser
* If the app uses SQLite, use the SQLiteBrowser GUI tool to access the database.  The database won't have much, but you should be able to access it.
* If the app uses PostgreSQL, use the pgAdmin GUI tool to access the database.  (The ports.txt file in the shared directory of the Docker container shows the host port assignment corresponding to 5432 in Docker.)  
  * If the config/database.yml file specifies a username and password, provide that username and password when prompted.
  * If the config/database.yml file specifies a username but no password, provide the username when prompted and "password1" when prompted for the password.
  * If the config/database.yml file does not specify any username or password, there should be no prompting for a username and password.
  * If all goes well, you can access the database, but it will be empty.
  * If you are unable to access the database, check the PostgreSQL configuration file specified in the build_fast.sh script.

## Test Suite
* If you haven't already done so, press "Ctrl-b" and then "c" to create a new tmux window.
* Check the Gemfile to see what test suite is in use.  It may be MiniTest, RSpec, Cucumber, or a combination.
* The test_app.sh script is configured with the assumption that MiniTest is the one and only test suite used.  If something else is used in addition to MiniTest, you need to add additional commands to run the other test suites.  If something else is used instead of MiniTest, you need to replace the "rails test" command.
* From the root directory of your app, enter the command "sh test_app.sh".  If all goes well, all the tests run, and they should pass.
* You may find tests fail because certain software is not installed.  Install this software, and make note of this.
* You are ready to move on to the next step when you've figured out how to get the entire test suite to run without error.

## Updating the Build Script
* Update the build_fast.sh script to include all the additional software and configurations uncovered by the trial-and-error process.
* Reset the Docker image, but keep the source code.
* Run the build.sh script.  If all goes well, the entire test suite passes, and you're ready to move on to the next step.
* From the root directory of the app, enter the following commands:
```
git add .
git commit -m "Added basic setup scripts"
git push origin ruby_on_racetracks
```

## Reset and Git Clone
* Go to the online Git repository, and check your the ruby_on_racetracks branch of your source code to make sure that it's been updated.
* On your local machine, delete your app.
* Reset the Docker container, git clone your app, switch to the ruby_on_racetracks branch, and run the build_fast.sh script.  If all goes well, the entire test suite passes.
* If necessary, update the build_fast.sh script and run it again.
* When you think that your build_fast.sh script works, git add/commit/push the changes to your ruby_on_racetracks branch, and repeat the actions in this section.  When you reset your Docker container, git clone the app, switch to the ruby_on_racetracks branch, run the build_fast.sh script, and have all tests pass, you are ready to move on to the next step.

## Updating Docker Image
* Now that you know all of the dependencies of the app, it's time to pre-install some of them in the custom Docker image.
* In the custom Docker build image, update the scripts in the usr_local_bin directory.
  * In the root script, add the commands that must be run as sudo.  (But you can skip "apt-get update", which is already completed earlier in the build process.)  Installing software with the "apt-get install" command is an example.
  * In the user script, add the commands that must be run as the regular user.  Installing Javascript packages with the "npm install" command is an example.
  * In the check script, add the commands showing the version numbers of the above software.
* Use the git add/commit/push commands in the custom Docker image build repository to update it.
* Build the custom Docker image.  If you are using a 32-bit system, and all goes well, enter "y" when asked if you wish to upload the new Docker image.
* When the new Docker image has been built, you are ready for the next step.

## Shortening the Build Script
* Exit the custom Docker container, and run the download_new_image.sh script to download the new Docker image that you built.
* When you are in the new Docker container based on the new Docker image, use the git clone command to download your fork of the app.  Use the command "git checkout ruby_on_racetracks" to switch to your branch, but do NOT run the build_fast.sh script just yet.
* Update the build_fast.sh script.  Remove the commands for installing the software that now comes pre-installed in the new Docker image.
* Run the build_fast.sh script.  If all goes well, all of the tests pass, the Rails sandbox works, the Rails server works, you can access the database from the GUI database browser, and you are ready to move on to the next chapter.
