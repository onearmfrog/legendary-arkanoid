function Racket(){
	this.width = 100;
	this.height = 20;
	this.x = padPosX;
	this.y = padPosY;
};

Racket.prototype = {
	move: function(direction){
		var animate = new CanvasManager(),
		prevX;
		
		if (padPosX != CANVASWIDTH || padPosX != 0){
			if (direction == "right"){
				prevX = padPosX;
				padPosX += padVelocity;
				this.x = padPosX;
			}
			if (direction == "left"){
				prevX = padPosX;
				padPosX -= padVelocity;
				this.x = padPosX;
			}
			animate.update({x: padPosX, y: padPosY, width: padWidth, height: padHeight, color: colorMap.b, prevX: prevX});
		}
	},
}