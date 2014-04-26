var dig = (function () {

	Crafty.c('Fence', {
		init: function () {
			this.requires('Actor, Solid');
			this.color('rgb(198, 125, 42)');
		}
	});

	var createDigMap = function (grid) {
		var i, j;
		for (i = 0; i < grid.gridWidth; i++){
			for (j = 0; j < grid.gridHeight; j++){
				if (grid.isEdgeCoord(i, j) || i == (grid.gridWidth / 2 - 1)  || i == (grid.gridWidth / 2)){
					Crafty.e('Fence').onGrid(grid).at(i, j);
				}				
			}
		}
	};

	return {createDigMap: createDigMap};
}());