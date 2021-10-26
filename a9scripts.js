var context;
var x= 0;
var y= 0;
var dx= 2;
var dy= 3;
var color = "black";
context= myCanvas.getContext('2d');

setInterval(draw,10);

function draw(){
	context.clearRect(0,0,400,400);
	context.beginPath();
	context.fillStyle=color;
	context.arc(x,y,10,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>400)
	dx=-dx;
	if( y<0 || y>400)
		dy=-dy;
		x+=dx;
		y+=dy;
	}

myCanvas.onclick = function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + randomColor;
    }