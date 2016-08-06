var mic;
var maxLevel= 0;

function setup() {
	mic = new p5.AudioIn();
	mic.start();

}

function draw() {
	micLevel = mic.getLevel();
	intLevel = parseInt(micLevel * 400);
	if (intLevel > maxLevel) { maxLevel = intLevel };
	oneBitLevel = parseInt(micLevel * 400);
	if (oneBitLevel <= 255) { vuColor = "#" + oneBitLevel.toString(16) + "0000" };
	document.getElementById("level").innerHTML = intLevel;
	document.getElementById("maxlevel").innerHTML = maxLevel;
	document.getElementById("vu").style.width = (intLevel * 2) + "px";
	document.getElementById("vumax").style.backgroundColor = vuColor;
	document.getElementById("vumax").style.width = (maxLevel * 2) + "px";
	document.getElementById("bgcolor").innerHTML = oneBitLevel + "   " + vuColor;
}