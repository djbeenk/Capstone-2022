const bikeArray = [];
let tempArray = []
function generateRequest() {
    let milesToGo = 0;
    let deleteRowButton = "<html><button onclick='deleteRow(this)'>Delete Row</button></html>"
    let user_Maintenance = prompt("Please enter custom maintenance: ",);
    let user_Miles = prompt("Please enter recommended miles before maintenance check: ",);
    if (user_Maintenance == null || user_Maintenance == "" || user_Miles == null || user_Miles == "") {
        window.alert("No custom maintenance has been added.");
    } else {
        tempArray.push(user_Maintenance);
        tempArray.push(user_Miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        bikeArray.push(tempArray);
        tempArray = [];
    }
}

function showAlarm() {
    var numRows = table.rows.length;
    for (var h = numRows - 1; h > 0; h--) {
        table.deleteRow(h);
    }
    for (var i = 0; i < bikeArray.length; i++) {
        var addRow = table.insertRow(table.length);
        for (var j = 0; j < bikeArray[i].length; j++) {
            var cell = addRow.insertCell(j);
            cell.innerHTML = bikeArray[i][j];
        }
    }
}

function updateMiles() {
    let milesRidden = prompt("Please enter how many miles you've ridden: ",);
    for (var i = 0; i < bikeArray.length; i++) {
        bikeArray[i][2] += Number(milesRidden);
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var arrayIndex = i - 1;
    console.log(bikeArray);
    bikeArray.splice(arrayIndex, 1);
    document.getElementById("table").deleteRow(i);
}

