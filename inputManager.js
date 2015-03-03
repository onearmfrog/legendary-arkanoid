function InputManager(){
  this.listen();
}

InputManager.prototype = {
	listen: function () {

	  var events = {
		racketmove: "racketmove",
		ballmove: "ballmove"
	  };

	  var map = {
		39: "right", // Right
		37: "left", // Left
		83: "right", // S
		65: "left",  // A,
		32: "spacebar" // Spacebar
	  };

	  // Respond to direction keys
	  document.addEventListener("keydown", function (event) {
		var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
						event.shiftKey;
		var mapped    = map[event.which];

		if (!modifiers) {
			event.preventDefault();
			if (mapped === "left" || mapped === "right") {
				events.racketmove = new CustomEvent("racketmove", {"detail":mapped});
				document.dispatchEvent(events.racketmove);
			}
			if (mapped === "spacebar"){
				events.ballmove = new CustomEvent("ballmove", {"detail":mapped});
				document.dispatchEvent(events.ballmove);
			}
		}
	  });
	}
}