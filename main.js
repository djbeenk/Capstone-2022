const bikeArray = [];
let tempArray = []
let deleteRowButton = "<html><button onclick='deleteRow(this)'>Delete</button></html>"
let milesToGo = 0;



/**

async function callBackend1() {
    loginID = document.getElementById('loginID').value;
    let myResponse = await fetch("capstone_php.php?playerInfo=" + loginID);
    let result = await myResponse.json();
    document.getElementById('output0').innerHTML = JSON.stringify(result);
}
*/

function addAlarm() {
    document.getElementById("myDropdown").classList.toggle("show");
}


/** The following code is taken from W3 Schools. It hides and shows the contents of the dropdown menu. */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
/** End of the code from W3 Schools. */

function generateRequest() {
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
}

function generateRequest_1() {
    let maintenance = "Lube Chain";
    let miles = 300;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_2() {
    let maintenance = "Professional Tune-Up";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_3() {
    let maintenance = "Replace Brake Pads";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_4() {
    let maintenance = "Replace Shifter";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_5() {
    let maintenance = "Replace Brake Cable";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_6() {
    let maintenance = "Replace Cable Housing";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_7() {
    let maintenance = "Replace Tires";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_8() {
    let maintenance = "Replace Chainring & Cassette";
    let miles = 7200;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_9() {
    let maintenance = "Replace Chain";
    let miles = 3600;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function generateRequest_10() {
    let maintenance = "Replace Rear Derailleur Jockey Wheels";
    let miles = 7200;
    tempArray.push(maintenance);
    tempArray.push(miles);
    tempArray.push(milesToGo);
    tempArray.push(deleteRowButton);
    bikeArray.push(tempArray);
    tempArray = [];

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

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var arrayIndex = i - 1;
    console.log(bikeArray);
    bikeArray.splice(arrayIndex, 1);
    document.getElementById("table").deleteRow(i);
}

