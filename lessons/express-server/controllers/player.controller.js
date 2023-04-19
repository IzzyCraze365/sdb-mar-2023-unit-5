// Unit 5 - Day 021
// player.controller.js

const router = require("express").Router();
// ! dbPath is the file path to the data based off of the relationship of the app.js file
const dbPath = "./assets/player-db.json";
// ! FS gives us access to the file system that is built-in with node
const fs = require("fs");

// http://localhost:4000/player/add
let playerArray = [];
// firstName	lastName	position	team	jerseyNumber
// ! Add a player to the array
router.post("/add", (req, res) => {
  let playerArray = read();
  try {
    // 1. Pull out the keys from the req.body
    const { firstName, lastName, position, team, jerseyNumber } = req.body;
    // 2. Create the object so it will inserted into the playerArray
    const playerObject = {
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      position: position,
      team: team,
      jerseyNumber: jerseyNumber,
    };
    //  3. Add the players to the Array & write the completed array back to the file

    playerArray.push(playerObject);

    const isSaveComplete = save(playerArray);

    //   4. Send back a response to the client that you have added the data
    res.json({
      message: isSaveComplete ? "Player Added" : "We had problem saving",
      player: isSaveComplete ? playerArray : playerArray.slice(-1),
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// ! Get all the players
// http://localhost:4000/player/view-all
router.get("/view-all", (req, res) => {
  let playerArray = read();
  try {
    res.json({ message: "all players", player: playerArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//! Delete one player
// http:/localhost:4000/player/delete/:index
router.delete("/delete/:index", (req, res) => {
  let playerArray = read();
  try {
    let index = req.params.index
    if (isNaN(index)) {
      throw Error("Error: Index is Not a Number");
    }
    //console.log(index); //! TEST
    playerArray = removeOne(+index, playerArray); // supplyiung the index to remove and the array to delete from.
    // you need the plus to turn the index string into a number
    //console.log(playerArray); //! TEST
    save(playerArray); // This will update the Player Array in Postman so the changes persist
    res.json({message: "player removed",player: playerArray})
  } catch (error) {
    res.json({ message: error.message });
}})

function removeOne(indexNumber, myArray){
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (i !== indexNumber) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

//! Update a player
// http:/localhost:4000/player/update/:index
router.patch("/update/:index", (req, res) => {
  let playerArray = read();
  try {
    // 1. Pull out the keys from the req.body
    const { firstName, lastName, position, team, jerseyNumber } = req.body;
    // 2. Create the object so it will inserted into the playerArray
    const playerObject = {
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      position: position,
      team: team,
      jerseyNumber: jerseyNumber,
    };
    // 3. assign the index value
    let index = req.params.index;
    // 4. update the array
    playerArray = updateOne(+index, playerObject, playerArray); // Our updateOne function, //! Remember the index is a string until we put a plus sign (+) to convert to a number
    // 5. save the array
    save(playerArray);
    res.json({mesage: "player updated", player: playerArray})
  } catch (error) {
    res.json({ message: error.message });
  }
})

function updateOne(indexNumber, newObject, myArray) {
  // update only that index and return the entire array.
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (i === indexNumber) {
      newArray.push(newObject)
    }else{
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}


function read() {
  const file = fs.readFileSync(dbPath);
  return JSON.parse(file);
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
