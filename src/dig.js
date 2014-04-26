var dig = (function () {

	Crafty.c('Fence', {
		init: function () {
			this.requires('Actor, Solid');
			this.color('rgb(198, 125, 42)');
		}
	});


	var hideArtefacts = function (grid) {
		var i, j;
		for (i = 0; i < grid.gridWidth; i++){
			for (j = 0; j < grid.gridHeight; j++){
				var rand = Math.random();
				if (rand < 0.1) {
					Crafty.e('Artefact, Collision').onGrid(grid).at(i, j);
				}
			}				
		}
	}

	var createDigMap = function (grid) {
		var i, j;
		for (i = 0; i < grid.gridWidth; i++){
			for (j = 0; j < grid.gridHeight; j++){
				if (grid.isEdgeCoord(i, j)){
					Crafty.e('Fence').onGrid(grid).at(i, j);
				}				
			}
		}
		hideArtefacts(grid);
	};


	return {createDigMap: createDigMap};
}());