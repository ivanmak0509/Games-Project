var app = new PIXI.Application(768, 600, {backgroundColor : 0x1099bb});
// document.body.appendChild(app.view);


// var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT);
document.body.appendChild(app.view);
app.view.style.position = 'absolute';
app.view.style.left = '50%';
app.view.style.top = '50%';
app.view.style.transform = 'translate3d( -50%, -50%, 0 )';


// create a new Sprite from an image path
var paddle = PIXI.Sprite.fromImage('Assets/paddle.png')
var ball = PIXI.Sprite.fromImage('Assets/ball.png')
// var MOUSE_X = app.renderer.plugins.interaction.mouse.global.x;
var dx = 4
var dy = -10

var paddleSpeed = 4;
var dxPaddle=0
var paddleBorder = paddle.y;
var paddleHeight = 22;
var paddleWidth = 88
var LpaddleLimit = false;

var brickWidth = 44;
var brickHieght = 19;

var gameIsRunning = true;

// center the sprite's anchor point
ball.anchor.set(0.5);
paddle.anchor.set(0.5)
//ball.scale.set(0.25)

// move the sprite to the center of the screen
ball.x = app.renderer.width / 2;
ball.y = app.renderer.height / 1.3;
paddle.x = app.renderer.width / 2;
paddle.y = app.renderer.height - 50;


app.stage.addChild(paddle);
app.stage.addChild(ball);




// function level1 () {

//   for(var y = 13; y<14; y+=2)
//     for(var x = 0; x<16; x++)
//       addBrick(x, y)
// }

// level1();


var dontCheckPhysicsFrames=0;

// Listen for animate update
app.ticker.add(function(delta) {


  delta/=1

	if (gameIsRunning == false ) 
    return;
   
	 	

	ball.x += dx * delta
	ball.y += dy * delta

  paddle.x = app.renderer.plugins.interaction.mouse.global.x;
  if(paddle.x < paddleWidth/2)
      paddle.x = paddleWidth/2;
  if(paddle.x > app.renderer.width - paddleWidth/2)
      paddle.x = app.renderer.width - paddleWidth/2;

	if ( (ball.y > paddle.y - paddleHeight/2 - 64*0.25/2) &&
		 (ball.y < paddle.y + paddleHeight/2 + 64*0.25/2) &&
	     (ball.x > paddle.x - paddleWidth/2 - 64*0.25/2) && 
	     (ball.x < paddle.x + paddleWidth/2 + 64*0.25/2) )  {

    var a = ballAngle()
    var v = ballVelocity()
  
    // v /=2
     

    if (ball.x < paddle.x -  paddleWidth/6) {
     //Zone A
     if (ball.x > paddle.x - paddleWidth/2)
      a -= 110;

    } else if (ball.x < paddle.x + paddleWidth/6) {
     //Zone B
       a -= 90;

    } else {
     //Zone C
   
      a -= 70;

    }

 //a = 180;

    if (a < -160)
      a = -160

    if (a > -20)
      a = -20;

    makeNewDxDy(a, v); 


  }
		
	


	
      
   paddle.x += dxPaddle
   if(ball.y <= 8)  dy = -dy
   if(ball.x <= 8 || ball.x > app.renderer.width-5)  dx = -dx

    // if(dontCheckPhysicsFrames <= 0)
      checkBrickPhysics();
    // dontCheckPhysicsFrames--;

   	if (ball.y > app.renderer.height +10) 
   		gameOver();


    // console.log("Ball a="+ballAngle())




});


function ballAngle() {
  var srsfdsz = Math.atan(dx/dy) * (180/Math.PI)
  return srsfdsz;
}

function ballVelocity() {


  var v = Math.sqrt(dx*dx + dy*dy)

  return v;
}

function makeNewDxDy(a, v) {
  dx = Math.cos( a * (Math.PI/180) ) * v
  dy = Math.sin( a * (Math.PI/180) ) * v

}




function keyup(e) {

    e = e || window.event;

    // if (e.keyCode == '38') {
    //     // we don't need
    // }
    // else if (e.keyCode == '40') {
    //     // we don't need
    // }
    // else if (e.keyCode == '37') {
    //    dxPaddle = 0	
 

    // }
    // else if (e.keyCode == '39') {
    // 	dxPaddle = 0;
    // }

    // console.log(e.keyCode)

}


function keydown(e) {

    e = e || window.event;

    if(gameIsOver) {
      location.reload()
    }

    // if (e.keyCode == '38') {
    //     // we don't need
    // }
    // else if (e.keyCode == '40') {
    //     // we don't need
    // }
    // else if (e.keyCode == '37') {

     
    //   dxPaddle = -paddleSpeed;

    // }
    // else if (e.keyCode == '39') {
    // 	dxPaddle = +paddleSpeed;
    // }

    // console.log(e.keyCode)

}

// function gameOver () {

// 	console.log("gameOver(Ball went out of bounds)")

// 	gameIsRunning = false;
// }

document.onkeydown = keydown;
document.onkeyup = keyup;







addNextLevelLine()
pushBricksDown()
addNextLevelLine()
pushBricksDown()
addNextLevelLine()
pushBricksDown()
addNextLevelLine()


setInterval(levelTicker, 10*1000);






