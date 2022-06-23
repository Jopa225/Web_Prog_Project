<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase.js"></script>

  <title>Twitch Tracker</title>
  <pre id='object'></pre>


</head>

<body>


  <header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img
            src="https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg"
            alt="" width="30" height="24" class="d-inline-block align-text-top">
          Twitch Tracker
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" style="border-color: #6441a5"
          data-bs-target="#navmenu">

          <span class="navbar-toggler-icon"></span>

        </button>

   <?php 
                if(isset($_SESSION["useruid"])){
                    echo "<h4 class='text-success' >Welcome ". $_SESSION["useruid"] .  "</h4>";


                }
                
            ?>


     
        

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a href="#hr" class="nav-link"> Top Games</a>
            </li>
            <li class="nav-item">
              <a href="#hr2" class="nav-link"> Live Streams</a>
            </li>
            <li class="nav-item">
              <a href="#hr3" class="nav-link"> Search Clips</a>
            </li>
            <?php 
                if(isset($_SESSION["useruid"])){
                    echo "<li class='nav-item'>
                    <a href='logout.inc.php' class='nav-link'> Log Out</a>  </li>";


                }
                
            ?>
          </ul>
        </div>


      </div>

    </nav>
  </header>
  <main class="mb-1">
    <div class="container">
      <div class="row ">
        <div class="col-lg-7">

          <img src="https://www.dexerto.com/wp-content/uploads/2021/04/10/Untitled-design-1.jpg" alt=""
            class="img-fluid">

        </div>
        <div class="col-lg-5 ">
          <div class=" p-5 h-100 bg-dark text-white rounded">
            <h1>Welcome to our Twitch Tracker WebApp</h1>
            <p>This webpage is created for purposes of exploring interesting facts about Twitch streamers, games etc.
              <br>
              See who are the most viewed streamers, who has the most subscribers and which games are the most viewed
              one.
            </p>
          </div>
          </col-md-5>
        </div>



        <div class="container-fluid">
          <div class="row mt-5">
            <div class="col ">
              <hr id="hr" />
    
            </div>
          </div>
        </div>


      </div>


    </div>
    <section id="sec">
      <div class="p-4 h-50 d-flex justify-content-center">
        <h4 class="fw-bold">Most viewed games at the moment</h4>
      </div>
      <div class="swiper mySwiper container">
        <div class="swiper-wrapper content">
          <div class="swiper-slide card bg-dark">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 id="card-text" class="card-text fw-bold"> IDEMOO NIIIŠ</h4>
              <a id= "btn5" class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>

          <div class="swiper-slide card bg-dark" style="width:250px">
            <img class="card-img-top" alt="Card image">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h4 class="card-text fw-bold"></h4>
              <a class="btn btn-light">See Streamers</a>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="p-2 h-20 d-flex justify-content-center">


        <ol id="demo" class="bg-dark"></ol>


      </div>


    </section>
   


    </div>
    </div>



    <div class="container mb-5">
      
        
        <div class="container-fluid">
          <div class="row mt-5">
            <div class="col ">
              <hr id="hr2" />
    
            </div>
          </div>
        </div>

        <div class="p-4 h-50 d-flex justify-content-center">
          <h4 class="fw-bold">Top Twitch Live Streams</h4>
        </div>
       <div id= "streams"class="streams"></div>
       </div>


       <div class="container mb-5">
      
        
        <div class="container-fluid">
          <div class="row mt-5">
            <div class="col ">
              <hr id="hr3" />
    
            </div>
          </div>
        </div>

        <div class="row mt-5 bg-dark">
          <div class="col p-5 h-100 bg-dark text-white rounded">
            <h4>Search for your favourite game and get most viewed Twitch video clips</h4>
  
          </div>

          <div class="col h-200">
            <div class="input-group form-control-lg mt-5 ">
              <input id="search-input" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button  id="search-btn" type="button" class="btn btn-outline-primary">Search</button>
            </div>
          </div>


        </div>
        <div id= "clips"class="clips"></div>

  </main>

  <footer class="footer mt-auto py-3 bg-dark text-white">
    <div class="container">
      <div class="row ">
        <div class="col-md-6">
          <p>

            This webpage was made by Josip Pocrnja and Goran Klement.<br>
            Feel free to send suggestions for webpage on email: <a
              href="mailto:goran.klement1@gmail.com?subject=Page suggestion"> <i class="fa fa-envelope"
                style="font-size:48px;color:#6441a5 "></i></a>
          </p>
        </div>
        <div class="col-md-6 align-items-center h-70 bg-dark">
          <h3>
            Official Twitch webpages:
          </h3>
          <a href="https://www.facebook.com/Twitch" target=”_blank”  class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/twitch/" target=”_blank”  class="fa fa-instagram"></a>
          <a href="https://www.twitch.tv/"  target=”_blank” class="fa fa-twitch"></a>




        </div>
      </div>
    </div>
  </footer>




  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
 
<script src="main.js"></script>


</body>


<script type="module">

  

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getDatabase, onValue,  ref} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAORhqzIRhTPYlf65Dbr6XTt5Qch4OEb4c",
    authDomain: "twitch-3ea07.firebaseapp.com",
    databaseURL: "https://twitch-3ea07-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "twitch-3ea07",
    storageBucket: "twitch-3ea07.appspot.com",
    messagingSenderId: "696570535677",
    appId: "1:696570535677:web:f2659a4ec139db172fe894",
    measurementId: "G-LCC542CHJM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getDatabase();

  
  var delayInMilliseconds = 1000; 



const images = document.querySelectorAll(".card-img-top");

let names= document.querySelectorAll(".card-text");
setTimeout(function() {

  for(let i=0; i<10;i++){
        const getreference= ref(db, "Images/"+names[i].innerHTML+"/url");
      
        onValue(getreference, (snapshot)=> {
          const firebaseData= snapshot.val();

        
          images[i].src = firebaseData;
          console.log(i);

      })
  }

}, delayInMilliseconds);




  

 
</script>

</html>