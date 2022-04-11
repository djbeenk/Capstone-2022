const bikeArray = [];
let tempArray = []


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

