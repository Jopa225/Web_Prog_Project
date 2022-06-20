
let clinetId = "zmtww3yjqc87lr229fxonycyh4cahy";
let clinetSecret = "jta94k9tfuufuj9jjaoyw8xfsbvm4q";

function getTwitchAuthorization() {
  let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

  return fetch(url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getGames() {
  const endpoint = "https://api.twitch.tv/helix/games/top?first=10";

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase
  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
    authorization,
    "Client-Id": clinetId,
  };

  fetch(endpoint, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        console.log(data.data[i].name);
      }
      
      setName(data);
      seeStreamers(data);
      return data;
    });
}

async function getDetails() {
  const endpoint =
    "https://api.twitch.tv/helix/search/channels?query=League of Legends";

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase
  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
    authorization,
    "Client-Id": clinetId,
  };

  fetch(endpoint, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

async function getDetails(game) {
  const endpoint = "https://api.twitch.tv/helix/search/channels?first=5&query=" + game;

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase
  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
    authorization,
    "Client-Id": clinetId,
  };

  fetch(endpoint, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      $("#demo").empty();

      
        var element = document.getElementById("demo");
        for (let i = 0; i < 5; i++) {
          let item = document.createElement("li");
          item.textContent = data.data[i].display_name + "\n";
          element.appendChild(item);
        }


        $(function(){
            $(element).slideDown(4000).delay(4000).slideUp(3000);
        })
      

    
    });
}
async function getStreams() {
  const endpoint = "https://api.twitch.tv/helix/streams?first=9";

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase    
  token_type =
  token_type.substring(0, 1).toUpperCase() +
  token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
  authorization,
  "Client-Id": clinetId,
  };
  

  fetch(endpoint, {
  headers,
  })
  .then((res) => res.json())
  .then((data) => 
  renderStreams(data));
}



async function getClips(game) {
  const endpoint = "https://api.twitch.tv/helix/clips?first=6&game_id="+game;

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase    
  token_type =
  token_type.substring(0, 1).toUpperCase() +
  token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
  authorization,
  "Client-Id": clinetId,
  };

  fetch(endpoint, {
  headers,
  })
  .then((res) => res.json())
  .then((data) => 
      renderClips(data)

  
  );
  
}

function renderClips(data) {

  let { data: streams } = data;
  let streamsContainer = document.querySelector("div.clips");

  streams.forEach((stream) => {
  let { thumbnail_url, url, view_count, broadcaster_name } = stream;
  let hdThumbnail = thumbnail_url
      .replace("{width}", "1920")
      .replace("{height}", "1080");
  streamsContainer.innerHTML += `
  
 <div class=" card bg-dark" style="width:400px">
            <img class="card-img-top" alt="Card image" src= "${hdThumbnail}">
            <div class="card-body">
              <h5 class="card-title">Streamer: ${broadcaster_name}</h5>
              <a href=${url} target="_blank" class="card-text fw-bold">${url}</a>
              <h5 class="card-title">${view_count} times watched</h5>
            </div>
          </div>

  `;
  
  });
}


function renderStreams(data) {

  let { data: streams } = data;
  let streamsContainer = document.querySelector("div.streams");

  streams.forEach((stream) => {
  let { thumbnail_url, game_name, viewer_count, user_name } = stream;
  let hdThumbnail = thumbnail_url
      .replace("{width}", "1920")
      .replace("{height}", "1080");
  streamsContainer.innerHTML += `
  
 <div class=" card bg-dark" style="width:400px">
            <img class="card-img-top" alt="Card image" src= "${hdThumbnail}">
            <div class="card-body">
              <h5 class="card-title">Streamer: ${user_name}</h5>
              <h4 class="card-text fw-bold">${game_name}</h4>
              <h5 class="card-title">${viewer_count} watching</h5>
            </div>
          </div>

  `;
  
  });
}

getStreams();

async function getSubCount() {
  const endpoint = "https://api.twitch.tv/helix/users/follows?to_id=23161357";

  let authorizationObject = await getTwitchAuthorization();
  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase
  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`;

  let headers = {
    authorization,
    "Client-Id": clinetId,
  };

  fetch(endpoint, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function setName(data) {
  let i = 0;
  const gameName = document.querySelectorAll(".card-text");

  gameName.forEach((e) => {
    e.innerHTML = data.data[i].name;
    i++;
  });
}



getGames();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const gameRank = document.querySelectorAll(".card-title");

gameRank.forEach((e, index) => {
  place = index + 1;
  e.innerHTML = "Rank: " + place;
});

var btn = document.querySelectorAll(".btn-light");
function seeStreamers(data) {
  for (let j = 0; j < btn.length; j++) {
    btn[j].addEventListener("click", function onClick() {
      getDetails(data.data[j].name);
    });
  }
}

document.getElementById("search-btn").addEventListener("click", searchClips);

function searchClips() {
  $("#clips").empty();
  let input= document.getElementById("search-input").value;
  getGameID(input);
}

async function getGameID(game){

  const endpoint =
  "https://api.twitch.tv/helix/games?name="+game;

let authorizationObject = await getTwitchAuthorization();
let { access_token, expires_in, token_type } = authorizationObject;

//token_type first letter must be uppercase
token_type =
  token_type.substring(0, 1).toUpperCase() +
  token_type.substring(1, token_type.length);

let authorization = `${token_type} ${access_token}`;

let headers = {
  authorization,
  "Client-Id": clinetId,
};

fetch(endpoint, {
  headers,
})
  .then((res) => res.json())
  .then((data) => {
    getClips(data.data[0].id);
  });
}