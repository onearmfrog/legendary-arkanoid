function HTMLHandler(){
	this.gameParent = document.querySelector("#arkanoid-game");
	this.blockContainer = document.querySelector("#block-container");
	this.scoreContainer = document.querySelector("#score-container");
	this.playerStatus = document.querySelector("#player-status");
}

HTMLHandler.prototype = {
	addBlock: function(blockobj){
		var block = document.createElement("div");
		block.id = "block-" + blockobj.no;
		block.className = blockobj.color;
		block.style.left = blockobj.x;
		block.style.top = blockobj.y;
		this.blockContainer.appendChild(block);
	},
	addRacket: function(racketobj){
		var racket = document.createElement("div");
		racket.id = "racket";
		racket.style.left = racketobj.x;
		racket.style.top = racketobj.y;
		this.gameParent.appendChild(racket);
	},
	addBall: function(ballobj){
		var ball = document.createElement("div");
		ball.id = "ball";
		ball.style.left = ballobj.x;
		ball.style.top = ballobj.y;
		this.gameParent.addChild(ball);
	}
}