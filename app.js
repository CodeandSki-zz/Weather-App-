$( document ).ready(function() {
    var geoCord = "";
    navigator.geolocation.getCurrentPosition(function(position) {
        geoCord = (position.coords.latitude, position.coords.longitude);
        $(".h1city").html(geoCord);
    });
    // alert(geoCord);

});

 var latitude = '';
 var longitude = '';

 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


//Successful geolocation//
function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log(crd.latitude);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

//Change Between Celcius and Farenheight and Claculate new Temperature
function celciusChange() {

    var celcius = document.getElementById('celciusButton');
    var temperature = "";
    if (celcius.innerHTML == 'Fahrenheit') {
        var temperature = 'far';
        celcius.innerHTML = ('Celcius');
    }
    else {
        var temperature = 'cel';
        celcius.innerHTML = ('Fahrenheit');
    }

    var testtt = navigator.geolocation.getCurrentPosition(success, error, options);
    //Print results to console
    console.log(testtt);
}

//Onload function//
window.onload=function(){
    var FarenheightButton = document.getElementById('celciusButton');
    FarenheightButton.addEventListener("click", celciusChange, false);

    function ajaxCall() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        var response = JSON.parse(xhttp.responseText);
        console.log(response);

    }

}

//Ajax call
