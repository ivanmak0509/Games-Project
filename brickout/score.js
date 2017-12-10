
var score = 0;

var richText;

function addScore (x,y) {

	if(score) {
		app.stage.removeChild(score)
	}

	var style = new PIXI.TextStyle({
	    fontFamily: 'Arial',
	    fontSize: 36,
	    fontStyle: 'italic',
	    fontWeight: 'bold',
	    fill: ['#ffffff', '#00ff99'], // gradient
	    stroke: '#4a1850',
	    strokeThickness: 5,
	    dropShadow: true,
	    dropShadowColor: '#000000',
	    dropShadowBlur: 4,
	    dropShadowAngle: Math.PI / 6,
	    dropShadowDistance: 6,
	    wordWrap: true,
	    wordWrapWidth: 440
	});

	richText = new PIXI.Text("Score: 0", style);
	richText.x = x;
	richText.y = y;
	richText.zOrder = 100;

	app.stage.addChild(richText);

	} 

function addPoint () {
	score += 1;
	richText.text = "Score: " + score
}