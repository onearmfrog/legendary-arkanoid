function Arkanoid(){
	
	this.level = 1;
	this.balls = 1;
	this.gameRunning = true;
	this.lives = 3;
	this.blockmap = [];

	this.inputManager = new InputManager();
	this.levelManager = new LevelManager();
	this.canvasManager = new CanvasManager();
	
	this.eventListener();
	this.setup();
}

Arkanoid.prototype = {
	setup: function(){
		this.addInitialBlocks();
		this.addBall();
		this.addRacket();
	},
	
	addInitialBlocks: function(){
		var level1 = this.levelManager.levels.level1,
		block,
		blockPosX = blockWidth,
		blockPosY = 20;
		
		for (var i = 0; i < level1.length; i++){
			for (var j = 0; j < level1[i].length; j++){
					if (level1[i][j] != 0){
						block = new Block({x: blockPosX, y: blockPosY});
						this.addToBlockmap(block);
						block.color = level1[i][j];
						this.canvasManager.draw({x: blockPosX, y: blockPosY, color: block.color, width: block.width, height: block.height});
					}
					blockPosX = blockPosX + 35;
					if (j === level1[i].length - 1){
						blockPosY = blockPosY + 35;
						blockPosX = block.width;
					}
			};
		}
	},
				
	addRacket: function(){
		pad = new Racket();
		this.canvasManager.draw({x: padPosX, y: padPosY, height: padHeight, width: padWidth, color: colorMap.b});
	},
	
	addBall: function(){
		ball = new Ball();
		this.canvasManager.draw({x: ballPosX, y: ballPosY, height: ballHeight, width: ballWidth, color: colorMap.r});
	},

	eventListener: function(){
		document.addEventListener("racketmove", this.moveRacket.bind(this));
		document.addEventListener("ballmove", this.fireBall.bind(this));
		document.addEventListener("ballismoving", this.checkCollision.bind(this));	
		document.addEventListener("removeblock", this.removeBlock.bind(this));	
	},

	removeBlock: function(event){
		var blockToRemove = event.detail.block;
		this.blockManager.removeFromMap(blockToRemove);
		this.blockContainer.removeChild(blockToRemove.block);
	},
	
	addToBlockmap: function(block){
		this.blockmap.push(block);
	},
	
	removeFromBlockmap: function(block){
		this.blockmap.slice(block, 1);
	},
	
	isColliding: function (a, b) {
		return !(
			((a.y + a.height) < (b.y)) ||
			(a.y > (b.y + b.height)) ||
			((a.x + a.width) < b.x) ||
			(a.x > (b.x + b.width)));
    },	
	
	parseBlocks: function(){
		this.blockmap.forEach(function(block, idx){
			if (this.isColliding(block, ball)){
				console.log("block collision");
			};
		}.bind(this));
	},

	padCollision: function(){
		var padMiddle = pad.width / 2,
		calcPadMiddle = padPosX + padMiddle,
		padLeft = padPosX,
		padRight = padPosX + pad.width,
		ballMiddle = ball.width / 2;

		if (ballPosX + ballMiddle === calcPadMiddle){
			ballVelocity *= -1;
			console.log("ball hit right in the middle!");

		}
		if (ballPosX < padMiddle && ballPosX > padLeft){
			console("ball hit on the left part!");
		}
	},
	
	checkCollision: function(event){

		// Wall collision - top/left/right
		if (ballPosY - ballHeight < 0 || ballPosX - ballWidth > CANVASWIDTH || ballPosX - ballWidth < 0 ){
			ballVelocity *= -1;
		}
		
		// Ball out of bounds
		if (ballPosY > CANVASHEIGHT){
			console.log("ball is out!");
			ball.stopMoving();
		}
		
		if (this.parseBlocks()){
			console.log("ZOMG! I HIT A BALL!!");
		}

		if (this.isColliding(ball, pad)){
			console.log("pad collision!");
			this.padCollision();
		}
	},
	
	moveRacket: function(event){
		var direction = event.detail;
		pad.move(direction);
		if (!ballIsMoving){
			ball.move({sticky: true, direction: direction});
		}
	},

	fireBall: function(event){
		if (!ballIsMoving){
			ball.move({fireFromPad: true});
		}
	}
}