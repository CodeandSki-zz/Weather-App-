$( document ).ready(function() {

    var FarenheightButton = document.getElementById('celciusButton');
    FarenheightButton.addEventListener("click", celciusChange, false);

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
      // console.log(test);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
});

 var latitude = '';
 var longitude = '';

 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var latitude="";
var longitude="";





    // function ajaxCall() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.open("POST", "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}");
    //     xhttp.setRequestHeader("Content-type", "application/json");
    //     xhttp.send();
    //     var response = JSON.parse(xhttp.responseText);
    //     console.log(response);
    //
    // }









//Onload function//
// window.onload=function(){
//
//
//
// }
