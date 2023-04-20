// Unit 5 - Day 024
// player.controller.js
// Rob did some crazy stuff in here on Day 24, so i just copied his code.

const router = require("express").Router();
// ! dbPath is the file path to the data based off of the relationship of the app.js file
const dbPath = "./assets/player-db.json";
// ! FS gives us access to the file system that is built-in with node
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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
    const playerObect = {
      _id: uuidv4(),
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      position: position,
      team: team,
      jerseyNumber: jerseyNumber,
    };
    //  3. Add the players to the Array & write the completed array back to the file

    playerArray.push(playerObect);

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

// ! Delete one player
// http://localhost:4000/player/delete/:id
router.delete("/delete/:id", (req, res) => {
  let playerArray = read();
  try {
    let id = req.params.id; //! changed to id

    console.log(playerArray.length);
    let index = playerArray.findIndex((player) => player._id == id);

    playerArray = removeOne(index, playerArray); //! supplying the index to remove and the array to delete from. Changed to id
    console.log(playerArray.length);
    save(playerArray);
    res.json({ message: "player removed", player: playerArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// ! Update a player
// http://localhost:4000/player/update/?id=[uuid]
router.patch("/update/", (req, res) => {
  let playerArray = read();

  try {
    // 1. Pull out the keys from the req.body
    const { firstName, lastName, position, team, jerseyNumber } = req.body;
    // 2. Create the object so it will inserted into the playerArray
    const playerObject = {
      _id: req.query.id,
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      position: position,
      team: team,
      jerseyNumber: jerseyNumber,
    };

    // 3. assign the index value
    let id = req.query.id;
    let index = playerArray.findIndex((player) => player._id == id);

    // 4. update the array
    playerArray = updateOne(+index, playerObject, playerArray);
    // 5. save the playerArray
    save(playerArray);

    res.json({ message: "player updated", player: playerArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

function read() {
  const file = fs.readFileSync(dbPath);
  return JSON.parse(file);
}

function save(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// function removeOne(index, myArray) {
//   myArray.splice(index, 1);
//   return myArray;
// }

function removeOne(indexNumber, myArray) {
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (i !== indexNumber) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

function updateOne(indexNumber, newObject, myArray) {
  // update only that index and return the entire array.
  let newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (i === indexNumber) {
      newArray.push(newObject);
    } else {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}
module.exports = router;
