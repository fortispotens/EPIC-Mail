[![Build Status](https://travis-ci.org/riseagain47/EPIC-Mail.svg?branch=develop)](https://travis-ci.org/riseagain47/EPIC-Mail)
[![Coverage Status](https://coveralls.io/repos/github/riseagain47/EPIC-Mail/badge.svg)](https://coveralls.io/github/riseagain47/EPIC-Mail)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c435620777c2a71ab730/test_coverage)](https://codeclimate.com/github/riseagain47/EPIC-Mail/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/c435620777c2a71ab730/maintainability)](https://codeclimate.com/github/riseagain47/EPIC-Mail/maintainability)

## EPIC Mail

This web application will help people exchange
messages/information over the internet.

## Features

The features listed here are can be tested on Postman by passing the url endpoints to perform the following features:

Create a user account
Login a user
Create or send a mail
Fetch all received messages
Fetch all unread received messages
Fetch all sent messages
Fetch a specific email record
Delete a specific email record
Create a group
Fetch a specific group record
Fetch all groups records
Delete a specific group
Add a user to a group
Delete a user from a specific group
Create or send an email to a group

## Technologies Used
* Nodejs: an open source server framework that allows you to run JavaScript on the server.
* Express: open source server-side framework for starting out Javascript server quickly on the fly.
* Pivotal Tracker: an open source projement management tool for managing different stages of teh development process.


## Link to github pages

https://riseagain47.github.io/EPIC-Mail/

## Link to API endpoints
https://epic-mail-tobe.herokuapp.com/


## API endpoints

| HTTP VERB | ENDPOINT                                | FUCTIONALITY                        |
| --------- | ------------------------------          | ------------------------------------|
| POST      | api/v2/auth/signup                      | Create a user account               |
| POST      | api/v2/auth/signup                      | Login a user                        |
| POST      | api/v2/messages                         | Create or send a mail               |
| GET       | api/v2/messages                         | Fetch all received messages         |
| GET       | api/v2/messages/status/unread           | Fetch all unread received messages  |
| GET       | api/v2/messages/status/sent             | Fetch all sent messages             |
| GET       | api/v2/messages/:id                     | Fetch a specific email record       |
| DELETE    | api/v2/messages/:id                     | Delete a specific email record      |
| POST      | api/v2/groups                           | Create a group                      |
| GET       | api/v2/group/:group-id                  | Fetch a specific group record       |
| PATCH     | api/v2/groups/:group-id/name            | Fetch all groups records            |
| DELETE    | api/v2/groups/:group-id                 | Delete a specific group             |
| POST      | api/v2/groups/:groud-id/users           | Add a user to a group               |
| DELETE    | api/v2/groups/:group-id/users/:user-id  | Delete a user from a specific group |
| POST      | api/v2/groups/:groud-id/messages        | Create or send an email to a group  |



## How to clone the project:

To clone this repository:

* Ensure you have git and node.js installed

* Run `git clone https://github.com/riseagain47/EPIC-Mail`

* Run `npm install`

* Run `npm start` to start the server

* Follow the UI directory to view UI pages


## Author
* Name: Tobechukwu Obitube
* Email: riseagain47@gmail.com


## Acknowledgments
* My sincere gratitude goes to the Bootcamp Cycle 42 family (LF, LFAs, VFLAs, Fellow Bootcampers)
