// Unit 5 - Day 021
// Challenge

// This array will be provided.
let usersArray = [
  { email: "test1@test.com", password: "test" },
  { email: "test2@test.com", password: "test2" },
  { email: "test3@test.com", password: "test3" },
];
// create a function that takes only one parameter (email) End it will search the array of user array to see if we found a match. If it finds a match you will return the object of email and password. If there is no match then you'll return an empty object

function findOne(email) {
  for (let i = 0; i < usersArray.length; i++) {
    if (email === usersArray[i].email) {
      //console.log(usersArray[i]); //! TEST
      return usersArray[i];
    }
  }
  return {}; // Return an empty object IF the email does not match)
}

// ! Example: findOne("test1@test.com") // Expected Output: {email: "test1@test.com", password: "test"}
console.log(findOne("test1@test.com"));

// ! Example: findOne("test5@test.com") // Expected Output: {}
console.log(findOne("test5@test.com"));
