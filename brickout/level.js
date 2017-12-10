

var allLevelLines = [

"** **  ***  ** **",
"******** ********",
"******* * *******",
"******** ********",
"*** ********* ***",
"* ** ******* ** *",
"** ** ***** ** **",
"* **** *** **** *",
"* ** ** * ** * **",
"**  * ** ** *  **",
"******* * *******",
"*  *** *** ***  *",
"** ** ***** ** **",
"* ** ******* ** *",
"* * ********* * *",
"*  **       **  *",
"    *       *    ",
"    * * * * *    ",







]

function levelTicker() {


  pushBricksDown()
  addNextLevelLine()
}

function addNextLevelLine() {
	
	if(allLevelLines.length==0)
		return;

	var str = allLevelLines.pop()
	console.log("Adding level: " + str)
	for (var x = 0; x < str.length; x++) {
		var c = str[x]
		if(c == "*") {
			addBrick(x, 0)
		} else {

		}
	}

	addScore(10,10)


}
