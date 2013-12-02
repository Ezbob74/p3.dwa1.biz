
		var random_word = makecode();
		var text_new="";
		
		var random_word_array = random_word.split('');
		var game_count = 0;
		var positions_matched;

		//show in the console what is the color combination

		console.log("Secret Code:" + random_word_array);
		
		//initialize the colors

		$('#Colo1').css('background-color',$('#Color1 option:selected').html());
		$('#Colo2').css('background-color',$('#Color2 option:selected').html());
		$('#Colo3').css('background-color',$('#Color3 option:selected').html());
		$('#Colo4').css('background-color',$('#Color4 option:selected').html());
		$('#Colo5').css('background-color',$('#Color5 option:selected').html());
		$('#guess').attr('disabled',false);

		 $('#Color1').change(function() {
                       
			$('#Colo1').css('background-color',$('#Color1 option:selected').html());
			
		});

		$('#Color2').change(function() {
                       
			$('#Colo2').css('background-color',$('#Color2  option:selected').html());
			
		});
		
		$('#Color3').change(function() {
                       
			$('#Colo3').css('background-color',$('#Color3  option:selected').html());
			
		});

		$('#Color4').change(function() {
                       
			$('#Colo4').css('background-color',$('#Color4  option:selected').html());
			
		});

		$('#Color5').change(function() {
                       
			$('#Colo5').css('background-color',$('#Color5  option:selected').html());
			
		});




		$('#guess').click(function() {
			game_count++;
			
			text_new = $('#Color1').val()+$('#Color2').val()+$('#Color3').val()+$('#Color4').val()+$('#Color5').val();
			
			positions_matched='';
			
			
			var guess = text_new;
			var guess_array = guess.split('');
			
			var games_left= 0;

			for(i in guess_array) {
				var letter1 = guess_array[i];
				var letter2 = random_word_array[i];

			
				
				if(letter1 == letter2) {
				//	match_count++;

					// find where it matches 
					console.log(i);
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
			
			if(guess == random_word) {
				//game finished , disable guess button 
				$('#input2').prepend('You are the MasterMind! <br>');
				$('#guess').attr('disabled',true);
			}
			
			
			games_left=12- game_count;
			
			$('#output').prepend('You have ' + games_left + ' guesses left' +makedisplay()+'<BR><BR>');
			
			//disable guess button if there is no games left

			if(games_left==0)
				$('#guess').attr('disabled',true);

		});

// choose a pattern of 5 codes from 8 colors

	function makecode()
	
	{
    var text = "";
    // colors are : Red Green Black White Pink Orange bLue and Yellow
    var possible = "RGBWPOLY";
	var how_many_colors=5;
    for( var i=0; i < how_many_colors; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;	
	}
// build the response from the guess and the matches

	function makedisplay()

	{
	var display="";
	var displaymatch="";

	displaymatch=positions_matched;
	display=text_new;	
    
    var display_array = display.split('');
    var match_array = displaymatch.split('');   

            

	return "<div>"+makediv('colors',display_array)+makediv('match',match_array)+"</div><br><br>";	
	}
// make divs for displaying results in divs with colors

	function makediv(d_class,d_array){
		
		var display='',displaycolor='';

		for(i in d_array) {
            	displaycolor='blue';
            	//console.log(display_array[i]);
            	
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


