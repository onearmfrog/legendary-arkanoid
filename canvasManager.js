function CanvasManager(){

}

CanvasManager.prototype = {
	draw: function(drawObj){
		context.beginPath();
		context.fillStyle = drawObj.color;		
		context.fillRect(drawObj.x, drawObj.y, drawObj.width, drawObj.height);
	},
	update: function(updateobj){
		updateobj.prevX = updateobj.prevX || updateobj.x;
		updateobj.prevY = updateobj.prevY || updateobj.y;
		
		context.clearRect(updateobj.prevX, updateobj.prevY, updateobj.width, updateobj.height);
		context.fillStyle = updateobj.color;
		context.fillRect(updateobj.x, updateobj.y, updateobj.width, updateobj.height);
	},
	remove: function(removeobj){
		context.clearRect(removeobj.x, removeobj.y, removeobj.width, removeobj.height);		
	}
}