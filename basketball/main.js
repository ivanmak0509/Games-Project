var app = new PIXI.Application(1260, 640, {backgroundColor : 0x1099bb});
// document.body.appendChild(app.view);


// var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
document.body.appendChild(app.view);
app.view.style.position = 'absolute';
app.view.style.left = '50%';
app.view.style.top = '50%';
app.view.style.transform = 'translate3d( -50%, -50%, 0 )';

var basketBall = PIXI.Sprite.fromImage('Assets/basketBall.png')
var basketHoop = PIXI.Sprite.fromImage('Assets/basketballhoop.png')
var exitToMainMenu = PIXI.Sprite.fromImage('Assets/exit.png')
basketBall.anchor.set(0.5);
basketHoop.anchor.set(0.5);

// var mouseX = document.getElementById('mouse_X');
// var mouseY = document.getElementById('mouse_Y');

var dxBeforeSpace = 0;
var dx = 0;
var dy = -0;
var da = 0;

var floor = 623; 
var gravity = 0.3;
var paused = false;

var shootAgain = true;
var shotHeight = 17;


app.stage.addChild(basketBall);
app.stage.addChild(basketHoop);

basketBall.x = 9;
basketBall.y = floor;

basketHoop.x = 1180;
basketHoop.y = 400;

var pleaseShoot = false;

function moveHandler(event) {
    var x = event.x - app.view.getBoundingClientRect().left;
    var y = event.y - app.view.getBoundingClientRect().top;
    console.log("X:"+x+", Y:" + y)
}
app.view.onmousemove = moveHandler;

console.log()

 app.ticker.add(function(delta) {

  if (paused) {return;}

  

//When the ball is shot
  if(pleaseShoot) {
    console.log("Shoot the ball")
    dx = 13;
    dy = -shotHeight;
    da = -0.02;
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
  dx -= dx > 0 ? 0.005 : -0.005
  dy -= dy > 0 ? 0.005 : -0.005

  if (basketBall.x <= 10 && shootAgain == true) {
    dx = 5;
  } 
    
  if (basketBall.x >= 1245) {
    dx = -0.5 * dx;
    basketBall.x = 1245;
  } 

   //else if (basketBall.x >= 1245 && shootAgain == false) {
  // dx = dxShot;
  // var dxShot = -dx/100*80;
  // }
    
  //  

  if (basketBall.y > floor) {

    dy = -dy*0.5;

    if(Math.abs(dy) < 1)
      dy = 0
    
    basketBall.y = floor;
    shootAgain = true;

    // console.log("bounce")
    // if( dx > 0 && a < 0 || dx < 0 && a > 0)
    //   a = 0

    da = dx * 0.045;
  }

  if (basketBall.y < floor) {
    
    shootAgain = false;
  } 


  basketBall.y += dy * delta;
  basketBall.x += dx * delta;
  basketBall.rotation += da * delta;

  document.getElementById("debug").innerHTML  = "dx="+dx;

 // console.log(strength)

  //basketball hoop physics

  // console.log(mouseData);
//  document.addEventListener('keydown', function(event) {
//     if(event.keyCode == 32 && dxBeforeSpace == 0 && shootAgain == true) {
//        //alert('Space was pressed');
//        delta/4
//         strength += 0.01

//     }
// });

//Basketball hoop physics
// console.log(basketBall.x + basketBall.y);
// if (basketBall.y) {

//   dx = -0.5*dx;
//   dy = -0.5*dy;

//   console.log("Rim hit!")

// }

//Height of the shot



});

 


 document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32 && dxBeforeSpace == 0 && shootAgain == true) {
        //alert('Space was pressed');
        dxBeforeSpace = dx;
        dx = 0;
         // strength += 1;

    }

    if(event.keyCode == 27 && !paused) {
       
       paused = true;
       app.stage.addChild(exitToMainMenu);
       

    } else if (event.keyCode == 27 && paused) {

       paused = false;
       app.stage.removeChild(exitToMainMenu);

    }

  });


 document.addEventListener('keyup', function(event) {
    if(event.keyCode == 32 && shootAgain == true) {
        //alert('Space was pressed');
        dx = dxBeforeSpace;
        dxBeforeSpace = 0;
        
        pleaseShoot=true;
        // shotTheBall();
         

    }
// mouseMoveCallback();
//   // basketHoop.on('mousemove', mouseMoveCallback);
//   function mouseMoveCallback(mouseData) {  
//   console.log("X = "+mouseData.data.originalEvent.movementX);  
//   console.log("Y = "+mouseData.data.originalEvent.movementY);
// }

});

//  function readMouseMove (e) {
  
//   mouseX.innerHTML = e.clientX;
//   mouseY.innerHTML = e.clientY;
// }
// document.onmousemove = readMouseMove;


//  function shotTheBall() {



// }
//  function moveBall(object, distance) {
//  object.x = object.x + distance * Math.cos(object.rotation);
//  object.y = object.y + distance * Math.sin(object.rotation);
// }

 