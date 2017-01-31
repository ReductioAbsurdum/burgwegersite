// JavaScript Document
var quotes = ['"The greatest artists like Dylan, Picasso, and Newton risked failure, and if we want to be great, we\'ve got to risk it too."', '"The people who are crazy enough to think they can change the world are the ones who do."', '"People who know what they’re talking about don’t need PowerPoint."', '"The best way to predict the future is to invent it."', '"I think different religions are different doors to the same house. Sometimes I think the house exists, and sometimes I don’t. It’s the great mystery."', '"You should never start a company with the goal of getting rich. Your goal should be making something you believe in and making a company that will last."', '"Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart."', '"Form follows emotion."', '"Picasso had a saying - \'good artists copy, great artists steal\' - and we have always been shameless about stealing great ideas."', '"What are the five products you want to focus on? Get rid of the rest, because they’re dragging you down. They’re turning you into Microsoft. They’re causing you to turn out products that are adequate but not great."'];

$(document).ready(function(){
"use strict";
	var i = 0;
	$("button").click(function(){
		$("p").fadeOut(300, function(){
			$("p").html(quotes[i]);
			var tester = i;
			i = Math.floor(Math.random()*10);
			if(i === tester){
				i++;
				}
			$("p").fadeIn(500);	
		});
	});
	$("button").click(function(){
	var Link = "https://twitter.com/intent/tweet?text=" + quotes[i] + " " + "-Steve Jobs";
		$("#twitter-share-button").attr("href", Link);
	});
});
