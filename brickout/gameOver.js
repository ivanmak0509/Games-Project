
var gameIsRunning;
var gameIsOver=false;

function gameOver () {

	var gameOverStyle = new PIXI.TextStyle({

		 fontFamily: 'Arial',
		 fontSize: 140,
		 fontWeaight: 'bold',
		 fill: ['#990000'],
		 strokeThickness: 7

	});


	gameOverText = new PIXI.Text("Game Over", gameOverStyle);
	gameOverText.x = 20;
	gameOverText.y = 200;
	pressAnyKey = new PIXI.Text("(press any key)");
	pressAnyKey.x = 300;
	pressAnyKey.y = 330;
	app.stage.addChild(gameOverText);
	app.stage.addChild(pressAnyKey);

	gameIsRunning=false;

	gameIsOver=true;

}