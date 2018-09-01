---
id: 02-03-ds_store
title: "Unit 2 Chapter 3: .DS_Store"
sidebar_label: "Chapter 3: .DS_Store"
---

## What's the point?
* The .DS_Store file is sometimes automatically created on MacOS systems.  There is ZERO need to save it in the source code.
* The purpose of this chapter is to remove instances of the .DS_Store file and to make sure that the Mac users working on this Rails app do not accidentally add any.

## .DS_Store File
* Use the SearchMonkey tool to search the Rails app's source code to see if there are any instances of the file .DS_Store in it.  If there are any, you must go through the rest of this chapter.
* Check the .gitignore file for the presence of a line consisting SOLELY of ".DS_Store".  If the .DS_Store file is listed here AND there are no instances of .DS_Store in the source code, then you may skip the actions in the rest of this chapter.

## Procedure
* From the root directory of your app, enter the command "git checkout -b ds_store".
* Remove all instances of the file .DS_Store in the Rails app.
* Use the SearchMonkey tool to search the Rails app's source code to see if there are any remaining instances of the file .DS_Store in it.  If there are none, you may continue.
* If you removed any .DS_Store files, enter the following commands:
```
git add .
git commit -m "Removed all .DS_Store files"
git push origin ds_store
```
* If you don't see a line consisting SOLELY of ".DS_Store" in the .gitignore file, add it, and save your changes.
* Enter the following commands:
```
git add .
git commit -m "Added .DS_Store to .gitignore"
git push origin ds_store
```
* Submit a pull request of the ds_store branch.  If you are a collaborator, you can accept it.
