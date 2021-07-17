
// var momentTest = moment.unix(1626454800).format("DD/MM/YYYY");

// console.log(momentTest);

var searchButton = document.querySelector("#search-button");
var cityInput = document.querySelector("#city-input");
var currentWeather = document.querySelector("#current-weather");

searchButton.addEventListener("click", function(){
    var cityChoice = cityInput.value;
    var cityWeatherURL  = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChoice + "&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00";
    fetch(cityWeatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.coord);
            var longtitudeCoord = data.coord.lon;
            var latitudeCoord = data.coord.lat;
            var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitudeCoord + "&lon=" + longtitudeCoord + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
            fetch(currentWeatherUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(currenti) {
                console.log(currenti);
                console.log(currenti.current.temp);
                var date = moment.unix(currenti.current.dt).format("MM/DD/YYYY");
                var city = data.name;
                currentWeather.textContent = `${city}: (${date})`;
                
            })
        })

        
})