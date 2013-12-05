<!DOCTYPE html>

<html>

<head>
	<TITLE>Super Mastermind Game</TITLE>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="css/style.css" type="text/css">
</head>

<body>

<div id="header">Super Mastermind Game
</div>

<!-- Show navigation-->           
<div id="top">
    <a class="nav-link" href='/'>Back to Game</a>
</div>
<div   id='center'>

	<div>	<!--Display Color options-->
		<h1>Instructions</h1>
		<ul>
		  <li>This game is called Super Mastermind (a.k.a. Deluxe Mastermind; a.k.a. Advanced Mastermind) version of the game Mastermind. 5 holes. 8 colors.</li>
		  <li> The computer picks a sequence of 5 colors from 8 possible colors. </li>
		  <li>The objective of the game is to guess the exact positions of the colors in the computer's sequence.</li>
		  <li> Any color can be used any number of times in the code sequence.</li>
		  <li>After filling a line with your guesses and clicking on the ‘Check' button, the computer responses with the result of your guess.</li>
		  <li>For each color in your guess that is in the correct color and correct position in the code sequence, the computer displays a small Black circle on the right side of the current guess (corresponding to the big box on the left).</li>
		  <li>For each color in your guess that is in the correct color but is NOT in the correct position in the code sequence, the computer displays a small white circle on the right side of the current guess. </li>
		  <li>For each color in your guess that is NOT in the correct color and is NOT in the correct position in the code sequence, the computer display a small grey circle on the right side of the current guess.</li>
		  <li>You win the game when you manage to guess all the colors in the code sequence and when they are all in the right positions.</li>
		  <li>You lose the game if you use all 12 attempts without guessing the computer code sequence.</li>
		  <li>Keep in mind that a color can be picked more than once so small white circles can be misleading as you might have already chosen the same color in the correct position in your current guess.</li>
		</ul>
		
		<h1>How to play the game</h1>
		<ul>
		  <li>You must first select 5 colors from 8 colors available at the top of the page. The first row of colored circles show what colors are currently selected.</li>
		  <li>Once you're satisfied with your guess, just click on the 'Check' button and get the computer response of white, black and grey as described above. </li>
		  <li>These small circles to the right of your current guess show if the selected color is in the computer pick, if it matches the color and position, or if it is not at all in the color code sequence selected by the computer. </li>
		  <li>Start a new game by clicking on the 'New Game' button. </li>
		</ul> 
	</div>
	<a class="nav-link" target='_blank' href='http://en.wikipedia.org/wiki/Mastermind_%28board_game%29'>Click here to see the wikipedia page for this game</a>

</div>
<!--Display footer-->
<div id="footer">Project 3 :: Dynamic Web Applications :: Harvard Extension School ::  Babak Mansouri
    
</div>


</body>
</html>



