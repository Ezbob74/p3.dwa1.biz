
		var random_word = makecode();
		var text_new="";
		
		var random_word_array = random_word.split('');
		
		var positions_matched;

		//show in the console what is the color combination

		console.log("Secret Code:" + random_word_array);
		
		//initialize the colors

		$('#Colo1').css('background-color',$('#Color1 option:selected').html());
		$('#Colo2').css('background-color',$('#Color2 option:selected').html());
		$('#Colo3').css('background-color',$('#Color3 option:selected').html());
		$('#Colo4').css('background-color',$('#Color4 option:selected').html());
		$('#Colo5').css('background-color',$('#Color5 option:selected').html());


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
				$('#input2').prepend('You are the MasterMind! <br>');
			}
			
			//$('#output').prepend(guess + ':' + match_count + ':' + positions_matched + '<br>');
			//console.log(match_count);
			$('#output').prepend(makedisplay()+'<BR><BR>');
			
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

            

	return "<div>"+makediv('colors',display_array)+makediv('match',match_array)+"</div><br><br>";	
	}

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

