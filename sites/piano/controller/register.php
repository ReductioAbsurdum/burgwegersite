<?php
  require("../database/connect.php");
  require_once("../includes/functions.php");

  session_start();

  if(!empty($_POST["username"]) && !empty($_POST["password1"]) &&
    !empty($_POST["password2"]) && !empty($_POST["email"])){
      $username = mysqli_real_escape_string($connection, $_POST["username"]);
      $password = password_hash($_POST["password1"], PASSWORD_DEFAULT);
      $email = mysqli_real_escape_string($connection, $_POST["email"]);
      $query = "INSERT INTO users (username, password, email) VALUES ('{$username}', '{$password}', '{$email}')";
      $result = mysqli_query($connection, $query);

      if($result != 1){
        //echo "I'm sorry but chances are your user name is already used \n {$username},{$password},{$email}\n";
        $denied = "<p id='error'>I'm sorry but your user name is already used, please pick a different one</p>";
        redirect("../views/register_form?go=$denied");
      }else{
        $query = "SELECT LAST_INSERT_ID() AS id";
        $newResult = mysqli_query($connection, $query);
        $row = mysqli_fetch_assoc($newResult);
        $_SESSION["id"] = $row["id"];
        redirect("../pianoapp/index.html");
      }

      mysqli_close($connection);

  }else{
    $denied = "<p id='error'>ERROR</p>";
    redirect("../views/register_form.php?go=$denied");
}
?>
