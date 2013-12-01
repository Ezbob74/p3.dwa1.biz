
		//var how_many_words = words.length;
		//var how_many_colors=5;
		//var random_number  = Math.floor((Math.random()*how_many_colors)+0);
		var random_word = makecode();
		//var random_word    = words[random_number];
		var text_new="";
		var random_word_array = random_word.split('');
		
		var positions_matched;

		console.log("Secret Code:" + random_word_array);
		
		$('button').click(function() {
			text_new = $('#Color1').val()+$('#Color2').val()+$('#Color3').val()+$('#Color4').val()+$('#Color5').val();
			console.log(text_new);
			positions_matched='';
			var match_count = 0;
			//var guess = $('#guess').val();
			//var guess_array = guess.split('');
			var guess = text_new;
			var guess_array = guess.split('');
			
			

			for(i in guess_array) {
				var letter = guess_array[i];
				
				var position = $.inArray(letter,random_word_array);
				
				if(position >= 0) {
				//	match_count++;

					// find where it matches 
			//		var positions = position + 1;

			//		positions_matched = positions_matched + positions;
				}
			
			}
			
			for(i in guess_array) {
				var letter1 = guess_array[i];
				var letter2 = random_word_array[i];

			//	var position = $.inArray(letter,random_word_array);
				
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
			
			}
			
			if(guess == random_word) {
				$('#output').prepend('You guessed the word!' + random_word + '<br>');
			}
			
			//$('#output').prepend(guess + ':' + match_count + ':' + positions_matched + '<br>');
			//console.log(match_count);
			$('#output').prepend(makedisplay()+'<br><br>');
			
		});

// choose a pattern of 5 codes from 8 colors
	function makecode()
	
	{
    var text = "";
    var possible = "RGBWPOLY";
	var how_many_colors=5;
    for( var i=0; i < how_many_colors; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;	
	}

	function makedisplay()

	{
	var display="";
	var displaymatch="";

	displaymatch=positions_matched;
	display=text_new;	
    
    var display_array = display.split('');
    var match_array = displaymatch.split('');   

            for(i in display_array) {
            	displaycolor='blue';
            	console.log(display_array[i]);
            	
            	switch (display_array[i]) {
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
            	}
			
	



            display= display + '<div class="colors" id='+ displaycolor +'></div>';
              
			}


				for(i in match_array) {
            	matchcolor='blue';
            	console.log(match_array[i]);
            	
            	switch (match_array[i]) {
            		case 'B':
            		matchcolor='black';
            		break;
            		
            		case 'W':
            		matchcolor='white';
            		break;

            		case 'N':
            		matchcolor='none';
            		break;

           		
            	}
			
			   displaymatch= displaymatch + '<div class="match" id='+ matchcolor +'></div>';
              
			}
	
	return "<div>"+display+displaymatch+"</div>";	
	}
