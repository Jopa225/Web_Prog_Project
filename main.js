const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "twitch-game-popularity.p.rapidapi.com",
    "X-RapidAPI-Key": "cf49ec9e29msh35435f471735eabp1888efjsn7893b4102aea",
  },
};

fetch(
  "https://twitch-game-popularity.p.rapidapi.com/game?name=League%20of%20Legends&year=2020&month=08",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let hours_streamed = [],
      hours_watched = [];
    for (let i = 0; i < 12; i++) {
      hours_streamed[i] = parseInt(response[i].Hours_Streamed.substring(0, 7));
      hours_watched[i] = parseInt(response[i].Hours_watched.substring(0, 9));
    }
    console.log(response);

    var canvasElement = document.getElementById("myChart");
    var config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "League of Legends hours streamed ",
            data: hours_streamed,

            backgroundColor: ["rgba(145, 70, 255, 0.6)"],
          },
        ],
      },
    };

    var canvasElement_watched = document.getElementById("hoursWatched_Chart");
    var config_watched = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "League of Legends hours watched",
            data: hours_watched,

            backgroundColor: ["rgba(255, 255, 0, 0.6)"],
          },
        ],
      },
    };
    var myChart = new Chart(canvasElement, config);
    var watched_chart = new Chart(canvasElement_watched, config_watched);
  })
  .catch((err) => console.error(err));

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

async function getStreams() {
  const endpoint = "https://api.twitch.tv/helix/games/top";

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
      setImage(data);
      seeStreamers(data);
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
  const endpoint = "https://api.twitch.tv/helix/search/channels?query=" + game;

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

function setImage(data) {
  let i = 0;
  const images = document.querySelectorAll(".card-img-top");

  images.forEach((e) => {
    if (data.data[i].name === "Counter-Strike: Global Offensive") {
      e.src = "CS.jpg";
    }
    if (data.data[i].name == "Call of Duty: Warzone") {
      e.src = "Fortnite.jpg";
    }

    e.src = data.data[i].name + ".jpg";
    i++;
  });
}

getStreams();

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
