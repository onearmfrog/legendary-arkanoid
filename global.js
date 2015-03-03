// Globals

var canvas = document.querySelector("#test-canvas1"),
context = canvas.getContext("2d");

var CANVASWIDTH = 375,
	CANVASHEIGHT = 500;

var blockWidth = 30,
	blockHeight = 20,
	blockPosX = blockWidth,
	blockPosY = 20;
	
var pad,
	padWidth = 100,
	padHeight = 20, 
	padVelocity = 6,
	padPosX = (CANVASWIDTH / 2) - padWidth / 2,
	padPosY = CANVASHEIGHT - padHeight;
	
var ball,
	ballWidth = 5,
	ballHeight = 5,
	ballPosX = (CANVASWIDTH / 2) - ballWidth / 2,
	ballPosY = CANVASHEIGHT - padHeight - ballHeight - 1,
	ballVelocity = 4,
	MAXBOUNCEANGLE = Math.PI / 12,
	ballIsMoving = false;
	
var colorMap = {
				"g": "#4CAF50",
				"lg": "#8BC34A",
				"r": "#F44336",
				"gr": "#212121",
				"b": "#607D8B",
				"lgr": "EEEEEE"
	};