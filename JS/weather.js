(function() {
    //getWeatherInfo();
    geocode();
})();

//Function to connect to the Dark Sky API and get weather info
function getWeatherInfo() {
//https://api.darksky.net/forecast/d04a8913171dae82d56dea4b8e2eba1e/37.8267,-122.4233
//Base-URL/APIKey/Latitude,Longitude

$.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233",
{ dataType: "jsonp" })
.done(function(data) {
    console.log(data);
})
.fail(function(error) {
    console.log(error);
})
.always(function(data) {
    console.log("Weather call complete!");
})
}

//Functionto connect to the MapQuest Geocoding API and geocoding data
function geocode() {
    //Base-URL + APIKey + &location + Address
    $.ajax("http://www.mapquestapi.com/geocoding/v1/address?key=" + mapQuestKey + "&location=Washington,DC")
    .done(function(data) {
        console.log(data);
    })
    .fail(function(error) {
        console.log(error);
    })
    .always(function() {
        console.log("Geocoding call finished");
    })
}