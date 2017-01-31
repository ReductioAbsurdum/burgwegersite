var sAudioMap={};function getAudio(a){var b=sAudioMap[a];b||(b=new Audio,b.src=a,sAudioMap[a]=b);return b}var up=0,note,button,ourTimer,notesWrong=0,notesCorrect=0,timer=0,minute=0,second=0,overlay,results;function time(){timer++;minute=parseInt(timer/60,10);second=parseInt(timer%60,10);second=10>second?"0"+second:second}
function ChangeKeyBlue(a){var b="wav/"+a.id+".wav",b=getAudio(b);b.play();var c=document.getElementsByClassName("key"),b=document.getElementsByClassName("key_b");note=a.id;for(var d=0;d<c.length;d++)c[d].style.backgroundColor="white";for(c=0;c<b.length;c++)b[c].style.backgroundColor="black";a.style.backgroundColor="rgb(62, 152, 209)"}
function buttonFunction(a){button=a.id;for(var b=document.getElementsByTagName("button"),c=0;c<b.length;c++)b[c].style.backgroundColor="";a.style.backgroundColor="rgb(62, 152, 209)"}function mov(a){"rgb(62, 152, 209)"!==a.style.backgroundColor&&(a.style.backgroundColor="yellow")}function moo(a){"rgb(62, 152, 209)"!==a.style.backgroundColor&&(a.style.backgroundColor="white")}function mob(a){"rgb(62, 152, 209)"!==a.style.backgroundColor&&(a.style.backgroundColor="black")}
var flashCards=[["c2",126,197,"quarter"],["d2",126,190,"quarter"],["e2",126,185,"quarter"],["f2",126,176,"quarter"],["g2",126,170,"quarter"],["a2",126,165,"quarter"],["b2",126,158,"quarter"],["c3",126,153,"quarter"],["d3",126,147,"quarter"],["e3",126,176,"quarterUp"],["f3",126,170,"quarterUp"],["g3",126,165,"quarterUp"],["a3",126,158,"quarterUp"],["b3",126,152,"quarterUp"],["c4",126,144,"quarterUp"],["d4",126,139,"quarterUp"],["e4",126,132,"quarterUp"],["a3",126,85,"quarter"],["b3",126,79,"quarter"],
["c4",126,73,"quarter"],["d4",126,66,"quarter"],["e4",126,60,"quarter"],["f4",126,54,"quarter"],["g4",126,48,"quarter"],["a4",126,43,"quarter"],["b4",126,37,"quarter"],["c5",126,66,"quarterUp"],["d5",126,60,"quarterUp"],["e5",126,55,"quarterUp"],["f5",126,49,"quarterUp"],["g5",126,43,"quarterUp"],["a5",126,35,"quarterUp"],["b5",126,29,"quarterUp"],["c6",126,23,"quarterUp"]],currentLetter="",currentAccidental="",currentKey="",currentCard=0;
function randRange(a,b){return Math.round(Math.random()*(b-a)+a)}function shuffleCards(){for(var a=0;1E3>a;a++){var b,c,d;c=randRange(0,flashCards.length-1);d=randRange(0,flashCards.length-1);b=flashCards[c];flashCards[c]=flashCards[d];flashCards[d]=b}}var canvas,ctx,img,img1,img2,img3,img4,img5,img6,img7,img8,img9;
function trying(){canvas=document.getElementById("myCanvas");ctx=canvas.getContext("2d");img=document.getElementById("brace");img1=document.getElementById("vertical");img2=document.getElementById("vertical2");img3=document.getElementById("staff");img4=document.getElementById("staff2");img5=document.getElementById("F_clef");img6=document.getElementById("G_clef");img7=document.getElementById("ledger");img8=document.getElementById("quarter");img9=document.getElementById("quarterUp")}
function finish(){clearInterval(ourTimer);overlay=document.getElementById("overlay");results=document.getElementById("results");var a=document.getElementById("time"),b=document.getElementById("correct"),c=document.getElementById("incorrect");enable=!1;overlay.className="show";results.className="show";b.innerHTML=notesCorrect;c.innerHTML=notesWrong;a.innerHTML=minute+":"+second}
function newGame(){overlay.className="";results.className="";second=minute=timer=notesCorrect=notesWrong=0;enable=!0;currentKey=currentAccidental=currentLetter="";currentCard=0;shuffleCards();ourTimer=setInterval(time,1E3);init()}
function showNote(){up++;void 0===flashCards[currentCard]&&finish();"quarter"===flashCards[currentCard][3]?ctx.drawImage(img8,126,flashCards[currentCard][2],19,48):"quarterUp"===flashCards[currentCard][3]&&ctx.drawImage(img9,126,flashCards[currentCard][2],19,48);switch(flashCards[currentCard][2]){case 23:ctx.drawImage(img7,120,28,30,2);ctx.drawImage(img7,120,40,30,2);break;case 29:ctx.drawImage(img7,120,40,30,2);break;case 35:ctx.drawImage(img7,120,40,30,2);break;case 73:ctx.drawImage(img7,120,114,
30,2);break;case 79:ctx.drawImage(img7,120,114,30,2);break;case 85:ctx.drawImage(img7,120,126,30,2);ctx.drawImage(img7,120,114,30,2);break;case 132:ctx.drawImage(img7,120,150,30,2);ctx.drawImage(img7,120,138,30,2);break;case 139:ctx.drawImage(img7,120,150,30,2);break;case 144:ctx.drawImage(img7,120,150,30,2);break;case 185:ctx.drawImage(img7,120,225,30,2);break;case 190:ctx.drawImage(img7,120,225,30,2);break;case 197:ctx.drawImage(img7,120,225,30,2),ctx.drawImage(img7,120,237,30,2)}}
function init(){ctx.clearRect(0,0,250,260);ctx.drawImage(img,10,55,10,157);ctx.drawImage(img1,23,55,2,157);ctx.drawImage(img2,231,55,2,157);ctx.drawImage(img3,23,53,210,50);ctx.drawImage(img4,23,163,210,50);ctx.drawImage(img5,30,163,35,39);ctx.drawImage(img6,30,38,32,78);currentLetter="";currentAccidental="Natural";currentKey="";showNote()}function goit(){currentCard++;init()}var ding,badding;
function check(){var a=flashCards[currentCard][0],b=a.split("");console.log(sAudioMap);a!==note||b[0]!==button?(badding.play(),notesWrong++):(ding.play(),notesCorrect++);goit()}
function toWhite(){for(var a=document.getElementsByClassName("key"),b=document.getElementsByClassName("key_b"),c=0;c<a.length;c++)a[c].style.backgroundColor="white";for(a=0;a<b.length;a++)b[a].style.backgroundColor="black";b=document.getElementsByTagName("button");for(a=0;a<b.length;a++)b[a].style.backgroundColor="";check()}
window.onload=function(){ding=getAudio("ding2.wav");badding=getAudio("uterror.wav");trying();shuffleCards();ourTimer=setInterval(time,1E3);init();window.addEventListener("keypress",function(a){var b=document.getElementsByTagName("button");switch(a.which){case 97:buttonFunction(b[1]);break;case 98:buttonFunction(b[2]);break;case 99:buttonFunction(b[3]);break;case 100:buttonFunction(b[4]);break;case 101:buttonFunction(b[5]);break;case 102:buttonFunction(b[6]);break;case 103:buttonFunction(b[7]);break;
case 32:toWhite()}})};