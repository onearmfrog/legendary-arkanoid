function Block(blockobj){
	var blockobj = blockobj || {};
	this.x = blockobj.x || this.blockWidth;
	this.y = blockobj.y || this.blockHeight;
	this.color = colorMap.r;
	this.width = 30;
	this.height = 20;
};