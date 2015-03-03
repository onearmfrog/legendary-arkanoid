function Ball(ballobj){
	var ballobj = ballobj || {};
	this.x = ballobj.x || ballPosX;
	this.y = ballobj.y || ballPosY;
	this.vx = 0;
	this.vy = 0;
	this.width = 5;
	this.height = 5;
	this.color = colorMap.r;
}
	
Ball.prototype = {

	move: function(moveobj){
		var animate = new CanvasManager(),
		ballPrevX;
		
		if (!ballIsMoving && moveobj && moveobj.sticky){
			ballPrevX = ballPosX;
			ballPosX = (moveobj.direction == "left") ? ballPosX - padVelocity : ballPosX + padVelocity;
			this.x = ballPosX;
			animate.update({x: ballPosX, y: ballPosY, width: ballWidth, height: ballHeight, prevX: ballPrevX, color: colorMap.r});
		}
		if (moveobj && moveobj.fireFromPad){
			this.ballInterval = window.setInterval(function(){
				ballIsMoving = true;
				ballPrevY = ballPosY;
				ballPosY -= ballVelocity;
				this.y = ballPosY;
				this.ballismoving = new CustomEvent("ballismoving", {"detail": {"positionX": this.ballPosX, "positionY": this.ballPosY}});
				document.dispatchEvent(this.ballismoving);
				animate.update({x: ballPosX, y: ballPosY, width: ballWidth, height: ballHeight, prevY: ballPrevY, color: colorMap.r});
			}.bind(this), 16.666666666666668);				
		}
		if (!moveobj && !moveobj.sticky){
			this.ballInterval = window.setInterval(function(){
				this.ballismoving = new CustomEvent("ballismoving", {"detail": {"positionX": this.ballPosX, "positionY": this.ballPosY}});
				document.dispatchEvent(this.ballismoving);
				animate.update({x: ballPosX, y: ballPosY, width: ballWidth, height: ballHeight, prevX: ballPrevX, color: colorMap.r});
			}.bind(this), 16.666666666666668);		
		}
	},

	stopMoving: function(){
		window.clearInterval(this.ballInterval);
		console.log("ball animation stopped!");
	},

	updatePosition: function(){
		this.positionY--;
		this.ball.style.top = this.positionY + "px";
	},
}	