
function add() {

	document.getElementById("addMenu").style.display = "";
}

function addIcon() {

	document.getElementById("timeline").innerHTML += "<img src='addIcon.png' height='300px;'' class='add' onclick='add();'>";
}

function addNotes() {

	document.getElementById("note").style.display="";
	document.getElementById("noteSave").style.display="";
}

var notes;

function noteValue() {

notes =	document.getElementById('note').value;
}

function saveNotes() {

	
}