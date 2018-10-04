function drawTrapezoid(cx, topX, topY, topLen, bottomLen, height) {
  var bottomProtrusion = ((bottomLen - topLen)/2);
  cx.beginPath();
  cx.moveTo(topX,topY);
  cx.lineTo(topX + topLen, topY);
  cx.lineTo(topX + topLen + bottomProtrusion, topY + height);
  cx.lineTo(topX - bottomProtrusion, topY + height);
  cx.closePath();
  cx.stroke();
}

function drawRedDiamond(cx, topX, topY, sideLen) {  
  cx.translate(topX, topY);
  cx.rotate(0.25*Math.PI);
  cx.fillStyle = "red";
  cx.fillRect(0, 0, sideLen, sideLen);
}

function drawZigZag(cx, topX, topY, length, drop, number) {
  cx.beginPath();
  cx.moveTo(topX, topY);
  var curX = topX, curY = topY;
  for ( var i = 0; i < number; i++ ) {
    curX += length;
    curY += drop;
    cx.lineTo(curX, curY);
    curX -= length;
    curY += drop;
    cx.lineTo(curX, curY);
  }
  cx.stroke();
}

/*
angle is a position on the circle, clockwise until 2*PI, 0 being the far right.
x = math.cos(angle)
y = math.sin(angle);
*/

function drawSpiral(cx, centreX, centreY) {
  cx.translate(centreX, centreY);
  cx.moveTo(0,0);
  cx.beginPath();
  var angle = 0;
  var factor = 10;
  for ( var i = 0; i < 100; i++ ) {
    var destX = Math.cos(angle) * factor;
    var destY = Math.sin(angle) * factor;
    cx.lineTo(destX, destY);
    factor += 0.5;
    angle += 0.2;
  }
  cx.stroke();
}

function drawStar(cx, centreX, centreY, radius) {
  cx.translate(centreX, centreY);
  var angle = 0;
  var startX = Math.cos(angle) * radius;
  var startY = Math.sin(angle) * radius;
  cx.moveTo(startX, startY);
  for ( var i = 1; i <= 8; i++ ) {
    angle = (i / 8.0) * (2 * Math.PI);
    var x = Math.cos(angle) * radius;
    var y = Math.sin(angle) * radius;
    cx.quadraticCurveTo(0, 0, x, y);
  }
  cx.stroke();
}