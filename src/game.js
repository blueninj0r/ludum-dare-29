var Game = (function () {
	var gameMap;

	var start = function() {
		Crafty.init(1200, 700);
		Crafty.background('green');

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

	return { start: start };
}());