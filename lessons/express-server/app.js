// Unit 5 - Day 021
// App

const express = require("express");
const app = express();
const PORT = 4000;
//! Need to keep updating the controller list
const practiceController = require("./controllers/practice.controller")
const playerController = require("./controllers/player.controller")

app.use(express.json()); // THIS WILL ALLOW YOU TO SEND IN YORU PAYLOAD A JSON OBECT AND IT WILL PARSE IT FOR US - Middleware

// http://localhost:4000/test
app.get("/test", (req, res)=>{
    // req: Request
    // res: Response
    res.send("Hello World");
});

app.use(express.static(`${__dirname}/public`));
app.use("/practice", practiceController);
app.use("/player", playerController);

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`);
});
