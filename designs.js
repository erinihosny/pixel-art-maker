//setting variables
var tbl = document.querySelector("#pixelCanvas");
var sizePicker = document.querySelector("#sizePicker");
//declartion the function(makeGrid)which makes a table
function makeGrid() {
  event.preventDefault();
  let theHeight = document.querySelector("#inputHeight").value;
  tbl.innerHTML = "";
  for (var x = 0; x < theHeight; x++) {
    let theWidth = document.querySelector("#inputWidth").value;
    row = document.createElement("tr");
    for (var y = 0; y < theWidth; y++) {
      cell = document.createElement("td");
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
}
//declartion the function(colorMe)which makes a table colores the clicked cell
function colorMe() {
  event.preventDefault();
  if (event.target.nodeName === "TD") {
    let myColor = document.querySelector("#colorPicker").value;
    if (event.target.style.backgroundColor == "") {
      event.target.style.backgroundColor = myColor;
    } else {
      event.target.style.backgroundColor = "";
    }
  }
}
//calling the functions
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);
tbl.addEventListener("click", colorMe);
