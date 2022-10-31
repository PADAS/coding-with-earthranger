# coding-with-earthranger
Example repo for those looking to learn how to write basic applications with the EarthRanger API

## Getting started

This repository relies on Node.js. [Make sure to install the most recent "LTS" version of Node here](https://nodejs.org/en/download/). Make sure you have Redis installed as well. This application assumes you have Redis running with no credentials at its default port; if it's set up otherwise, please ensure you've updated the setting passed to the `redisClient` in this code accordingly.

Once all dependencies are installed and running, make sure to edit the `.env` file at the root of this project with the specific credentials and URL needed to log into your EarthRanger instance and retrieve an authentication token. Without this information being included, the project will not work as expected.

## Installation
1. Execute the `npm` command in a bash shell to install the project

## Running
1. Execute the `npm start` command in a bash shell to run the project
