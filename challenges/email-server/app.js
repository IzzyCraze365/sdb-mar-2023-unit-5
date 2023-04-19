// Unit 5 - Day 023
// Challenge

const express = require("express");
const app = express();
const PORT = 4000;

//! Need to keep updating the controller list
const userController = require("./controllers/user.controller")

app.use(express.json()); // THIS WILL ALLOW YOU TO SEND IN YORU PAYLOAD A JSON OBECT AND IT WILL PARSE IT FOR US - Middleware

// http://localhost:4000/test
app.get("/test", (req, res)=>{
    // req: Request
    // res: Response
    res.send("Hello World");
});

app.use(express.static(`${__dirname}/public`));
app.use("/user", userController);

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`);
});
