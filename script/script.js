var consButton = $("#consonant");
var vowButton = $("#vowel");
var resetButton = $("#reset");
var letters = $(".list");
var numMax = false;
var list = [];

//button click returns random consonant then pushes letter to list array
consButton.on('click', function(){
	if(!numMax) {
	var random = generate(consonants);
	list.push(random);
	letters.text(list);
	} else {
	}
})

//button click returns random vowel then pushes letter to list array
vowButton.on('click', function(){
	if (!numMax) {
	var random = generate(vowels);
	list.push(random);
	letters.text(list);
	} else {
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
		$(this).addClass("done");
		//create a new li and add to ul
		$("#team1").text(teamName1);
	}
});

$("#team2Input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var teamName2 = $(this).val();
		$(this).val("");
		$(this).addClass("done");
		//create a new li and add to ul
		$("#team2").text(teamName2);
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

//timer function from stackoverflow
function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}

$("#start").on('click', function(){
	// milliseconds 
	timer(60000, function(timeleft) {
	// called every step to update the visible countdown
    $(".timer").text(timeleft)		
    },
    function() { // what to do after
    $(".timer").text("Time's up!!!");
    }
);
});

