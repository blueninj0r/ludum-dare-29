var Game = (function () {

	var start = function() {
		Crafty.init(1200, 600);
		Crafty.background('green');
	};

	return { start: start }
}());