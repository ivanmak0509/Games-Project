
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

    // angleDegrees += 10

    dx = Math.cos( Math.radians( angleDegrees ) ) * (d / 10)
    dy = Math.sin( Math.radians( angleDegrees ) ) * (d / 10)

    console.log("Shoot: ", dx, dy, angleDegrees)
    

    // console.log("start shot")

    // dx = 0;

    // if(!shootingStrengthInterval) {

    //   shootingStrength = 1;
    //   console.log("start shooting interval")

    //   shootingStrengthInterval = setInterval(function() {
    //     shootingStrength ++;
    //     if(shootingStrength >= 10) {
    //       releaseShotMeta()
    //       return;
    //     }
        
    //     document.getElementById("shootingStrength").innerHTML = "Shooting strength: " + shootingStrength

    //   }, 100)


    // }
  }

  // console.log('stage', getMouseCoordinates()); 
});
app.view.addEventListener("mouseup", function(e) { 

  if(shootingStrengthInterval && shootAgain == true) {
    releaseShotMeta();
  }


});



// function releaseShotMeta() {
//   clearInterval(shootingStrengthInterval)
//   shootingStrengthInterval = null
//   document.getElementById("shootingStrength").innerHTML = ""


//   console.log("Release shot: " + shootingStrength)

//   // dx = dxBeforeSpace;
//   // dxBeforeSpace = 0;
//   pleaseShoot=true;


// }



// function releaseShotRaw() {

//   var p1 = {x:basketBall.x, y:basketBall.y}
//   var p2 = getMouseCoordinates();
//   var d = Math.sqrt( Math.pow(p2.y - p1.y, 2), Math.pow(p2.x - p1.x, 2) );

//   var angleDegrees = Math.degrees( Math.atan2(p1.y - p2.y, p2.x - p1.x) );

//   // angleDegrees += 10

//   dx = Math.cos( Math.radians( angleDegrees ) ) * (d / 10)
//   dy = Math.sin( Math.radians( angleDegrees ) ) * (d / 10)

//   console.log("Shoot: ", dx, dy, angleDegrees)

//   basketBall.y = floor;
//   pleaseShoot=false;
//   strength=0;
// }

