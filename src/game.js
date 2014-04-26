var Game = (function () {

	var start = function() {
		Crafty.init(1200, 600);
		Crafty.background('green');

		var digMap = map.createMap(600, 600);
		var geoMap = map.createMap(600, 600);
	};

	return { start: start }
}());