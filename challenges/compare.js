// Unit 5 - Day 021
// Challenge

// Write a function that will take two strings and compare them to see if they are equal.

// In this case we are trying to create a function that if we supply the actual password and compare it with the userInput if they match we will get true othewise we will get a false

let dbUserInfo = { email: "test1@test.com", password: "password1" };
let userFormInput = { email: "test1@test.com", password: "password1" };
function comparePasswords(suppliedPassword, actualPassword) {
    return suppliedPassword === actualPassword;
}

console.log(comparePasswords("password1", "password1")); // expected output true
console.log(comparePasswords("password2", "password1")); // expected output false

// Console.log the comparePasswords using the dbUserInfomation as the actual true password and the userFormInput as a supplied password to see if you can get it to work using the variables we created above.

console.log(comparePasswords(dbUserInfo.password, userFormInput.password));