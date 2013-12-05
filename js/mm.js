
// Mastermind game:  http://en.wikipedia.org/wiki/Mastermind_%28board_game%29

// get a random color pattern
var random_word = makecode();
var text_new="";

//put them in array of single words
var random_word_array = random_word.split('');
var game_count = 0;
var positions_matched;

//show in the console what is the color combination 

console.log("Secret Code:" + random_word_array);

//initialize the colors

$('#Color-input1').css('background-color',$('#Color1 option:selected').html());
$('#Color-input2').css('background-color',$('#Color2 option:selected').html());
$('#Color-input3').css('background-color',$('#Color3 option:selected').html());
$('#Color-input4').css('background-color',$('#Color4 option:selected').html());
$('#Color-input5').css('background-color',$('#Color5 option:selected').html());

//reinitialize the guess button back to enabled
$('#Check').attr('disabled',false);


// choose a pattern of 5 characters from 8 colors

function makecode(){

	var text = "";
	// colors are : Red Green Black White Pink Orange bLue and Yellow
	
	var possible = "RGBWPOLY";
	var how_many_colors=5;
	
	for( var i=0; i < how_many_colors; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;	
}

//set matching color on circles when the option is changed 
 $('#Color1').change(function() {
               
	$('#Color-input1').css('background-color',$('#Color1 option:selected').html());
	
});
//set matching color on circles when the option is changed 
$('#Color2').change(function() {
               
	$('#Color-input2').css('background-color',$('#Color2  option:selected').html());
	
});
//set matching color on circles when the option is changed 
$('#Color3').change(function() {
               
	$('#Color-input3').css('background-color',$('#Color3  option:selected').html());
	
});
//set matching color on circles when the option is changed 
$('#Color4').change(function() {
               
	$('#Color-input4').css('background-color',$('#Color4  option:selected').html());
	
});
//set matching color on circles when the option is changed 
$('#Color5').change(function() {
               
	$('#Color-input5').css('background-color',$('#Color5  option:selected').html());
	
});


//When Check button is clicked  
$('#Check').click(function() {
	// how many times guessed so far 
	game_count++;
	
	// what colors are selected
	text_new = $('#Color1').val()+$('#Color2').val()+$('#Color3').val()+$('#Color4').val()+$('#Color5').val();
	
	// where is the location of the matches 
	positions_matched='';
	
	
	var guess = text_new;
	var guess_array = guess.split('');
	
	var games_left= 0;

	// build a pattern of Black, White and None (Grey) 
	for(i in guess_array) {
		var letter1 = guess_array[i];
		var letter2 = random_word_array[i];

	
		
		if(letter1 == letter2) {
		//	match_count++;

			// find where it matches 
			// It is Black meaning it is a match						
			positions_matched = positions_matched + 'B';
		}
		else if($.inArray(letter1,random_word_array)>-1) {
			// It is white meaning it is a match but not in the correct location
			positions_matched = positions_matched + 'W';

		}
		else {
			// It is Not a match
			positions_matched = positions_matched + 'N';	
		}
	
	} //close for loop that builds matching Black, White and Grey 
	
	// Guessed what the pattern is then Say You are the Mastermind and disable the Check button
	if(guess == random_word) {
		//game finished , disable guess button 
		$('#input2').prepend('<div>You are the Super Master Mind! Click on New Game to play again. </div><br><br>');
		$('#Check').attr('disabled',true);
	}
	
	// how many guesses/games left and show it for each time player clicks on Check!
	games_left=12- game_count;
	
	$('#output').prepend('You have ' + games_left + ' guesses left' +makedisplay()+'<BR><BR>');
	
	//disable guess button if there is no games left

	if(games_left==0)
		$('#Check').attr('disabled',true);

});


// build the response from the guess and the matches using makediv function

function makedisplay(){
	var display="";
	var displaymatch="";

	displaymatch=positions_matched;
	display=text_new;	

	var display_array = display.split('');
	var match_array = displaymatch.split('');   

  
	return "<div>"+makediv('colors',display_array)+makediv('match',match_array)+"</div><br>";	
}
// make divs for displaying results in divs with colors

function makediv(d_class,d_array){

var display='',displaycolor='';

for(i in d_array) {
    	displaycolor='blue';
    	
    	
    	switch (d_array[i]) {
    		case 'R':
    		displaycolor='red';
    		break;
    		
    		case 'G':
    		displaycolor='green';
    		break;

    		case 'B':
    		displaycolor='black';
    		break;

    		case 'W':
    		displaycolor='white';
    		break;

    		case 'P':
    		displaycolor='pink';
    		break;

    		case 'O':
    		displaycolor='orange';
    		break;

    		case 'L':
    		displaycolor='blue';
    		break;

    		case 'Y':
    		displaycolor='yellow';
    		break;

			case 'N':
    		displaycolor='none';
    		break;

    	}
	
    display= display + '<div class='+ d_class +' id='+ displaycolor +'></div>';
      
	}

return display;	
}
//reset game

$('#newgame').click(function(){
	location.reload();
});


