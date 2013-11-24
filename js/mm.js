	var words = Array(
			'apple',
			'grape',
			'crypt',
			'death',
			'puppy',
			'light'
		);
		
		//var how_many_words = words.length;
		var how_many_words=5;
		var random_number  = Math.floor((Math.random()*how_many_words)+0);
		var random_word = makecode();
		//var random_word    = words[random_number];
		
		var random_word_array = random_word.split('');
		
		console.log("Computer's word:" + random_word_array);
		
		$('button').click(function() {
			
			var match_count = 0;
			var guess = $('#guess').val();
			var guess_array = guess.split('');
			
			for(i in guess_array) {
				var letter = guess_array[i];
				
				var position = $.inArray(letter,random_word_array);
				
				if(position >= 0) {
					match_count++;
				}
			
			}
			
			if(guess == random_word) {
				$('#output').prepend('You guessed the word!' + random_word + '<br>');
			}
			$('#output').prepend(guess + ':' + match_count + '<br>');
			//console.log(match_count);
			
			
		});

// choose a pattern of 5 codes from 8 colors
	function makecode()
	
	{
    var text = "";
    var possible = "rgbwpoly";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;	
	}