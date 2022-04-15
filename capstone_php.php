<?php
if(isset($_GET["playerInfo"])){
	$loginID = $_GET["playerInfo"];
	$Database = new SQLite3('Database/gercdb2022Mar31.db');
	$query = "SELECT firstName, avg(speed) FROM summaryactivity WHERE riderStravaId = '$loginID'";
	$queryResult = $Database->querySingle($query, true);
	if (count($queryResult)===0){
		$jsonToSend = json_encode("Strava Activity ID not found.");
	} else{
		$jsonToSend = json_encode($queryResult);
		$jsonToSend = html_entity_decode($jsonToSend);
		$json = json_decode($jsonToSend, true);
		$result = $json['firstName'];
			$result = json_encode($result);
			$result1 = $json['speed'];
			$result = $result + $result1;
	}$Database->close();
	echo $result;
}

?>

