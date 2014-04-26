var grid = (function () {
	var gridWidth;
	var gridHeight;
	var blockHeight;
	var blockWidth; 

	var width = function () {
		return gridWidth * blockWidth;
	};

	var height = function () {
		return gridHeight * blockHeight;
	};

	var isEdgeCoord = function (x, y) {
		return x === 0
			|| y === 0
			|| x === (gridWidth - 1) 
			|| y === (gridHeight - 1);
	};

	var createGrid = function (w, h) {
		blockHeight = 20;
		blockWidth = 20;
		gridWidth = w/blockWidth;
		gridHeight = h/blockHeight;

		return {
			width: width,
			height: height,
			isEdgeCoord: isEdgeCoord,
			blockWidth: blockWidth,
			blockHeight: blockHeight,
			gridWidth: gridWidth,
			gridHeight: gridHeight
		};
	};

	return {
		createGrid : createGrid
	};	
}());