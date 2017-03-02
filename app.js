$( document ).ready(function() {
    var latitude = '';
    var longitude = '';
    var changeCity = '';
    var FarenheightButton = document.getElementById('celciusButton');
    FarenheightButton.addEventListener("click", celciusChange, false);

    //Change Between Celcius and Farenheight and Claculate new Temperature
    function celciusChange() {
        var options = {
          enableHighAccuracy: true,
          timeout: 7000,
          maximumAge: 0
        };
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
    }


    //Successful geolocation//
     function success(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(crd.latitude);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      var latitude = crd.latitude;
      var longitude = crd.longitude;
      var changeCity = document.getElementById('city');
      ajaxCall(latitude, longitude);
    };

    //Error reporting
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };


    //API Call
    function ajaxCall(latitude, longitude) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        var response = JSON.parse(xhttp.responseText);
        

    }


});

















//Onload function//
// window.onload=function(){
//
//
//
// }
