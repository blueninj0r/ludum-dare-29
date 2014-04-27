(function () {

	// The Grid component allows an element to be located
	//  on a grid of tiles
	Crafty.c('Grid', {
		init: function () {
		},

		onGrid: function (grid){
			this.attr({
				w: grid.blockWidth,
				h: grid.blockHeight,
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

	// A canvas component that can be drawn on a grid
	Crafty.c('Actor', {
		init: function () {
			this.requires('2D, Canvas, Grid, Color');
		}
	});

	Crafty.c('Fence', {
		init: function () {
			this.requires('Actor, Solid');
			this.color('rgb(198, 125, 42)');
		}
	});

	Crafty.c('Player', {
		init: function () {
			this.requires('Actor, Fourway, Collision');
			this.color('red');
			this.fourway(1);
			this.stopOnSolids();
			this.updateScoreOnArtefact();
			this.updateBatteryOnMoved();
			this.attr({score: 0, battery: 100, distance:0});
		},
		stopOnSolids: function () {
			this.onHit('Solid', this.stopMovement);
		},
		stopMovement: function () {
			this._speed = 0;
			if (this._movement) { 
				this.x -= this._movement.x;
				this.y -= this._movement.y;
			}
		},
		updateScoreOnArtefact : function ()
		 {
		 	this.bind("Scanned", this.incScore);
		 },

		 incScore : function () {
		 	this.score++;
		 	Crafty.trigger("IncScore", this.score);
		 },

		 updateBatteryOnMoved : function () {
		 	this.bind("Moved", this.decBattery);
		 },

		 decBattery : function () {
		 	this.distance++;
		 	var diff = (this.distance / 5000) * 100;
		 	this.battery = 100 - diff;;
		 	Crafty.trigger("DecBattery", this.battery);

		 	if (this.battery == 0){
		 		Crafty.trigger("FlatBattery");
		 	}
		 }
	});

	Crafty.c('Artefact', {
		init: function () {
			this.requires('2D, Grid, Canvas, Collision');
			this.registerOnHit();
		},

		registerOnHit : function () {
			this.onHit('Player', this.scan);
		},

		scan : function() {
			this.unbind('EnterFrame'); 
			this.addComponent('Color'); 
			this.color('blue');
			Crafty.trigger("Scanned");
		}
	});

	Crafty.c('Scanned');
}());