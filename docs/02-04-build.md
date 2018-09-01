---
id: 02-04-build
title: "Unit 2 Chapter 4: Build Script"
sidebar_label: "Chapter 4: Build Script"
---

## What's the point?
* When you reset your development environment, git clone the Rails app in the Docker container, and run the build_fast.sh script in the app, you should be ready to roll.  This should take just a few minutes, not hours.
* Being able to destroy your development environment and be back in business within 5 minutes means that anyone who joins the app after you can be ready to roll in minutes, not hours or days.  This also makes it easy to make sure your setup procedure is up-to-date.
* The custom Docker image and the build_fast.sh script are a warranty against the infamous "but it works on my machine" problem.

## Rails Neutrino Source Code
* Go to the <a href="https://github.com/rubyonracetracks/rails_neutrino_5">Rails Neutrino</a> page.  Use the "git clone" command to download the source code.
* Use the SearchMonkey tool to search for the word "WICHTIG".  This shows you the elements from the Rails Neutrino app generator that you should add to legacy apps.
* For this chapter, focus on just the contents of the mod-01-01.rb and mod-01-02.rb scripts.

## .DS_Store File
* The mod-01-01.rb script in Rails Neutrino calls for adding .DS_Store to the .gitignore file.
* If you do NOT need to keep the Ruby on Racetracks elements out of your pull requests, 
* If you are contributing to the Rails app through pull requests from your fork of the project,
 

## Things to Add
* Check the .gitignore file in the legacy Rails app for .DS_Store.  If it's not there, add it.  This prevents other developers using Mac computers from accidentally adding .DS_Store file to the code.
* Add the scripts in the mod-01-02.rb script that are listed as "WICHTIG".



## Things to Change

### .gitignore

### PostgreSQL
* The default PostgreSQL configuration provided in the Docker image assumes that you want good security and is designed for the Rails apps created under the Ruby on Racetracks system.  This configuration may not be suitable for some legacy Rails apps, which were configured differently.  For example, they may be configured to not require any passs
* T
* Add the following commands to the beginning of your build_fast.sh script:
```
PG_VERSION="$(ls /etc/postgresql)"
PG_HBA="/etc/postgresql/$PG_VERSION/main/pg_hba.conf"
echo '-------------------'
echo "Configuring $PG_HBA"

sudo bash -c "echo '# TYPE  DATABASE        USER            ADDRESS                 METHOD' > $PG_HBA"
sudo bash -c "echo '' >> $PG_HBA"
sudo bash -c "echo '# Allow adopta user to connect to database without password' >> $PG_HBA"
sudo bash -c "echo 'local   all             adopta                                  trust' >> $PG_HBA"
sudo bash -c "echo '' >> $PG_HBA"
sudo bash -c "echo '# Allow postgres user to connect to database without password' >> $PG_HBA"
sudo bash -c "echo 'local   all             postgres                                trust' >> $PG_HBA"
sudo bash -c "echo '' >> $PG_HBA"
sudo bash -c "echo 'local   all             all                                     trust' >> $PG_HBA"
sudo bash -c "echo '' >> $PG_HBA"
sudo bash -c "echo '# IPv4 local connections:' >> $PG_HBA"
sudo bash -c "echo 'host    all             all             0.0.0.0/0               trust' >> $PG_HBA"
sudo bash -c "echo '' >> $PG_HBA"
sudo bash -c "echo '# IPv6 local connections:' >> $PG_HBA"
sudo bash -c "echo 'host    all             all             ::1/128                 trust' >> $PG_HBA"

```
