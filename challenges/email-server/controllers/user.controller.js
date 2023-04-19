// Unit 5 - Day 023
// Challenge

const router = require("express").Router();
const dbPath = "./assets/users.json";
const fs = require("fs");
let userArray = [];

//! Register
// "http://localhost:4000/user/register"
router.post("/register", (req, res) => {
  userArray = read();
  try {
    const { username, password } = req.body;
    const userObject = {
      username: username,
      password: password,
    };
    userArray.push(userObject);
    //userArray = register(userObject, userArray);//! Did not work
    save(userArray);
    res.json({ mesage: "user added", user: userArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// ! Login
// "http://localhost:4000/user/login"
router.get("/login", (req, res) => {
  userArray = read();
  try {
    const { username, password } = req.body;
    let userFound = findOne(username);
    if (Object.keys(userFound).length === 0) {
      res.json({ message: `That Username Does not Exist` });
    }else {
        if(comparePasswords(password, userFound.password)){
            res.json({ message: `User Found, Welcome!`, user: {username: username, password: password} });    
    }else{
        res.json({ message: `Passwords do not match` });
    }}
    res.json({ message: "all users", user: userArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

function read() {
  const file = fs.readFileSync(dbPath);
  return JSON.parse(file);
}

function register(newObject, myArray) {
  //! NOT BEING USED
  let newArray = myArray.push(newObject);
  return newArray;
}

function findOne(username) {
  for (let i = 0; i < userArray.length; i++) {
    if (username === userArray[i].username) {
      return userArray[i];
    }
  }
  return {}; // Return an empty object IF the email does not match)
}

function comparePasswords(suppliedPassword, actualPassword) {
    return suppliedPassword === actualPassword;
}

function save(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data), (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    return true;
  });
}

module.exports = router;
