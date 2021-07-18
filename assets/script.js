
// var momentTest = moment.unix(1626454800).format("DD/MM/YYYY");

// console.log(momentTest);

var searchButton = document.querySelector("#search-button");
var cityInput = document.querySelector("#city-input");
var currentWeather = document.querySelector("#current-weather");
var currentTemp = document.querySelector("#current-temp");
var weatherIcon = document.querySelector("#weather-icon");
var currenthumidity = document.querySelector("#current-humidity");
var currentWindSpeed = document.querySelector("#current-wind");
var currentUV = document.querySelector("#current-uv");
var cityNamesList = document.querySelector(".city-name-list");
var clearBtn = document.querySelector("#clear-button");

searchButton.addEventListener("click", function(){
    var cityChoice = cityInput.value;

    makeCityList(cityInput.value);
    
    
    
    var cityWeatherURL  = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChoice + "&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00";
    fetch(cityWeatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // console.log(data.coord);
            var longtitudeCoord = data.coord.lon;
            var latitudeCoord = data.coord.lat;
            var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitudeCoord + "&lon=" + longtitudeCoord + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
            fetch(currentWeatherUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(currenti) {
                console.log(currenti);
                var date = moment.unix(currenti.current.dt).format("MM/DD/YYYY");
                var city = data.name;
                var icon = currenti.current.weather[0].icon;
                currentWeather.textContent = `${city}: (${date})`;
                weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
                weatherIcon.setAttribute("alt", currenti.current.weather[0].description);
                var temp = currenti.current.temp;
                currentTemp.textContent = `Temperature: ${temp} \u00B0F`;
                var humidity = currenti.current.humidity;
                currenthumidity.textContent ="Humidity: " +  humidity + "%";
                var windSpeed = currenti.current.wind_speed;
                currentWindSpeed.textContent = "Wind Speed: " + windSpeed + " Mph";
                uv = currenti.current.uvi;
                if ( uv >= 0 && uv <= 2.99) {
                    currentUV.classList.add("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("high");
                    currentUV.classList.remove("very-high");

                } else if (uv >= 3 && uv <= 5.99) {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("high");
                    currentUV.classList.remove("very-high");
                    currentUV.classList.add("moderate");
                } else if (uv >= 6 && uv <= 7.99) {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("very-high");
                    currentUV.classList.add("high");
                } else {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("high");
                    currentUV.classList.add("very-high");
                }
            
                currentUV.textContent = uv;

                fiveDayForecast(currenti);
            })
        })

        
})

var weeklyWeatherBlocks = document.querySelectorAll(".weekly-weather");
var weeklyDate = document.querySelectorAll(".weekly-date");
var weeklyIcon = document.querySelectorAll(".weekly-image");
var weeklyTemp = document.querySelectorAll(".weekly-temp");
var weeklyWind = document.querySelectorAll(".weekly-wind");
var weeklyHumidity = document.querySelectorAll(".weekly-humidity");

function fiveDayForecast (url) {



    for (var i = 0; i < weeklyWeatherBlocks.length; i++) {
        // weeklyDate[i].textContent = url.daily[i].dt;
        var date = url.daily[i + 1].dt;
        var momentConvert = moment.unix(date).format("MM/DD/YYYY");
        weeklyDate[i].textContent = momentConvert;
        var icon = url.daily[i].weather[0].icon;
        weeklyIcon[i].setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
        var temp = url.daily[i].temp.max;
        weeklyTemp[i].textContent = "Temp: " + temp;
        var wind = url.daily[i].wind_speed;
        weeklyWind[i].textContent = "Wind: " + wind + "Mph";
        var humidity = url.daily[i].humidity;
        weeklyHumidity[i].textContent = "Humidity: " + humidity;
    }




}


function makeCityList (input) {
    var createdRow = document.createElement("div");
    createdRow.setAttribute("class", "row");
    var createdContainer = document.createElement("div");
    createdContainer.setAttribute("class", "container");
    createdContainer.classList.add("text-center");
    var createdPEl = document.createElement("p");
    createdPEl.textContent = input;
    createdPEl.setAttribute("class", "city-list-style");
    createdContainer.append(createdPEl);
    createdRow.append(createdContainer);
    cityNamesList.append(createdRow);

    createdPEl.addEventListener("click", function() {
        var definedValue = createdPEl.innerHTML;
        cityPrevSearch(definedValue);
    
    })


}

    clearBtn.addEventListener("click", function () {
        cityNamesList.innerHTML = '';  
    })


    
    function cityPrevSearch (val) {
        var cityChoice = val;

    makeCityList(val.innerHTML);
    
    
    
    var cityWeatherURL  = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChoice + "&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00";
    fetch(cityWeatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // console.log(data.coord);
            var longtitudeCoord = data.coord.lon;
            var latitudeCoord = data.coord.lat;
            var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitudeCoord + "&lon=" + longtitudeCoord + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
            fetch(currentWeatherUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(currenti) {
                console.log(currenti);
                var date = moment.unix(currenti.current.dt).format("MM/DD/YYYY");
                var city = data.name;
                var icon = currenti.current.weather[0].icon;
                currentWeather.textContent = `${city}: (${date})`;
                weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
                weatherIcon.setAttribute("alt", currenti.current.weather[0].description);
                var temp = currenti.current.temp;
                currentTemp.textContent = `Temperature: ${temp} \u00B0F`;
                var humidity = currenti.current.humidity;
                currenthumidity.textContent ="Humidity: " +  humidity + "%";
                var windSpeed = currenti.current.wind_speed;
                currentWindSpeed.textContent = "Wind Speed: " + windSpeed + " Mph";
                uv = currenti.current.uvi;
                if ( uv >= 0 && uv <= 2.99) {
                    currentUV.classList.add("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("high");
                    currentUV.classList.remove("very-high");

                } else if (uv >= 3 && uv <= 5.99) {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("high");
                    currentUV.classList.remove("very-high");
                    currentUV.classList.add("moderate");
                } else if (uv >= 6 && uv <= 7.99) {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("very-high");
                    currentUV.classList.add("high");
                } else {
                    currentUV.classList.remove("low");
                    currentUV.classList.remove("moderate");
                    currentUV.classList.remove("high");
                    currentUV.classList.add("very-high");
                }
            
                currentUV.textContent = uv;

                fiveDayForecast(currenti);
            })
        })
    }

