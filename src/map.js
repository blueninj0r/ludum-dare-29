var map = (function () {
	var gridWidth;
	var gridHeight;
	var blockHeight;
	var blockWidth; 
	var originX;
	var originY;

	var width = function () {
		return gridWidth * blockWidth;
	};

	var height = function () {
		return gridHeight * blockHeight;
	};

	var isEdgeCoord = function (x, y) {
		return x === (0 + originX) 
			|| y === (0 + originY) 
			|| x === (originaX + gridWidth - 1) 
			|| y === (originY + gridHeight - 1);
	};

	var createMap = function (w, h, oX, oY) {
		blockHeight = 20;
		blockWidth = 20;
		gridWidth = w;
		gridHeight = h;
		originX =oX;
		originY = oY;

		return {
			width: width,
			height: height,
			isEdgeCoord: isEdgeCoord,
			blockWidth: blockWidth,
			blockHeight: blockHeight,
			gridWidth: gridWidth,
			gridHeight: gridHeights
		};
	};

	return {
		createMap : createMap
	};	
}());