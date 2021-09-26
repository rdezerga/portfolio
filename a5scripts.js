//global variables
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var t = 0;
var R = 0;
var r = 0;
var O = 0;
var stop = false;

//Stop function

function stopDrawing(){
  clearInterval(interval);
}

//Drawing function

function doDrawing(){
//random variables
  t = Math.floor(Math.random() * 100);
  R = Math.floor(Math.random() * 100);
  r = Math.floor(Math.random() * 100);
  O = Math.floor(Math.random() * 100);

  ctx.clear();

//random color function

  var timesRun = 0;
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  var x = c.width/2;
  var y = c.height/2;

  ctx.moveTo(x,y);
  ctx.beginPath();
  ctx.strokeStyle = color;
//drawing time
  var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 1000000) {
      clearInterval(interval);
    }
    if (stop == true){
      clearInterval(interval);
    }
    drawSpirograph(x, y);
  }, 5);
}

//spirograph formula

function drawSpirograph(x, y) {
  t = t + .1;
  x = x + ((R + r) * Math.cos(t)) - ((r + O) * Math.cos(((R + r) / r) * t));
  y = y + ((R + r) * Math.sin(t)) - ((r + O) * Math.sin(((R + r) / r) * t));

  ctx.lineTo(x, y);
  ctx.stroke();
}

//clear function
CanvasRenderingContext2D.prototype.clear =
    CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
        if (preserveTransform) {
            this.save();
            this.setTransform(1, 0, 0, 1, 0, 0);
        }

        this.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (preserveTransform) {
            this.restore();
        }
    };