/* Unit 5 - Day 022
Adding Data to Website */

console.log("it works from soccer");

let tableBody = document.querySelector("tbody");
let playerSelectElement = document.querySelector("#player-select");
/* 
tableBody.innerHTML = ` <tr>
<td>1</td>
<td>Trevor</td>
<td>Erwin</td>
<td>Forwad</td>
<td>Upright Ed</td>
<td>12</td>
</tr> <tr>
<td>1</td>
<td>Trevor</td>
<td>Erwin</td>
<td>Forwad</td>
<td>Upright Ed</td>
<td>12</td>
</tr>`;
 */

//! OPTION 1
function displayInnerHTML(playerArray) {
  let htmlString = "";
  for (let i = 0; i < playerArray.length; i++) {
    htmlString += ` 
          <tr>
          <td>${i + 1}</td>
          <td>${playerArray[i].firstName}</td>
          <td>${playerArray[i].lastName}</td>
          <td>${playerArray[i].position}</td>
          <td>${playerArray[i].team}</td>
          <td>${playerArray[i].jerseyNumber}</td>
        </tr>`;
  }
  console.log(htmlString);
  tableBody.innerHTML = htmlString;
}

//! OPTION 2
function displayPlayers(playerArray) {
  // Clear out the INNERHTML of the tbody
  tableBody.innerHTML = "";
  for (let i = 0; i < playerArray.length; i++) {
    //Create <tr> tag
    let tableRow = document.createElement("tr");
    // create a function that will take my tr tag and players info to create the <td> and append them tot he <tr> tag.
    tableBody.appendChild(tableRow);
    //Building out the tables
    tableDataBuilder(tableRow, i + 1);
    tableDataBuilder(tableRow, playerArray[i].firstName);
    tableDataBuilder(tableRow, playerArray[i].lastName);
    tableDataBuilder(tableRow, playerArray[i].position);
    tableDataBuilder(tableRow, playerArray[i].team);
    tableDataBuilder(tableRow, playerArray[i].jerseyNumber);
  }
}
// Part of Option 2
function tableDataBuilder(tableRow, playerDataToDisplay) {
  // create a TD tag
  let tableData = document.createElement("td");
  // Change the textContent of the TD to the playerDataToDisplay
  tableData.textContent = playerDataToDisplay;
  // append the TD tage to the tableRow
  tableRow.appendChild(tableData);
}

// Delete Players Options
function populatePlayerDropDown(playerArray){
  playerSelectElement.innerHTML = "";
  let htmlString = "";
  for (let i = 0; i< playerArray.length; i++){
    htmlString += `<option value="${i}">${playerArray[i].firstName} ${playerArray[i].lastName}</option>`
  }
  playerSelectElement.innerHTML = htmlString;
}

async function getallPlayers() {
  let url = "http://localhost:4000/player/view-all";
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //displayInnerHTML(data.player); //! OPTION 1
    displayPlayers(data.player); //! OPTION 2
    populatePlayerDropDown(data.player);
  } catch (error) {
    console.error(error);
  }
}
getallPlayers();

let soccerPlayerForm = document.querySelector("form");
soccerPlayerForm.addEventListener("submit", submitNewPlayer);

async function submitNewPlayer(e) {
  e.preventDefault();
  try {
    let formData = new FormData(e.target);
    let json = JSON.stringify(Object.fromEntries(formData));
    //console.log(json);
    // 1. Create the url for the fetch (this should match postman)
    let url = "http://localhost:4000/player/add";
    // 2. Create Headers Object and append Content-Type
    let myHeaders = new Headers(); //! needs to be plural headerS
    myHeaders.append("Content-Type", "application/json");
    // 3. Create a request Options Object and supply your body, method, and headers
    let requestOptions = {
      method: "POST",
      body: json,
      headers: myHeaders,
    };
    // 4. Conduct the fetch with request options.
    await fetch(url, requestOptions);
    // const data = await response.json();
    // If the fetch is successful refresh the table
    getallPlayers();
    // 5. Clear the form values
    soccerPlayerForm.reset()
  } catch (error) {
    console.error(error);
  }
}

let removePlayerForm = document.querySelector("#remove-player-form");
removePlayerForm.addEventListener("submit", submitForRemoval);

async function submitForRemoval(e) {
  e.preventDefault();
  try {
    // 1. Ge tht evalue of the current selection
console.log(playerSelectElement.value); //! TEST
let playerIndex = playerSelectElement.value;
    // 2. Build our URL out where we can delete
let url = "http://localhost:4000/player/delete/" + playerIndex; // pulled from Postman
    // 3. Create Request Options
let requestOptions = {
  method: "DELETE",
}
    // 4. Conduct the fetch
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
    // 5. If successful then we need to re-populate the table & the dropdown list
    getallPlayers();
  } catch (error) {
    console.error(error);
  }
}

// let mapArray = [
//   ["name", "robert"],
//   ["age", 42],
// ];

// console.log(Object.fromEntries(mapArray));

// console.log(Object.fromEntries(mapArray));

let mapArray = [
  ["name", "robert"],
  ["age", 42],
];

console.log(Object.fromEntries(mapArray));
