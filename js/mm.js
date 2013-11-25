
		//var how_many_words = words.length;
		//var how_many_colors=5;
		//var random_number  = Math.floor((Math.random()*how_many_colors)+0);
		var random_word = makecode();
		//var random_word    = words[random_number];
		
		var random_word_array = random_word.split('');
		
		console.log("Secret Code:" + random_word_array);
		
		$('button').click(function() {
			var text_new = $('#Color1').val()+$('#Color2').val()+$('#Color3').val()+$('#Color4').val()+$('#Color5').val();
			console.log(text_new);

			var match_count = 0;
			//var guess = $('#guess').val();
			//var guess_array = guess.split('');
			var guess = text_new;
			var guess_array = guess.split('');
			
			var positions_matched='';

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
					
					positions_matched = positions_matched + 'BLACK';
				}
				else if($.inArray(letter1,random_word_array)>-1) {
					
					positions_matched = positions_matched + 'WHITE';

				}
				else {
					positions_matched = positions_matched + '-----';	

				}
			
			}
			
			if(guess == random_word) {
				$('#output').prepend('You guessed the word!' + random_word + '<br>');
			}
			$('#output').prepend(guess + ':' + match_count + ':' + positions_matched + '<br>');
			//console.log(match_count);
			
			
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