// JavaScript Document

var texts = ['404 File not found!'];

$(document).ready(function(){
	
	var drop = $(".drop");
	var show = $(".show");
	var ul = $("ul");
	show.append(ul);
	
	$("#dropdown").click(function(){
		drop.append(ul);
		drop.toggle();
		if($(drop).css("display") === "none"){
			show.append(ul);
		}
	});
	
	setInterval('cursorBlink()', 500);
	
		type();
	
});

var textlength = 0;
var num = 0;

function type(){
	$("#text").append(texts[num][textlength++]);
	  if(textlength < texts[num].length+1) {
		  if(texts[num][textlength] === '.')
		  {
			setTimeout('type()', 500);
		  }else{
		  	setTimeout('type()', 50);
		  }
	  }else if(num < texts.length-1){
		  num++;
		$("#text").append('<br/>');
		textlength = 0;
		  setTimeout('type()', 1000);
	  }else{
		$("#text").append('<br/>');
		textlength = 0;
    }
}

function cursorBlink() {
    $('#cursor').animate({
        opacity: 0
    }).animate({
        opacity: 1
   	});
}