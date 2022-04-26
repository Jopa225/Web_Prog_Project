// od 1-20 linije je za API koji dohvaća broj streamanih sati sve skupa u LOL-u po mjesecima

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'twitch-game-popularity.p.rapidapi.com',
		'X-RapidAPI-Key': 'cf49ec9e29msh35435f471735eabp1888efjsn7893b4102aea'
	}
};

fetch('https://twitch-game-popularity.p.rapidapi.com/game?name=League%20of%20Legends&year=2020&month=08', options)
	.then(response => response.json())
	.then(response => {console.log(response);
		let hours_streamed=[],hours_watched=[]; 
		for(let i=0; i<12;i++){
				hours_streamed[i]=parseInt(response[i].Hours_Streamed.substring(0,7));
				hours_watched[i]=parseInt(response[i].Hours_watched.substring(0,9));
		}
			console.log(response);


//od 22.-30. linije kreira se barchart s podacima koji su dobiveni iz API-ja
			var canvasElement= document.getElementById("myChart");
			var config= {
				type: "bar",
				data: {
					labels: ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"],
					datasets: [{label: "League of Legends hours streamed ", data:hours_streamed,
				
					backgroundColor:["rgba(145, 70, 255, 0.6)"
				
				],
				
			},
		],
			},
		};

		var canvasElement_watched= document.getElementById("hoursWatched_Chart");
		var config_watched= {
			type: "bar",
			data: {
				labels: ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"],
				datasets: [{label: "League of Legends hours watched", data:hours_watched,
			
				backgroundColor:[
					"rgba(255, 255, 0, 0.6)",
				
			
			],
			
		},
	],
		},
	};
var myChart= new Chart(canvasElement, config);
var watched_chart= new Chart(canvasElement_watched, config_watched);
	})
	.catch(err => console.error(err));
	


