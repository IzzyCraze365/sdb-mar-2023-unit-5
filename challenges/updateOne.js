// Unit 5 - Day 022
// Challenge

let myArray = [
    {
      firstName: "CRISTIANO",
      lastName: "RONALDO",
      position: "Striker",
      team: "Al-Nasrr",
      jerseyNumber: 7,
    },
    {
      firstName: "ROB",
      lastName: "V",
      position: "striker",
      team: "Bravo",
      jerseyNumber: "12",
    },
    {
      firstName: "JOHN",
      lastName: "ROBERTS",
      position: "striker",
      team: "Alpha",
      jerseyNumber: "11",
    },
    {
      firstName: "LUKE",
      lastName: "SKYWALKER",
      position: "Jedi",
      team: "Rebels",
      jerseyNumber: "1",
    },
    {
      firstName: "TED",
      lastName: "STRIKER",
      position: "Forward",
      team: "Juliets",
      jerseyNumber: "121",
    },
  ];
  
  function updateOne(indexNumber, newObject) {
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

  let john= {
  firstName: "John",
  lastName: "Isabella",
  position: "Student",
  team: "Fun times",
  jerseyNumber: "100"
  };

  console.log(updateOne(2, john));