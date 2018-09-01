---
id: 04-06-docker_image
title: "Unit 4 Chapter 6: Updating the Docker Image"
sidebar_label: "Chapter 6: Docker Image"
---

Now that the project has a newer version of Ruby and/or newer versions of the ffi, nokogiri, pg, and rails gems, it's time to update the Docker image.

## Procedure
* Revisit the chapter on building the custom Docker images.  Update the versions of Ruby, ffi, nokogiri, pg, and rails.
* Run the build scripts in your local environment.  If everything pans out for the 32-bit build, you are ready to push it to Docker Hub.  If everything pans out for the 64-bit build, you are ready to trigger an automated build in Docker Hub.
