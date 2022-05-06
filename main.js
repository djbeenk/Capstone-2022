//joey did this function
let bikeArray = [];
let tempArray = []
let deleteRowButton = "<html><button onclick='deleteRow(this)'>Delete</button></html>";
let milesToGo = 0;
let initialDistance = 0;
let newDistance = 0;
let updatedMiles = 0;

//If notifications is set to true, then enable notifications. This variable is used in the settings
let notifications = true;

function snooze(bike) {
    for (var i = 0; i < bikeArray.length; i++) {
        if (bikeArray[i][2] >= bikeArray[i][1]) {
            bikeArray[i][1] = bike;
        }
    }

    var numRows = table.rows.length;
    for (var h = numRows - 1; h > 0; h--) {
        table.deleteRow(h);
    }
    for (var i = 0; i < bikeArray.length; i++) {
        var addRow = table.insertRow(table.length);
        for (var j = 0; j < bikeArray[i].length - 1; j++) {
            var cell = addRow.insertCell(j);
            cell.innerHTML = bikeArray[i][j];
        }
    }
}       
//Compares miles ridden with required miles before maintenance and outputs what needs maintenance. If the notification api does not work, it will just do a window alert instead
function checkMiles_Alarm() {
    for (var i = 0; i < bikeArray.length; i++) {
        
        if (bikeArray[i][2] >= bikeArray[i][1]) {
           // window.alert(bikeArray[i][0] + " needs maintenance!");

            if (notifications === true) {
                let permission = Notification.permission;

                if (permission === 'granted') {
                    //new Notification(bikeArray[i][0] + " needs maintenance!");
                    var message = new Notification(bikeArray[i][0] + " needs maintenance!", {
                        body: "Click to snooze alarm.",
                    });

                    bike = bikeArray[i][1];


                    message.onclick = function () {
                        console.log("I was clicked");
                        bike = bike+10;
                        console.log(bike);
                        snooze(bike)
                    }
                }
                else {
                    window.alert(bikeArray[i][0] + " needs maintenance!");
                }
            }
        }
    }
}


function checkMiles_Alarm1() {
    for (var i = 0; i < bikeArray.length; i++) {
        if (bikeArray[i][2] >= bikeArray[i][1]) {
            if (notifications === true) {
                Push.Permission.request();

                if (Push.Permission.GRANTED) {
                    Push.create("Maintenance time!", {
                        body: bikeArray[i][0] + " needs maintenance! Click to snooze",
                        timeout: 8000,
                        onclick: function () {
                            console.log("clicked");
                            window.focus();
                            this.close();
                        }
                    });
                }
                else {
                    window.alert(bikeArray[i][0] + " needs maintenance!");
                }
            }

        }
    }
}


//Function that updates miles in advance
function updateMilesAdvance() {
    updatedMiles = document.getElementById('milesAdvance').value;
    updatedMiles = parseInt(updatedMiles);
}


//mutes notification toggle for settings. When enabled, it sets notifications to false and the user will no longer receive notifications 
function muteNotifications() {
    if (notifications === true) {
        notifications = false;
    }
    else if (notifications === false) {
        notifications = true;
    }
}


//This function is for the switch toggle in settings. When enabled, it shows the update miles button
function devMode() {
    if (updateButtonModal.style.display === "inline-block") {
        updateButtonModal.style.display = "none";
    }
    else {
        updateButtonModal.style.display = "inline-block";
    }
}

// The searchFunction() syntax is credited to W3 Schools. This function is used for searching for a video
function searchFunction() {
    var input;
    var search;
    var ul;
    var li;
    var a;
    var i;
    var searchText;

    input = document.getElementById("myInput");
    search = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    list = ul.getElementsByTagName("li");

    for (i = 0; i < list.length; i++)
    {
        a = list[i].getElementsByTagName("a")[0];
        searchText = a.textContent || a.innerText;

        if (searchText.toUpperCase().indexOf(search) > -1) {
            list[i].style.display = "";
        }

        else {
            list[i].style.display = "none";
        }
    }
}
//The myFunction syntax is credited to W3 Schools
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
//alicia did this functioono
function myFunction_setting() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

