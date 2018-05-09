var consButton = $("#consonant");
var vowButton = $("#vowel");
var resetButton = $("#reset");
var resetTeams = $("#resetTeams");
var letters = $(".list");
var numMax = false;
var list = [];


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
})

resetTeams.on('click', function(){
	if (!$("#team1").hasClass("done") && !$("#team2").hasClass("done")) {
		$("#team1").toggleClass("done");
		$("#team2").toggleClass("done");
		$("#team1Input").toggleClass("done");
		$("#team2Input").toggleClass("done");
	} else {
		alert("Type a team name!");
	}
})

resetButton.on('click', function(){
	//needs some work
})

$("#team1Input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var teamName1 = $(this).val();
		$(this).val("");
		$(this).toggleClass("done");
		//create a new li and add to ul
		$("#team1").text(teamName1);
		$("#team1").toggleClass("done");
	}
});

$("#team2Input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var teamName2 = $(this).val();
		$(this).val("");
		$(this).toggleClass("done");
		//create a new li and add to ul
		$("#team2").text(teamName2);
		$("#team2").toggleClass("done");
	}
});

//setup array for consonants
var consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","X","Z","W"];

//setup array for vowels
var vowels = ["A","E","I","O","U","Y"];

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
    });

    $("#stop").click(function() {
    	cdpause();
    })

    $("#reset").click(function() {
    	cdreset();
    })



