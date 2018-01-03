var app = new PIXI.Application(1260, 640, {backgroundColor : 0x1099bb});
// document.body.appendChild(app.view);


// var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
document.body.appendChild(app.view);
app.view.style.position = 'absolute';
app.view.style.left = '50%';
app.view.style.top = '50%';
app.view.style.transform = 'translate3d( -50%, -50%, 0 )';

var basketBall = PIXI.Sprite.fromImage('Assets/basketBall.png');
var basketBallShadow = PIXI.Sprite.fromImage('Assets/shadow.png');
var basketHoop = PIXI.Sprite.fromImage('Assets/basketballhoop.png');
var exitToMainMenu = PIXI.Sprite.fromImage('Assets/exit.png');
var floor = PIXI.Sprite.fromImage('Assets/floor.png');

basketBall.anchor.set(0.5);
basketBallShadow.anchor.set(0.5);
basketHoop.anchor.set(0.5);

// var mouseX = document.getElementById('mouse_X');
// var mouseY = document.getElementById('mouse_Y');

// var dxBeforeSpace = 0;
var dx = 0;
var dy = -0;
var da = 0;

var floor = 580; 
var gravity = 0.3;
var paused = true;

var showStart = true;

var shootAgain = true;
var shotHeight = 17;

var score = 0;

var startOfGame = true;

app.stage.addChild(basketBallShadow);
app.stage.addChild(basketBall);
app.stage.addChild(basketHoop);




basketBall.x = 9;
basketBall.y = floor;

basketHoop.x = 1180;
basketHoop.y = 300;

// DEBUG
// paused = true;
// basketBall.x = 1200;
// basketBall.y = 258;



var pleaseShoot = false;

function moveHandler(event) {
    var x = event.x - app.view.getBoundingClientRect().left;
    var y = event.y - app.view.getBoundingClientRect().top;
     console.log("X:"+x+", Y:" + y)
}
app.view.onmousemove = moveHandler;

// console.log()

app.ticker.add(function(delta) {

document.getElementById("debug").innerHTML  = "x=" + Math.floor(basketBall.x) + " y=" + Math.floor(basketBall.y);

if (paused) {return;}
  

//When the ball is shot
  if(pleaseShoot) {
    // console.log("Shoot the ball")
    dx = 5 + shootingStrength * 1;
    dy = -1 * (5 + shootingStrength * 2);
    da /= 2
    basketBall.y = floor;
    pleaseShoot=false;
    strength=0;
  }

//Gravity acting on the ball
  if (basketBall.y < floor &&
    dy < 15) {

    dy += gravity;
 // basketBall.y = floor;

   }
  
  //Air resistance(dx and dy)
  if(dx != 0)
    dx -= dx > 0 ? 0.005 : -0.005
  if(dy != 0)
    dy -= dy > 0 ? 0.005 : -0.005

  if (basketBall.x <= 10 && shootAgain == true) {
    dx = 5;
  } 
    
  if (basketBall.x >= 1245) {
    dx = -0.5 * dx;
    basketBall.x = 1245;
  } 

  // bounce moment
  if (basketBall.y > floor) {
    dy = -dy*0.5;
    if(Math.abs(dy) < 1)
      dy = 0
    
    basketBall.y = floor;
  } 

  // when on the ground
  if (basketBall.y == floor) {
    da = dx * 0.045;
    shootAgain = true;
  }

  // when in the air
  if (basketBall.y < floor) {
    
    shootAgain = false;
  } 

  hoopPhysics();

  basketBall.y += dy * delta;
  basketBall.x += dx * delta;
  basketBall.rotation += da * delta;

  // shadow
  var distanceToWitchShadowIsVisible = 500
  basketBallShadow.y = floor+16;
  basketBallShadow.x = basketBall.x
  var shadowAlpha = (distanceToWitchShadowIsVisible - (floor - basketBall.y))/distanceToWitchShadowIsVisible
  basketBallShadow.alpha = shadowAlpha * 0.8 // 0.5 is additional bluring

  // console.log("basketBall.y: "+basketBall.y + " dy: " + dy)



});

