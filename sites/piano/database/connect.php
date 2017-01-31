<?php
//1. Create a database connection
$string = file_get_contents("../config.json");
$credits = json_decode($string, true);

$dbhost = $credits["database"]["host"];
$dbuser = $credits["database"]["username"];
$dbpass = $credits["database"]["password"];
$dbname = $credits["database"]["name"];
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
// Test if connection occured.
if(mysqli_connect_errno()){
	echo "Could not connect to Database";
}
?>
