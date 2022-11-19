import { MY_API_KEY } from './config.js';

fetch("https://nfl-schedule.p.rapidapi.com/v1/schedules", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nfl-schedule.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
	document.getElementById('g0Date').innerHTML = response.data[0].date;
	document.getElementById('g0ShortName').innerHTML = response.data[0].shortName;

    document.getElementById('name').innerHTML = response.message;
	document.getElementById('g1Date').innerHTML = response.data[1].date;
	document.getElementById('g1ShortName').innerHTML = response.data[1].shortName;

	document.getElementById('g2Date').innerHTML = response.data[2].date;
	document.getElementById('g2ShortName').innerHTML = response.data[2].shortName;

	document.getElementById('g3Date').innerHTML = response.data[3].date;
	document.getElementById('g3ShortName').innerHTML = response.data[3].shortName;

	document.getElementById('g4Date').innerHTML = response.data[4].date;
	document.getElementById('g4ShortName').innerHTML = response.data[4].shortName;

	document.getElementById('g5Date').innerHTML = response.data[5].date;
	document.getElementById('g5ShortName').innerHTML = response.data[5].shortName;

	document.getElementById('g6Date').innerHTML = response.data[6].date;
	document.getElementById('g6ShortName').innerHTML = response.data[6].shortName;

	document.getElementById('g7Date').innerHTML = response.data[7].date;
	document.getElementById('g7ShortName').innerHTML = response.data[7].shortName;

    document.getElementById('name').innerHTML = response.message;
	document.getElementById('g8Date').innerHTML = response.data[8].date;
	document.getElementById('g8ShortName').innerHTML = response.data[8].shortName;

	document.getElementById('g9Date').innerHTML = response.data[9].date;
	document.getElementById('g9ShortName').innerHTML = response.data[9].shortName;

	document.getElementById('g10Date').innerHTML = response.data[10].date;
	document.getElementById('g10ShortName').innerHTML = response.data[10].shortName;

	document.getElementById('g11Date').innerHTML = response.data[11].date;
	document.getElementById('g11ShortName').innerHTML = response.data[11].shortName;

	document.getElementById('g12Date').innerHTML = response.data[12].date;
	document.getElementById('g12ShortName').innerHTML = response.data[12].shortName;

	document.getElementById('g13Date').innerHTML = response.data[13].date;
	document.getElementById('g13ShortName').innerHTML = response.data[13].shortName;
    
})
.catch(err => {
	console.log(err);
});