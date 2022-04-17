<?php 
if (isset($_GET["playerInfo"])) {
    $loginID = $_GET["playerInfo"];
    $db = new SQLite3('db/gercdb2022Mar31.db');
    $query = "SELECT firstName FROM summaryActivity WHERE riderStravaId = '$loginID'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $result = json_encode("Strava Activity ID not found.");
    } else {

        $jsonToSend = json_encode($queryResult);

        $jsonToSend = html_entity_decode($jsonToSend);

        $json = json_decode($jsonToSend, true);

        $result = $json['firstName'];

        $result = json_encode($result);
        //$result = $json['firstName'];
    }
    $db->close();

    error_log("playerInfo sending value: " . $result);
    echo $result;
} 

//This function is tied to the Sync Button. Syncing account gets the Strava ID number and the initial distance during account creation. 
//This initial distance will be used to compare the number of meters the user has ridden after each login. This value will be converted to miles
//and then will see if the new distance number is bigger than the initial. The difference will be added to milesToGo in bikeArray.
elseif(isset($_GET["createInfo"])) {
    $createID = $_GET["createInfo"];

    $db = new SQLite3('db/capstone.db');


    $query = ("ATTACH DATABASE 'C:/users/joeyb/desktop/capstone - testing/db/gercdb2022Mar31.db' as bigDatabase");
    $db->exec($query);
    
    $query_1 = ("INSERT INTO riders(activityID, miles) SELECT riderStravaId, SUM(distance) FROM summaryActivity where riderStravaId = '$createID'");
    $db->exec($query_1);
    $db->close();
    $jsonToSend = json_encode("Account synced.");

    error_log("Set loginID: ". $jsonToSend);
    echo $jsonToSend;
}


//This retrieves current sum of distance from big database
elseif(isset($_GET["get_distance"])) {
    $loginID = $_GET["get_distance"];

    $db = new SQLite3('db/gercdb2022Mar31.db');
    $query = "SELECT SUM(distance) FROM summaryActivity WHERE riderStravaId = '$loginID'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $result = json_encode("Strava Activity ID not found.");
    } else {

        $jsonToSend = json_encode($queryResult);

        $jsonToSend = html_entity_decode($jsonToSend);

        $json = json_decode($jsonToSend, true);

        $result = $json['SUM(distance)'];

        $result = json_encode($result);
    }
    $db->close();

    error_log("playerInfo sending value: " . $result);
    echo $result;
}

//This retrieves current avg speed from big database
elseif(isset($_GET["get_speed"])) {
    $loginID = $_GET["get_speed"];

    $db = new SQLite3('db/gercdb2022Mar31.db');
    $query = "SELECT AVG(speed) FROM summaryActivity WHERE riderStravaId = '$loginID'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $result = json_encode("Strava Activity ID not found.");
    } else {

        $jsonToSend = json_encode($queryResult);

        $jsonToSend = html_entity_decode($jsonToSend);

        $json = json_decode($jsonToSend, true);

        $result = $json['AVG(speed)'];

        $result = json_encode($result);
    }
    $db->close();

    error_log("playerInfo sending value: " . $result);
    echo $result;
}

elseif(isset($_GET["get_avgDis"])) {
    $loginID = $_GET["get_avgDis"];

    $db = new SQLite3('db/gercdb2022Mar31.db');
    $query = "SELECT AVG(distance) FROM summaryActivity WHERE riderStravaId = '$loginID'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $result = json_encode("Strava Activity ID not found.");
    } else {

        $jsonToSend = json_encode($queryResult);

        $jsonToSend = html_entity_decode($jsonToSend);

        $json = json_decode($jsonToSend, true);

        $result = $json['AVG(distance)'];

        $result = json_encode($result);
    }
    $db->close();

    error_log("playerInfo sending value: " . $result);
    echo $result;
}


elseif(isset($_GET["login"])) {
    $loginID_1 = $_GET["login"];
    $bikeArray = $_GET["array"];

    $db = new SQLite3('db/capstone.db');

    $query = "SELECT activityID, bikeParts FROM riders WHERE activityID = '$loginID_1'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $jsonToSend = json_encode("Synced account ID not found.");
    } else {
    $bikeArray = json_encode($bikeArray); 
	// 1. Add a new query here
	$query = "UPDATE riders SET bikeParts = '$bikeArray' WHERE activityID = '$loginID_1'";
	// 2. Uncomment the line below

    $db->exec($query);

	// 3. Change the string in the command below to "Success!"
	$jsonToSend = json_encode("Alarms have been saved!");
    }
    $db->close();
    echo $jsonToSend;
}

elseif (isset($_GET["login2"])) {
    $loginID2 = $_GET["login2"];
    $db = new SQLite3('db/capstone.db');
    $query = "SELECT bikeParts FROM riders WHERE activityID = '$loginID2'";
    $queryResult = $db->querySingle($query, true);
    if (count($queryResult) === 0) {
       $result = json_encode("Alarms not found.");
    } else {

        $jsonToSend = json_encode($queryResult);

        $jsonToSend = html_entity_decode($jsonToSend);

        $json = json_decode($jsonToSend, true);

        $result = $json['bikeParts'];

        $result = json_encode($result);
        //$result = $json['firstName'];
    }
    $db->close();

    error_log("loading array sending value: " . $result);
    echo $result;
} 

?>


