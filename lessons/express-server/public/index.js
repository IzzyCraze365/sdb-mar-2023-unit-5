/* Unit 5 - Day 022
Adding Data to Website */

console.log("it works from soccer");

let tableBody = document.querySelector("tbody");
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
          <td>${i+1}</td>
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
function displayPlayers(playerArray){
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
}}
// Part of Option 2
function tableDataBuilder(tableRow, playerDataToDisplay){
    // create a TD tag
    let tableData = document.createElement("td");
    // Change the textContent of the TD to the playerDataToDisplay
    tableData.textContent = playerDataToDisplay;
    // append the TD tage to the tableRow
    tableRow.appendChild(tableData);
}



async function getallPlayers() {
  let url = "http://localhost:4000/player/view-all";
  try {
        let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  //displayInnerHTML(data.player); //! OPTION 1
  displayPlayers(data.player); //! OPTION 2
}catch (error){
    console.error(error);
}
}
getallPlayers();
