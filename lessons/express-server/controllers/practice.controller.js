// Unit 5 - Day 021
// practice.controller.js
// http:localhost:4000/practice
//! Starting a controller for the first time you will need to create a varibale called 'router' and you will need to export this variable at the end of the file.

const router = require("express").Router(); //! NEEDED IN EVERY CONTROLLER


//? Create the endpoint of localhost:4000/practice/greeting/
//? Request type: post request
//? send back a "Good Afternoon"

router.post("/greeting", (req,res)=>{ // the /greeting is part of the URL
    console.log(req.body);
    res.send("Good Afternoon "+ req.body.firstName);
})

//? Create the endpoint of localhost:4000/practice/weather/
//? Request type: get request
//? send back a "It's sunny and 70 degrees outside"
/* 
router.get("/weather", (req,res)=>{ // the /greeting is part of the URL
    res.send("It's sunny and 70 degrees outside");
})
 */

//? Create the endpoint of localhost:4000/practice/weather/
//? Request type: get request: Change this endpoint to a POST request
//? send back a "It's sunny and 70 degrees outside"
// TODO: make the degrees dynamic and it be sent to the payload
router.post("/weather", (req,res)=>{ 
    const{currentWeather} = req.body;
    res.send(`It's sunny and ${currentWeather} degrees outside`);
})

//TODO Challenge
//? Creat an endpoin of localhost:4000/practice/add
//? request type: post
//? send back to the client: the total of the two numbers are ___
//? the payload should look like "{"num1":6, "num2"": 5"}

router.post("/add", (req,res)=>{ 
    const{num1} = req.body;
    const{num2} = req.body;

    res.send(`the total of the two numbers are ${num1+num2}`);
})

//! NEEDED IN EVERY CONTROLLER
module.exports = router; // exporting variable