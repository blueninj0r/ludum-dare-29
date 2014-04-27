var Game = (function () {
	var gameMap;
	var finalScore;

	var setupStartScreen = function () {
		var welcomeText = "Welcome to the dig! It's the first day of filming for Time Team and it's time to do the geophysics survey that'll decide where everyone is going to dig this week.";
		var instructionText = "Using the WASD or arrow keys, scan as much of the field as possible before the battery on your ground penetrating radar runs out.";
		var warningText = "Be warned. If there's not enough digging to fill an episode, the people at home will be subjected to Tony Robinson's dodgy tales from the set of Blackadder.";
		var textPos = 0;
		var text = [welcomeText, instructionText, warningText];

		Crafty.e("WelcomeText")
			.attr({y: Crafty.viewport.height * .2})
			.text(welcomeText);

		Crafty.e("WelcomeText")
			.attr({y: Crafty.viewport.height * .4})
			.text(instructionText);
			

		Crafty.e("WelcomeText")
			.attr({y: Crafty.viewport.height * .6})
			.text(warningText);

		Crafty.e("WelcomeText")
			.attr({y: Crafty.viewport.height * .8})
			.text("Press any key to continue.")
			.bind("KeyDown", function () { Crafty.scene("Main");});
	}

	var setupMainScene = function () {
		var gameGrid = grid.createGrid(1200, 600);
		var digMap = dig.createDigMap(gameGrid);

		var player = Crafty.e('Player').onGrid(gameGrid)
			.at(gameGrid.gridWidth/2, gameGrid.gridHeight/2);

		var score = Crafty.e("2D, DOM, Text")
			.text("Score: 0")
			.attr({x: 20, y: Crafty.viewport.height - 50, w: 200, h:50})
			.css({color: "#fff"})
			.textFont({size: "large"})
			.bind("IncScore", function (score) { this.text("Score: " + score);});		

		var battery = Crafty.e("2D, DOM, Text")
			.text("Remaining Power: 100")
			.attr({x: 20, y: Crafty.viewport.height - 75, w: 200, h:50})
			.css({color: "#fff"})
			.textFont({size: "large"})
			.bind("DecBattery", function (power) { this.text("Remaining Power: " + Math.round(power));});
	};

	var start = function() {
		Crafty.init(1200, 700);
		Crafty.background('green');

		Crafty.scene("Start", function () {
			setupStartScreen();
		});

		Crafty.scene("Main", function () {
			setupMainScene();
		});

		Crafty.scene("Finish", function () {
			var scoreText = "Your final score was " + finalScore + ".";
			var messageText = "This is great. You've managed to locate enough dig sites to fill a whole episode of Time Team!";

			if (finalScore < 20){
				messageText = "Unfortunately, this is not enough for an entire episode. Archaeology is a cruel mistress; Tony will be forced to fill the episode with ribald anecdotes."
			}

			scoreText = scoreText + " " + messageText;

			var score = Crafty.e("2D, DOM, Text")
				.text(scoreText)
				.attr({x: 300, y: Crafty.viewport.height/2, w: 600, h:300})
				.css({color: "#fff"})
				.textFont({size: "large"})
		});

		Crafty.bind("FlatBattery", function (score) {
			finalScore = score;
			Crafty.scene("Finish");});
		
		Crafty.scene("Start");
	};

	return { start: start };
}());