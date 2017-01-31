<?php
//1. Create a database connection
require("../database/connect.php");
require("../includes/config.php");
?>

<?php
$time = $_POST['time'];
$correct = $_POST['correct'];
$id = $_SESSION["id"];

$query1 = "INSERT INTO piano_times (user_id, correct, time) VALUES ({$id},{$correct},'{$time}');";
$result1 = mysqli_query($connection, $query1);
if($result1 != 1){
	die("Failed To Save Score");
}

$query2 = "SELECT * FROM piano_times ORDER BY correct DESC, time ASC LIMIT 25";
$scores = mysqli_query($connection, $query2);

if(!$scores)
{
die("Could not retrieve highscores");
}
?>

<html>
<head>
<title>Results</title>

</head>

<body>
<?php $count = 0; ?>

<table id="php">
<tr><th>Place</th><th>Name</th><th>Correct</th><th>Time</th></tr>
<?php foreach($scores as $val): ?>
	<?php
	$query3 = "SELECT username FROM users WHERE id = {$val['user_id']}";
	$result3 = mysqli_query($connection, $query3);
	$username = mysqli_fetch_assoc($result3);

	?>
	<tr>
	<td><?= ++$count ?></td>
	<td><?= $username['username'] ?></td>
	<td><?= $val['correct'] ?>/34</td>
	<td><?= substr($val['time'], 3) ?></td>
	</tr>
<?php endforeach ?>

</table>
<p><i>We have just emailed you your personal top scores!<i></p>
</body>
</html>

<?php //Email form ---------------------------------------
	$query4 = "SELECT email, username FROM users WHERE id = {$id}";
	$emailResult = mysqli_query($connection, $query4);
	if(!$emailResult){
		die("Failed to send email scores");
	}

	$emailassoc = mysqli_fetch_assoc($emailResult);

	$username = $emailassoc['username'];
	$email = $emailassoc['email'];
	$subject = "Top Piano Scores for {$username}";
	$header = "From: Piano App \r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-Type: text/html; charset=UTF-8\r\n";

	$query5 = "SELECT * FROM piano_times WHERE user_id = {$id} ORDER BY correct DESC, time ASC LIMIT 25;";
	$scoreResults = mysqli_query($connection, $query5);
	if(!$scoreResults){
		die("Failed to send email scores");
	}

	$count = 0;

	$message = "<html><body>";
	$message .= "<table style=\"margin='auto'; cellpadding='10'\">";
	$message .= "<tr><th>Place</th><th>Name</th><th>Correct</th><th>Time</th></tr>";

	 foreach($scoreResults as $val){

		 $time = substr($val["time"], 3);
		 ++$count;

		$message .= "<tr>";
		$message .= "<td>{$count}</td>";
		$message .= "<td>{$username}</td>";
		$message .= "<td>{$val['correct']}/34</td>";
		$message .= "<td>{$time}</td>";
		$message .= "</tr>";
	}

	$message .= "</table>";
	$message .= "</body></html>";

	mail($email, $subject, $message, $header);
?>

<?php
//5. Close database connection
mysqli_close($connection);
?>
