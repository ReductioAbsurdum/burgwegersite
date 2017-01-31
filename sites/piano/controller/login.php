<?php
  require_once("../includes/functions.php");
  require("../database/connect.php");
  session_start();

    if(!empty($_POST["username"]) || !empty($_POST["password"])){
      $username = mysqli_real_escape_string($connection, $_POST["username"]);
      $password = $_POST["password"];
      $query = "SELECT * FROM users WHERE username = '{$username}';";
      $result = mysqli_query($connection, $query);
        if(count($result) == 1){
          $row = mysqli_fetch_assoc($result);
           //echo $row["password"] . " " . $password;
            if(password_verify($password, $row["password"])){
              $_SESSION["id"] = $row["id"];
              //echo "session = " . $_SESSION["id"];
              if(!empty($_SESSION["id"])){
                redirect("../pianoapp/index.html");
              }
            }
        }
          redirect("../views/login_form.php?go=denied");
          //redirect("../views/test.php");
    }else{
      redirect("../views/login_form.php?go=denied");
      //redirect("../views/test.php");
    }
?>
<?php
    mysqli_close($connection);
?>
