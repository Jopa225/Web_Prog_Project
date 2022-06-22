<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="signup_style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <title>Twitch Tracker Login</title>

</head>
<body>

<header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img
            src="https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg"
            alt="" width="30" height="24" class="d-inline-block align-text-top">
          Twitch Tracker Login
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" style="border-color: #6441a5"
          data-bs-target="#navmenu">

          <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a href="signup.php" class="nav-link"> Sign in</a>
            </li>
            <li class="nav-item">
              <a href="login.php" class="nav-link"> Log in</a>
            </li>
          </ul>
        </div>


      </div>

    </nav>
  </header>


  <div class="row">
  <div class="d-flex justify-content-center">
<section class="signup-form ">
            <h2>Sign up</h2>

            <form action="signup.inc.php" method="post">
                <input type="text" name="name" placeholder="FUll name...">
                <input type="text" name="email" placeholder="Email...">
                <input type="text" name="uid" placeholder="Username...">
                <input type="password" name="pwd" placeholder="Password...">
                <input type="password" name="pwdrepeat" placeholder="Repeat password...">
                <button type="submit" class="btn btn-success" name="submit">Sign Up</button>
            


            </form>
      <?php
                if(isset($_GET["error"])){
                  if($_GET["error"]== "emptyinput"){
                    echo "<p> You didn't fill all fields! </p>";
                  }
                  else if($_GET["error"]== "invalideuid"){
                    echo "<p> Choose a proper usermail! </p>";
                  }
                  else if($_GET["error"]== "invalidemail"){
                    echo "<p> Choose a proper email! </p>";
                  }
                  else if($_GET["error"]== "passwordsdontmatch"){
                    echo "<p> Passwords doesn't match! </p>";
                  }
                  else if($_GET["error"]== "stmtfailed"){
                    echo "<p> Something went wrong, try again! </p>";
                  }
                  else if($_GET["error"]== "usernametaken"){
                    echo "<p> Username already taken, try some other username! </p>";
                  }
                  else if($_GET["error"]== "none"){
                    echo "<p> You signed up succesfully! </p>";
                  }
                  

                }
              ?>
        </section>

       

  </div>
        
  </div>
 
</body>
</html>