//danny did this function
//This function gets the first name from the big database
async function getID() {
    loginID = document.getElementById('loginID').value;
    let myResponse = await fetch("capstone_php.php?playerInfo=" + loginID);
    let result = await myResponse.json();
    let result1 = JSON.stringify(result);
    result1 = (result1.replace(/\"/g, ""));
    if (result1 == "Strava Activity ID not found.") {
        //window.alert("Could not find ID.");
        document.getElementById("WelcomeMessage").innerHTML = result1;

    }
    else {
        document.getElementById("overlay").style.display = "none";

        //window.alert("Hello, " + result1);
        let welcomeMessage = ("Hello, " + result1 + "!");
        document.getElementById("WelcomeMessage").innerHTML = welcomeMessage;

        document.getElementById("name").innerHTML = result1;
    }
}
//joey did this function
//This function is tied to the sync account and adds the stravaID and the sum of distance to our own capstone database file
async function connectID() {
    if (confirm("Would you like to sync your account? Sync your account once to begin saving your alarms.")) {
        connect = document.getElementById('loginID').value;
        let myResponse2 = await fetch("capstone_php.php?createInfo=" + connect);
        let result2 = await myResponse2.json();
        //window.alert(result2);
        syncSuccess = "Account synced.";
        document.getElementById("SyncMessage").innerHTML = syncSuccess;

    }
    else {
        //window.alert("Sync account cancelled.");
        let syncFail = "Sync account cancelled.";
        document.getElementById("SyncMessage").innerHTML = syncFail;

    }
}

async function syncIDModalAccept() {
    connect = document.getElementById('loginID').value;
    let myResponse2 = await fetch("capstone_php.php?createInfo=" + connect);
    let result2 = await myResponse2.json();
    //window.alert(result2);
    syncSuccess = "Account synced. Please reload the page to begin saving your alarms.";
    document.getElementById("SyncMessage1").innerHTML = syncSuccess;
}

function syncIDModalDeny() {
    let syncFail = "Sync account cancelled.";
    document.getElementById("SyncMessage1").innerHTML = syncFail;
}

//danny did this function
//This function retrieves the current distance travelled from the big database.
async function get_initialDistance() {
    login_id = document.getElementById('loginID').value;
    let response = await fetch("capstone_php.php?get_distance=" + login_id);
    let result = await response.json();
    result = Math.trunc(result * 0.00062137);
    //window.alert(result);
    initialDistance = result;
    return initialDistance;
}
//joey did this function
async function get_newDistance() {
    login_id = document.getElementById('loginID').value;
    let response = await fetch("capstone_php.php?get_distance=" + login_id);
    let result = await response.json();
    result = Math.trunc(result * 0.00062137);

    document.getElementById("miles").innerHTML = result;

    result = result + 305;
   // window.alert(result);
    newDistance = result;
    sessionStorage.setItem(login_id, newDistance);
    return newDistance;
}
//danny did this function
async function get_avgSpeed() {
    login_id1 = document.getElementById('loginID').value;
    let response = await fetch("capstone_php.php?get_speed=" + login_id1);
    let result = await response.json();
    //result = Math.trunc(result);
    result = result * 2.237;
    result = Math.floor(result * 100) / 100;

    document.getElementById("speed").innerHTML = result;
}
//danny did this function
async function get_avgDistance() {
    login_id2 = document.getElementById('loginID').value;
    let response = await fetch("capstone_php.php?get_avgDis=" + login_id2);
    let result = await response.json();
    //result = Math.trunc(result);
    result = Math.trunc(result * 0.00062137);
    document.getElementById("avgDistance").innerHTML = result;
}
//joey did this function
//This function saves the bikeArray that contains the maintenance, required miles, miles to go - it saves it into the capstone database file
async function saveAlarm() {
    if (confirm("Would you like to save? You can only save once per session.")) {
        for (let i = 0; i < bikeArray.length; i++) {
            bikeArray[i][3] = bikeArray[i][3].replace(/\'/g, "''");
        }

        loginID_1 = document.getElementById('loginID').value;
        let myResponse3 = await fetch("capstone_php.php?login=" + loginID_1 + "&array=" + bikeArray);
        let result3 = await myResponse3.json();
        window.alert(result3);
    }
    else {
        window.alert("Save alarms cancelled.");
    }
}

async function saveAlarmModalAccept() {
    for (let i = 0; i < bikeArray.length; i++) {
        bikeArray[i][3] = bikeArray[i][3].replace(/\'/g, "''");
    }

    loginID_1 = document.getElementById('loginID').value;
    let myResponse3 = await fetch("capstone_php.php?login=" + loginID_1 + "&array=" + bikeArray);
    let result3 = await myResponse3.json();

    document.getElementById('saveMessage').innerHTML = result3;
}

async function savealarmModalDeny() {
    saveCancel = "Save alarms cancelled.";
    document.getElementById('saveMessage').innerHTML = saveCancel;
}
//joey did this next functions from here down
//This function retrieves the bikearray from the capstone database file and then populates the table
async function loadAlarm() {
    loginID_2 = document.getElementById('loginID').value;
    let myResponse4 = await fetch("capstone_php.php?login2=" + loginID_2);
    let result4 = await myResponse4.json();
    result4 = (result4.replace(/\"/g, ""));

    result4 = result4.split(",");


    while (result4[0]) {
        bikeArray.push(result4.splice(0, 5));
        console.log(bikeArray);
    }


    for (let i = 0; i < bikeArray.length; i++) {
        bikeArray[i][3] = bikeArray[i][3].replace(/\''/g, "'");
        bikeArray[i][3] = bikeArray[i][3].replace(/\\/g, "");
    }

    for (var i = 0; i < bikeArray.length; i++) {
        bikeArray[i][1] = +(bikeArray[i][1]);
        bikeArray[i][2] = +(bikeArray[i][2]);
        bikeArray[i][4] = +(bikeArray[i][4]);
    }

    //Check the new distance obtained during login and add the difference to the bikearray. 
    /**
    newDistance = sessionStorage.getItem(loginID);
    for (var i = 0; i < bikeArray.length; i++) {
        if (newDistance > bikeArray[i][4]) {
            milesToGo = newDistance - bikeArray[i][4];
            bikeArray[i][2] = milesToGo;
        }
    }
    */
      
    for (var i = 0; i < bikeArray.length; i++) {
        var addRow = table.insertRow(table.length);
        for (var j = 0; j < bikeArray[i].length-1; j++) {
            var cell = addRow.insertCell(j);
            cell.innerHTML = bikeArray[i][j];
        }
    }
    return (bikeArray);
}


//This function adds all the predetermined maintenances to the dropdown
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

//This function gives the user prompts on what they would like for their custom maintenance alarm
function generateRequest() {

    let user_Maintenance = prompt("Please enter custom maintenance: ",);
    let user_Miles = prompt("Please enter recommended miles before maintenance check: ",);
    if (user_Maintenance == null || user_Maintenance == "" || user_Miles == null || user_Miles == "") {
        window.alert("No custom maintenance has been added.");
    } else {
        get_initialDistance().then(initialDistance => {

            tempArray.push(user_Maintenance);
            tempArray.push(user_Miles);
            tempArray.push(milesToGo);
            tempArray.push(deleteRowButton);
            tempArray.push(initialDistance);
            bikeArray.push(tempArray);
            tempArray = [];

            var numRows = table.rows.length;
            for (var h = numRows - 1; h > 0; h--) {
                table.deleteRow(h);
            }
            for (var i = 0; i < bikeArray.length; i++) {
                var addRow = table.insertRow(table.length);
                for (var j = 0; j < bikeArray[i].length-1; j++) {
                    var cell = addRow.insertCell(j);
                    cell.innerHTML = bikeArray[i][j];
                }
            }
        });
    }
}

function customAlarm() {
    let user_Maintenance = document.getElementById('maintenance').value;
    let user_Miles = document.getElementById('customMiles').value;
    user_Miles = parseInt(user_Miles);
    get_initialDistance().then(initialDistance => {

        tempArray.push(user_Maintenance);
        tempArray.push(user_Miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length - 1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}


var sweetAlert_response;
var sweetAlert_response2;


/** 
function sweetAlert(){
    swal({
        text: "Enter a custom maintenance: ",
        content: "input",

        button: {
            text: "Submit",
            closeModal: false,
        },
    }).then((response) => {
        console.log(sweetAlert_response);
        sweetAlert_response = response;
        swal.close();
    });
}
*/


//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_1() {
    //This function pulls the sum of the distance from the big database and stores it into the array for later comparison. This sum is called
    //initialDistance and WILL not change. initialDistance will be compared with newDistance (which gets the updated distance in each login)
    //and then will be used to find the difference. This difference will be the miles left to go before required miles
    get_initialDistance().then(initialDistance => {
        let maintenance = "Lube Chain";
        let miles = 300;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length - 1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
        console.log(bikeArray);
    });
}

//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_2() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Professional Tune-Up";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_3() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Brake Pads";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}

//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_4() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Shifter";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];


        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_5() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Brake Cable";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];


        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_6() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Cable Housing";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];


        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_7() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Tires";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_8() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Chainring and Cassette";
        let miles = 7200;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_9() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Chain";
        let miles = 3600;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
    });
}
//This function is a predetermined maintenance alarm based off of the ElliptiGO manual.
function generateRequest_10() {
    get_initialDistance().then(initialDistance => {

        let maintenance = "Replace Rear Derailleur Jockey Wheels";
        let miles = 7200;
        tempArray.push(maintenance);
        tempArray.push(miles);
        tempArray.push(milesToGo);
        tempArray.push(deleteRowButton);
        tempArray.push(initialDistance);
        bikeArray.push(tempArray);
        tempArray = [];

        var numRows = table.rows.length;
        for (var h = numRows - 1; h > 0; h--) {
            table.deleteRow(h);
        }
        for (var i = 0; i < bikeArray.length; i++) {
            var addRow = table.insertRow(table.length);
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
        }
        return bikeArray;
    });
}

function helpFunction() {
    document.getElementById("helpMessage").innerHTML = "If you are getting the Alarms not found - undefined error or your alarms are not saving, reload the page, add your alarms, press the save alarm button, then reload again.";

   // window.alert("If you are getting the Alarms not found - undefined error or your alarms are not saving, reload the page, add your alarms, press the save alarm button, then reload again.");
}
//This function is used to manually update the milestogo to show how the alarms work and for testing purposes.
function updateMiles() {
        console.log(bikeArray);
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
            for (var j = 0; j < bikeArray[i].length-1; j++) {
                var cell = addRow.insertCell(j);
                cell.innerHTML = bikeArray[i][j];
            }
    }
    checkMiles_Alarm();
        console.log(bikeArray);
}

function updateMilesModal() {

    let milesRidden = document.getElementById('updateMilesInput').value;

    for (var i = 0; i < bikeArray.length; i++) {
        bikeArray[i][2] += Number(milesRidden);
    }

    var numRows = table.rows.length;
    for (var h = numRows - 1; h > 0; h--) {
        table.deleteRow(h);
    }
    for (var i = 0; i < bikeArray.length; i++) {
        var addRow = table.insertRow(table.length);
        for (var j = 0; j < bikeArray[i].length - 1; j++) {
            var cell = addRow.insertCell(j);
            cell.innerHTML = bikeArray[i][j];
        }
    }
    checkMiles_Alarm();

    updateMessage = "Miles updated.";
    document.getElementById("updateMilesMessage").innerHTML = updateMessage;

    console.log(bikeArray);
}

//This function begins when the user presses the delete button on the table. This will delete the maintenance from the array and delete it from the table
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var arrayIndex = i - 1;
    console.log(bikeArray);
    bikeArray.splice(arrayIndex, 1);
    document.getElementById("table").deleteRow(i);
}

