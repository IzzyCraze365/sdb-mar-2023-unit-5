// Unit 5 - Day 021
// Challenge

# Email Server

In this challenge you will put your skills to the test. You are given a blank folder called `email-server` all the files and folders you will have to create based on what you have learned so far this week.

## Task List

- [ x ] npm init - y
- [ x ] update package.json to point to proper file (not index.js)
- [ x ] npm i express
- [ x ] boiler plate for your app listening on port 4000
- [ x ] add express.json()
- [ x ] create endpoint for "http://localhost:4000/user/register"
- [ x ] create endpoint for "http://localhost:4000/user/login"
- [ x ] create controller folder
- [ x ] create file "user.controller.js"
- [ x ] add boiler plate for controller (require and module.exports)
- [ x ] create users.json file in the assest folder
- [ x ] create a read function
- [ x ] create a write function

## About user/register endpoint

- expected request body should look like {username: "rob@test.com", password:"1234"}
- this endpoint will be responsible for adding the username and password to the user.json file
- res.json({message: "user added"})

## About the user/login endpoint

- expected request body should look like {username: "rob@test.com", password:"1234"}
- You should see if you can find a match based on the user name (findOne)
- If you fail to find the user in the users.json then you need to throw an error and send that to the client (postman)
- You need to verify that the passwords match (compare)
- res.json({message: "user found", user: {username: "rob@test.com", password: "1234"}})


## Postman

- [ x ] create a collection called email server
- [ x ] save your register to postman
- [ x ] save your login to postman