function hoopPhysics() {

  if( basketBall.x > 1228 && basketBall.y>=226 && basketBall.y < 334 ) {
    dx = -0.5 * dx;
    basketBall.x = 1228;
  }

}



//PAUSE MENU

function showPauseMenu(){


 

  document.getElementById("pauseMenu").style.display = "";


}

function hidePauseMenu(){



  document.getElementById("pauseMenu").style.display = "none";


}

//RESUME GAME

function resumeGame() {

    paused = false;

}

//STARTING MENU

function showStartMenu () {

  document.getElementById("startingMenu").style.display = "";

}

function hideStartMenu () {

  document.getElementById("startingMenu").style.display = "none";

}

//OPTION MENU

function showOptionsMenu() {

 document.getElementById("optionMenu").style.display = "";

}

function hideOptionsMenu() {

  document.getElementById("optionMenu").style.display = "none";
 
}

//SETTINGS MENU

function showSettings () {

  document.getElementById("settingsMenu").style.display = "";

}

function hideSettings () {

  document.getElementById("settingsMenu").style.display = "none";

}

//STORE MENU

function showStore () {

  document.getElementById("storeMenu").style.display = "";

}

function hideStore () {

  document.getElementById("storeMenu").style.display = "none";


}



//FUNCTIONS FOR PAUSE

function showOptionsMenuP() {

 document.getElementById("optionMenuP").style.display = "";

}

function hideOptionsMenuP() {

  document.getElementById("optionMenuP").style.display = "none";
 
}

//SETTINGS MENU

function showSettingsP () {

  document.getElementById("settingsMenuP").style.display = "";

}

function hideSettingsP () {

  document.getElementById("settingsMenuP").style.display = "none";

}

//STORE MENU

function showStoreP () {

  document.getElementById("storeMenuP").style.display = "";

}

function hideStoreP () {

  document.getElementById("storeMenuP").style.display = "none";


}



 
var shootingStrength = 0;
var shootingStrengthInterval = null;

document.addEventListener('keydown', function(event) {


  if(!pleaseShoot && event.keyCode == 32 && shootAgain == true) {

    console.log("start shot")
    // dxBeforeSpace = dx;
    dx = 0;

    if(!shootingStrengthInterval) {

      shootingStrength = 1;
      console.log("start shooting interval")

      shootingStrengthInterval = setInterval(function() {
        shootingStrength ++;
        if(shootingStrength >= 10) {
          releaseShot()
          return;
        }
        
        document.getElementById("shootingStrength").innerHTML = "Shooting strength: " + shootingStrength

      }, 100)


    }
  }


  // console.log("key:" + event.keyCode)

  if(event.keyCode == 39) {
    basketBall.x += 2

  } else if( event.keyCode == 37) {
    basketBall.x -= 2
  } else if( event.keyCode == 38) {
    basketBall.y -= 2
  } else if( event.keyCode == 40) {
    basketBall.y += 2
  } else if( event.keyCode == 80) {
    paused = !paused
    dx = 4;
  }

  if(event.keyCode == 27 && !paused) {
     
     paused = true;
     showPauseMenu();


  } else if (event.keyCode == 27 && paused) {

     paused = false;
     startOfGame = false;
     // app.stage.removeChild(exitToMainMenu);

    hidePauseMenu();

  }

});


document.addEventListener('keyup', function(event) {
  if(event.keyCode == 32 && shootingStrengthInterval && shootAgain == true) {


      releaseShot();

  }

});


function releaseShot() {
  clearInterval(shootingStrengthInterval)
  shootingStrengthInterval = null
  document.getElementById("shootingStrength").innerHTML = ""


  console.log("Release shot: " + shootingStrength)

  // dx = dxBeforeSpace;
  // dxBeforeSpace = 0;
  pleaseShoot=true;


}



