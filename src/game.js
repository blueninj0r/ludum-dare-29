var Game = (function () {
	var gameMap;


	var start = function() {
		Crafty.init(1200, 600);
		Crafty.background('green');

		var gameGrid = grid.createGrid(1200, 600);
		var digMap = dig.createDigMap(gameGrid);

		var player = Crafty.e('Player').onGrid(gameGrid)
			.at(gameGrid.gridWidth/4, gameGrid.gridHeight/2);

	};

	return { start: start }
}());