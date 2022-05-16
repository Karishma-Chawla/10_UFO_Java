// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  console.log(addition(4, 5));

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  console.log (doubleAddition(65,34));

  //Array for loop
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
console.log(listLoop(friends))

sampleList=["a","b","c"]
for (var i = 0; i < sampleList.length; i++) {
    console.log(sampleList[i]);
  }

  let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
  for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

// Create table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }