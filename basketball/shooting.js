
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

 
var shootingStrength = 0;
var shootingStrengthInterval = null;


// bind a mousedown to the stage
app.view.addEventListener("mousedown", function(e) { 


  if(shootAgain == true) {

    var p1 = {x:basketBall.x, y:basketBall.y}
    var p2 = getMouseCoordinates();
    var d = Math.sqrt( Math.pow(p2.y - p1.y, 2), Math.pow(p2.x - p1.x, 2) );

    var angleDegrees = Math.degrees( Math.atan2(p1.y - p2.y, p2.x - p1.x) );


    dxChangeTo = Math.cos( Math.radians( angleDegrees ) ) * (d / 10)
    dyChangeTo = Math.sin( Math.radians( angleDegrees ) ) * (d / 10)
    // basketBall.y = floor;
    pleaseShoot=false;


  }

});
app.view.addEventListener("mouseup", function(e) { 

  if(shootingStrengthInterval && shootAgain == true) {
    releaseShotMeta();
  }


});



