var letterButtons = $(".letterbuttons");
var timerControl = $(".timercontrol");
var resetTeams = $(".resetteams");
var teamScoreDisplay = $(".teamscore");
var teamDisplay = $("h2");
var teamInput = $(":text");
var addScore = $(".addscore");
var letters = $(".list");
var numMax = false;
var list = [];
var teamScores = [0,0];
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

$(letterButtons).on('click', function(){
		if ($(letterButtons).index(this) === 0 && !numMax) {
			console.log("clicked");
			var random = generate(consonants);
			list.push(random);
			letters.text(list.join(" "));		
		}
		if ($(letterButtons).index(this) === 1 && !numMax) {
			var random = generate(vowels);
			list.push(random);
			letters.text(list.join(" "));		
		}
		if ($(letterButtons).index(this) === 2) {
			reset(list);
			letters.text("Add some letters!");
		}
});

//button click resets the inputs if both team names are entered
resetTeams.on('click', function(){
	if (!$(teamDisplay[0]).hasClass("hide") && !$(teamDisplay[1]).hasClass("hide")) {
		$(teamDisplay[0]).toggleClass("hide");
		$(teamDisplay[1]).toggleClass("hide");
		$(teamInput[0]).toggleClass("hide");
		$(teamInput[1]).toggleClass("hide");
		teamScores = [0,0];
		$(teamScoreDisplay[0]).text(teamScores[0]);
		$(teamScoreDisplay[1]).text(teamScores[1]);
	} else {
		alert("Type a team name!");
	}
});

$(addScore).on('click', function(){
	var i = $(addScore).index(this);
	teamScores[i]++;
	$(teamScoreDisplay[i]).text(teamScores[i]);
});

$(teamInput).keypress(function(event){
	var i = $(teamInput).index(this);
	if (event.which === 13) {
		var name = $(this).val();
		$(this).val("");
		$(this).toggleClass("hide");
		$(teamDisplay[i]).text(name);
		$(teamDisplay[i]).toggleClass("hide");
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

    $(timerControl[0]).click(function() {
    	countdown();
     	countDownMusic.play();
});

    $(timerControl[1]).click(function() {
    	cdpause();
    	countDownMusic.pause();
    });

    $(timerControl[2]).click(function() {
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
