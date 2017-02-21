$( document ).ready(function() {
    var geoCord = "";
    navigator.geolocation.getCurrentPosition(function(position) {
        geoCord = (position.coords.latitude, position.coords.longitude);
        $(".h1city").html(geoCord);
    });
    alert(geoCord);



    // target.addEventListener(type, listener[, options]);
});

// var str = 'F';
// function ajaxCall() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("POST", api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon});
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send();
//     var response = JSON.parse(xhttp.responseText);
//     console.log(response);
// }

//Change Between Celcius and Farenheight and Claculate new Temperature
function celciusChange() {

    var celcius = document.getElementById('celciusButton');
    var temperature = "";
    if (celcius.innerHTML == 'Fahrenheit') {
        var temperature = 'far';
        console.log(temperature);
        celcius.innerHTML = ('Celcius');
    }
    else {
        var temperature = 'cel';
        console.log(temperature);
        celcius.innerHTML = ('Fahrenheit');
    }
}
window.onload=function(){
    var FarenheightButton = document.getElementById('celciusButton');
    FarenheightButton.addEventListener("click", celciusChange, false)
}
