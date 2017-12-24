//psuedo code list
//Generate random number to begin the game between 19-120
//w3school random 3 example
//Place the random number on HTML page use append method (.text)
//UCF lesson 4.1 / 7 trigger-random
$(document).ready(function(){
  var rand_num = Math.floor((Math.random()* 101) + 19)
  $("#randNum").text( rand_num);

  console.log(rand_num);
  




// Generate random card numbers (4 cards) between 1 thru 12
//w3school random 1 example
var diamonds=Math.floor(Math.random() * 12) + 1;
var hearts=Math.floor(Math.random() * 12) + 1;
var clubs=Math.floor(Math.random() * 12) + 1;
var spades=Math.floor(Math.random() * 12) + 1;

		
//List Global varibles

var Total=0;
var wins=0;
var losses=0;

	$("#wins").text(wins);
	$("#losses").text(losses);


//Restart

function Restart(){
	random=Math.floor((Math.random()* 101) + 19);
	$("randNum").text(rand_num)
	diamonds=Math.floor(Math.random() * 12) + 1;
	hearts=Math.floor(Math.random() * 12) + 1;
	clubs=Math.floor(Math.random() * 12) + 1;
	spades=Math.floor(Math.random() * 12) + 1;
	Total=0;
	$("#endTotal").text(Total);
	}

//Show win-loss status
function winner(){
	wins++;
	$("#wins").text(wins);
	alert("Great job");
	Restart();
	
	
	}
function lost(){
	losses++;
	$("#losses").text(losses);
	alert("So Sorry");
	Restart();
	
	
}
//Click cards to generate randon number function
	$("#click1").on("click",function(){
		Total=Total + diamonds;
		$("#endTotal").text(Total);
		if (Total == rand_num){
			winner();
			}
		else if(Total>rand_num){
			lost();
			}
		
	})

	$("#click2").on("click",function(){
		Total=Total + hearts;
		$("#endTotal").text(Total);
		if (Total == rand_num){
			winner();
			}
		else if(Total>rand_num){
			lost();
			}
		
	})

	$("#click3").on("click",function(){
		Total=Total + clubs;
		$("#endTotal").text(Total);
		if (Total == rand_num){
			winner();
			}
		else if(Total>rand_num){
				lost();
			}
		
	})

	$("#click4").on("click",function(){
		Total=Total + spades;
		$("#endTotal").text(Total);
		if (Total == rand_num){
			winner();
			}
			else if(Total>rand_num){
				lost();
			}
	
	}); 
});









