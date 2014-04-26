(function () {

	// The Grid component allows an element to be located
	//  on a grid of tiles
	Crafty.c('Grid', {
		init: function () {
		},

		onMap: function (map){
			this.attr({
				w: map.blockWidth,
				h: map.blockHeight,
			});
			return this;
		},

		// Locate this entity at the given position on the grid
		at: function(x, y) {
			if (x === undefined && y === undefined) {
				return { x: this.x/this.w, y: this.y/this.h };
			} else {
				this.attr({ x: x * this.w, y: y * this.h });
				return this;
			}
		}
	});
}());