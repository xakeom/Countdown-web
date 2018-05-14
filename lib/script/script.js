var consButton = $("#consonant");
var vowButton = $("#vowel");
var clearLetters = $("#clear");
var resetTeams = $("#resetTeams");
var addScoreT1 = $("#addScoreTeam1");
var addScoreT2 = $("#addScoreTeam2");
var letters = $(".list");
var numMax = false;
var list = [];
var team1Score = 0;
var team2Score = 0;
//setup array for consonants
var consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","X","Z","W"];
//setup array for vowels
var vowels = ["A","E","I","O","U","Y"];

var countDownMusic = document.createElement('audio');
countDownMusic.setAttribute('src', 'lib/sound/countdown.wav');
var buttonSound = document.createElement('audio');
buttonSound.setAttribute('src','lib/sound/buttonclick.wav');


$("button").click(function(){
	buttonSound.play();
})

//button click returns random consonant then pushes letter to list array
consButton.on('click', function(){
	if(!numMax) {
	var random = generate(consonants);
	list.push(random);
	letters.text(list.join(" "));
	} else {
	}
})

//button click returns random vowel then pushes letter to list array
vowButton.on('click', function(){
	if (!numMax) {
	var random = generate(vowels);
	list.push(random);
	letters.text(list.join(" "));
	} else {
	}
});

//button click resets the inputs if both team names are entered
resetTeams.on('click', function(){
	if (!$("#team1").hasClass("hide") && !$("#team2").hasClass("hide")) {
		$("#team1").toggleClass("hide");
		$("#team2").toggleClass("hide");
		$("#team1Input").toggleClass("hide");
		$("#team2Input").toggleClass("hide");
		team1Score = 0;
		team2Score = 0;
		$("#team1Score").text(team1Score);
		$("#team2Score").text(team2Score);
	} else {
		alert("Type a team name!");
	}
});

clearLetters.on('click', function(){
	reset(list);
	letters.text("Add some letters!");
});

addScoreT1.on('click', function(){
	team1Score++;
	$("#team1Score").text(team1Score);
});

addScoreT2.on('click', function(){
	team2Score++;
	$("#team2Score").text(team2Score);
});

$("#team1Input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var teamName1 = $(this).val();
		$(this).val("");
		$(this).toggleClass("hide");
		//create a new li and add to ul
		$("#team1").text(teamName1);
		$("#team1").toggleClass("hide");
	}
});

$("#team2Input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var teamName2 = $(this).val();
		$(this).val("");
		$(this).toggleClass("hide");
		//create a new li and add to ul
		$("#team2").text(teamName2);
		$("#team2").toggleClass("hide");
	}
});

//generate random letter
function generate(arr) {
	var random = Math.floor(Math.random() * arr.length-1) + 1;
	if(!numMax) {
	var char = arr[random];	
	} 
	if(list.length === 8) {
		numMax = true;
	}
	return char;
}

//functional timer:
    var CCOUNT = 60;
    
    var t;
    var count = 60;

    
    function cddisplay() {
        // displays time in span
        $(".timer").text(count);
    };
    
    function countdown() {
        // starts countdown
        cddisplay();
        if (count == 0) {
        	restart();
        	countDownMusic.pause();
            // time is up
        } else {
            count--;
            t = setTimeout("countdown()", 1000);
        }
    };
    
    function cdpause() {
        // pauses countdown
        clearTimeout(t);
    };
    
    function cdreset() {
        // resets countdown
        cdpause();
        count = CCOUNT;
        cddisplay();
    };

    $("#start").click(function() {
    	countdown();
     	countDownMusic.play();
});

    $("#stop").click(function() {
    	cdpause();
    	countDownMusic.pause();
    });

    $("#reset").click(function() {
    	cdreset();
        countDownMusic.currentTime = 0;
        countDownMusic.pause();
    });

function reset(arr) {
	arr.splice(0, arr.length);
	numMax = false;
};
    
function restart() {
    countDownMusic.currentTime = 0;
    };

function playButtonSound() {
	buttonSound.play();
}
