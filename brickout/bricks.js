
var BRICK_W = 44;
var BRICK_H = 19;
var GAP=4;
var BALL_SIZE = 16;
var BRICK_ALPHA_STEP = 0.5;

var listOfBricks=[];

var borT = false;
var lorR = false;

function addBrick (gx,gy) {

	// console.log("Brik added to stage at "+gx+", "+gy );

	var brick = PIXI.Sprite.fromImage('Assets/brick.png')

	brick.x = (gx+0.5) * (BRICK_W+GAP);
	brick.y = (gy+0.5) * (BRICK_H+GAP);
	brick.anchor.set(0.5)
	
	app.stage.addChild(brick);

	listOfBricks.push(brick);
		
}

function checkBrickPhysics() {

	// console.log("checkBrickPhysics called")
	// thereWasAHit=false;

	for(var k in listOfBricks) {
		
		var brick = listOfBricks[k]

		if( ball.x > brick.x - BRICK_W/2 - BALL_SIZE/2 && 
            ball.x < brick.x + BRICK_W/2 + BALL_SIZE/2 && 
            ball.y > brick.y - BRICK_H/2 - BALL_SIZE/2 && 
            ball.y < brick.y + BRICK_H/2 + BALL_SIZE/2 ) {

			// console.log("Brick hit!!")

			brick.alpha -= BRICK_ALPHA_STEP;
			brick.zIndex = 0;

			if(brick.alpha <= 0) {
				app.stage.removeChild(brick);
				delete listOfBricks[  listOfBricks.indexOf(brick) ]

				addPoint()
			}

			if( ball.x >= brick.x - BRICK_W/2 &&
				ball.x <= brick.x + BRICK_W/2 ) {
					dy = -dy;

			} else if( ball.y >= brick.y - BRICK_H/2 &&
			   ball.y <= brick.y + BRICK_H/2 ) {
			   		dx = -dx;
			} else {
					dy = -dy;

			   		// dx = -dx;
			}

			// ball.x += dx
			// ball.y += dy
			// dontCheckPhysicsFrames = 10;

			break

		}


	}

}

function pushBricksDown() {

	if (gameIsRunning == false)
		return;

	
	for(var k in listOfBricks) {
		var brick = listOfBricks[k];
		brick.y += BRICK_H + GAP

		if(brick.y > paddle.y - 40) {
			gameOver();
		}
	}



}
