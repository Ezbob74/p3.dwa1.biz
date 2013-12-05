<!DOCTYPE html>

<html>

<head>

	<TITLE>Mastermind Game</TITLE>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/features.css" type="text/css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<link rel="stylesheet" href="css/sample-apps.css" type="text/css">
</head>

<body>

<div id="header">Mastermind Game
    </div>
<div   id='center'>
	<div>	<!--Display Color options-->
		<BR>
		Color 1:
		<select id='Color1'>
			<option value='R'>Red</option>
			<option value='G'>Green</option>
			<option value='B'>Black</option>
			<option value='W'>White</option>
			<option value='P'>Pink</option>
			<option value='O'>Orange</option>
			<option value='L'>Blue</option>
			<option value='Y'>Yellow</option>
		</select>
		Color 2:
		<select id='Color2'>
			<option value='R'>Red</option>
			<option value='G'>Green</option>
			<option value='B'>Black</option>
			<option value='W'>White</option>
			<option value='P'>Pink</option>
			<option value='O'>Orange</option>
			<option value='L'>Blue</option>
			<option value='Y'>Yellow</option>
		</select>
		Color 3:
		<select id='Color3'>
			<option value='R'>Red</option>
			<option value='G'>Green</option>
			<option value='B'>Black</option>
			<option value='W'>White</option>
			<option value='P'>Pink</option>
			<option value='O'>Orange</option>
			<option value='L'>Blue</option>
			<option value='Y'>Yellow</option>
		</select>
		Color 4:
		<select id='Color4'>
			<option value='R'>Red</option>
			<option value='G'>Green</option>
			<option value='B'>Black</option>
			<option value='W'>White</option>
			<option value='P'>Pink</option>
			<option value='O'>Orange</option>
			<option value='L'>Blue</option>
			<option value='Y'>Yellow</option>
		</select>
		Color 5:
		<select id='Color5'>
			<option value='R'>Red</option>
			<option value='G'>Green</option>
			<option value='B'>Black</option>
			<option value='W'>White</option>
			<option value='P'>Pink</option>
			<option value='O'>Orange</option>
			<option value='L'>Blue</option>
			<option value='Y'>Yellow</option>
		</select>
		
		<button id='guess'>Check!</button>
		<button id='newgame'>New Game</button>

	</div>
	<BR><BR>

	<div id='input2'>
		<div class='colors' id='Color-input1'></div>
		<div class='colors' id='Color-input2'></div>
		<div class='colors' id='Color-input3'></div>
		<div class='colors' id='Color-input4'></div>
		<div class='colors' id='Color-input5'></div>
	</div>

	<BR><BR><BR><BR>

	<div id='output'></div>

	<script type="text/javascript" src="js/mm.js"></script>
</div>
<!--Display footer-->
<div id="footer">Project 3 :: Dynamic Web Applications :: Harvard Extension School ::  Babak Mansouri
    
</div>


</body>
</html>



