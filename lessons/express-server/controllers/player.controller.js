// Unit 5 - Day 021
// player.controller.js

const router = require("express").Router();
// http://localhost:4000/player/add

let playerArray = [];
// firstName	lastName	position	team	jerseyNumber
// ! Add a player to the array
router.post("/add", (req, res) => {
  try {
    // 1. Pull out the keys from the req.body
    const { firstName, lastName, position, team, jerseyNumber } = req.body;
    // 2. Create the object so it will inserted into the playerArray
    const playerObect = {
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      position: position,
      team: team,
      jerseyNumber: jerseyNumber,
    };
    //  3. Add the players to the Array

    playerArray.push(playerObect);

    //   4. Send back a response to the client that you have added the data
    res.json({ message: "Player Added", player: playerArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// ! Get all the players
// http://localhost:4000/player/view-all
router.get("/view-all", (req, res) => {
  try {
    res.json({ message: "all players", player: playerArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
