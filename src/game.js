var Game = (function () {
	var gameMap;
	var finalScore;

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
			.text("Remaining Power: 0")
			.attr({x: 20, y: Crafty.viewport.height - 75, w: 200, h:50})
			.css({color: "#fff"})
			.textFont({size: "large"})
			.bind("DecBattery", function (power) { this.text("Remaining Power: " + Math.round(power));});
	};

	var start = function() {
		Crafty.init(1200, 700);
		Crafty.background('green');

		Crafty.scene("Main", function () {
			setupMainScene();
		});

		Crafty.scene("Finish", function () {
			var scoreText = "Your final score was " + finalScore + ".";
			var messageText = "This is great. You've managed to locate enough dig sites to fill a whole episode of Time Team!";

			if (finalScore < 20){
				messageText = "Unfortunately, this is not enough dig sites for an entire episode. Tony will be forced to fill the episode with ribald anecdotes."
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
		Crafty.scene("Main");
	};

	return { start: start };
}());