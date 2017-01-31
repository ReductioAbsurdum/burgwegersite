// JavaScript Document

$(document).ready(function() {
	"use strict";
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
		navigator.geolocation.getCurrentPosition(function(position) {
	$("h2").html("Your current position: <br>latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		});
		}
	});
	
	function printWeather(name, weather, Wtype, humidity){
		"use strict";
		var Fahr = Math.floor(weather*9/5 -459.67) + "&deg" + " Fahrenheit";
		var Cel = Math.floor(weather - 273.15) + "&deg" + " Celsius";
		var type = [Fahr, Cel];
		var i = 0;
		$("#city").html(name);
		$("#Wtype").html(Wtype);
		$("#humidity").html("humidity: " + humidity + "%");
		$("p").html(type[i]);
		
		$("p").click(function(){
			if(type[i] === Fahr){
				i++;
				}else{ 
				i--;
				}
			$("p").fadeOut(300, function(){
				$(this).html(type[i]);
				$("p").fadeIn(600);
			});
		});
	}
	
function changeBackground(temp){
	"use strict";
	if(temp < 280){
		$("body").css("background" , "url(coldB.jpg) no-repeat");
		}
}
	
	
function getWeather(position){
	"use strict";
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var appid = "53c46f143f16363e215c4082f3ebe72b";
	var endpoint = "http://api.openweathermap.org/data/2.5/weather?";
	var url = endpoint + "lat=" + lat + "&lon=" + long + "&APPID=" + appid;
	
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function (json){
		console.log(json);
		$("#weather").html(JSON.stringify(json));
		printWeather(json.name, json.main.temp, json.weather[0].description, json.main.humidity);	
		changeBackground(json.main.temp);
		}
		});
}

/*---------------------basic format from Julian----------------------------------------
$(document).ready(function() {
	"use strict";
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
		}
	});
	
function getWeather(position){
	"use strict";
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var appid = "53c46f143f16363e215c4082f3ebe72b";
	var endpoint = "http://api.openweathermap.org/data/2.5/weather?";
	var url = endpoint + "lat=" + lat + "&lon=" + long + "&APPID=" + appid;
	
		
	function printWeather(name, weather){
		$("p").html(name + " " + weather);
		
		}
	
	$.ajax({
		url: url,
		method: "GET",
		dataType: "json",
	})
	.success(function (json){
		printWeather(json.name, json.main.temp);	
});
}


---------------end basic format from julian-------------------------------*/

	/*
$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=27.490&lon=-82.577&APPID=53c46f143f16363e215c4082f3ebe72b", function(json){
	console.log(json);
	$("p").html(JSON.stringify(json));
	toFahrenheit(json.main.temp);
	});
	
	function toFahrenheit(value){
		var F = Math.floor(((value * 9)/5) - 459.67);
		$("#weather").html(F + " Degrees Fahrenheit!");
		}
	
*/



/*
$(document).ready(function(){  //--------------------document ready function
	"use strict";
		
if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(anything) {
		var lati = anything.coords.latitude;
		var longi = anything.coords.latitude;
		$("p").html(lati);
		$("h1").html("latitude: " + anything.coords.latitude + "<br>longitude: " + anything.coords.longitude);
		
	});
}
}); //--------------------------------------------document ready function closer

$.ajax({
	url: "http://api.openweathermap.org/data/2.5/weather?lat=65&lon=100&APPID=53c46f143f16363e215c4082f3ebe72b",
	type: "GET",
	dataType: "json",
	success: function(json){
		"use strict";
		console.log(json);
		$(".weather").html(JSON.stringify(json)); //JSON.stringify makes the data a string.
	},              
	error: function (xhr, status, errorThrown){
		"use strict";
		alert("Sorry, there was a problem!");
		console.log("Error:" + errorThrown);
		console.log("Status:" + status);
		console.dir(xhr);
		}
});




*/
/*
NOTES:

Ajax does NOT go inside a document ready function.
 
Create functions that will do one thing. One to get weather (the data) with ajax, one to present the weather (presentation logic), ...
because you might want to change or add things to the presentation logic.
*/

/*
original CODE:

$(document).ready(function() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
	$("h1").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		});
		}
	});

$.ajax({
	url: "http://api.openweathermap.org/data/2.5/weather?lat=65&lon=100&APPID=53c46f143f16363e215c4082f3ebe72b",
	type: "GET",
	dataType: "json",
	success: function(json){
		"use strict";
		console.log(json);
		$(".weather").html(JSON.stringify(json)); //JSON.stringify makes the data a string.
	},              
	error: function (xhr, status, errorThrown){
		"use strict";
		alert("Sorry, there was a problem!");
		console.log("Error:" + errorThrown);
		console.log("Status:" + status);
		console.dir(xhr);
		}
});	
*/