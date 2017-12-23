
function addScore() {

	var scoreSystem = new PIXI.Text("Score: " + score);
	scoreSystem.zOrder = 100;
	app.stage.addChild(scoreSystem);

}

