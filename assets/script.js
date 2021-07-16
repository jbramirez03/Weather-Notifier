// var test = document.querySelector("#test")
var requestedURL  = "https://api.openweathermap.org/data/2.5/weather?q=burlington&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00";


// function getAPi () {

//     fetch(requestedURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             console.log(data.coord);
//             var longtitudeCoord = data.coord.lon;
//             var latitudeCoord = data.coord.lat;
//             var nextURl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitudeCoord + "&lon=" + longtitudeCoord + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
//             fetch(nextURl)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 console.log(data);
//             })
//         })
        
// }

// getAPi();

// var momentTest = moment.unix(1626454800).format("DD/MM/YYYY");

// console.log(momentTest);