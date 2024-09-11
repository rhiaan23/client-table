# Client Table Project

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Seeding Info](#seeding-info)

## Features
- SQLite database with users and transactions tables.
- React frontend with the table to display users/transactions
- Script to populate the database with fake data.
- Styled using Tailwind CSS.

## Installation
Follow these steps to set up and run the project once downloaded/cloned:

1. Enter the server directory and install dependencies::
```sh
   cd server
   npm install
   ```
2.  Start the server (defaults to localhost:5000). Data will automatically seed on first run. 
```sh
   npm start
   ```
Note: if you encounter an issue with better-sqlite3 headers, try deleting node_modules and running npm install again.
   
3. Open a new terminal. Enter the client directory, install dependencies and run:
```sh
    cd client
    npm install
    npm start
```
Your website will be running on localhost:3000

## API Endpoints
```sh
GET /api/users
```
Fetches a list of users.

```sh
GET /api/transactions/?user_id='SOME USER ID'
```
Fetches transactions for a specific user.

## Seeding info
/server/seed.js generates fake data using the 
[faker-js](https://www.npmjs.com/package/@faker-js/faker) library.

Note that the unique IDs generated for the current simple version 
are ascending integers in this case and not UUIDs.
Service ID has also been assumed to be a random integer between 1-10
