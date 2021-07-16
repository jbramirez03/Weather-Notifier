function getAPi () {
var requestedURL  = "https://api.openweathermap.org/data/2.5/weather?q=burlington,nc$limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00";

    fetch(requestedURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.coord);
        })
}

getAPi();