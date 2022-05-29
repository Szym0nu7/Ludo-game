var field = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];

//pawn variables

var pawns = ["y58", "y59", "y60", "y61", "g62", "g63", "g64", "g65", "r66", "r67", "r68", "r69", "b70", "b71", "b72", "b73"];

var pcount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var yd = 43;
var gd = 47;
var rd = 51;
var bd = 55;

field[0][58] = "y58";
field[1][59] = "y59";
field[2][60] = "y60";
field[3][61] = "y61";

field[4][62] = "g62";
field[5][63] = "g63";
field[6][64] = "g64";
field[7][65] = "g65";

field[8][66] = "r66";
field[9][67] = "r67";
field[10][68] = "r68";
field[11][69] = "r69";

field[12][70] = "b70";
field[13][71] = "b71";
field[14][72] = "b72";
field[15][73] = "b73";

var wins = [
	{ player: "Yellow", score: 0 },
	{ player: "Green", score: 0 },
	{ player: "Red", score: 0 },
	{ player: "Blue", score: 0 },
]

var culprit = 1;
var curplr = "Yellow";
var curplrs = "yellowcolor";
//other variables

var moved = 1;
var checkroll = 0;
var checktrue = 0;
var rollagain = 0;
var playercheck = 0;
var isnt = 0;

var diceoutput = "";
var plus;
var rollnum;
var n = 0;
var var1;
var pawn;
var ramN;
var idram;
var rampawn;
var rampawns = [];
var convertedcurplr;
var object;
var movedtiles

//test function

function test() {
	wins[0].score = 1;
		updategame();
}

//main functions

function turns() {
	checkroll = 0;
	//display current player
	//tell player to roll document.getElementById("tip").innerHTML = "Rzuć kością";
	//player uses rolling
	//tell player to chose pawn document.getElementById("tip").innerHTML = "Wybierz pionka";
	//player choses pawn
	//eventually tell player to roll again  document.getElementById("tip").innerHTML = "Rzuć kością";
	//eventually rolls again
	culprit++;
	if (culprit == 5) culprit = 1;
	//repeat
}

function rolling() {
	document.getElementById("playerwhich").innerHTML = curplr;
	document.getElementById("playerwhich").className = curplrs;
	if (moved == 1) {
		roll();
		checkroll = 1;
		document.getElementById("die").src = "img/dice/dice" + rollnum + ".png";
		moved = 0;
		console.log("culprit " + culprit)
		isntpawn();
		if (isnt == 4) {
			console.log("inst")
			isnt = 0;

			if (rollagain == 0) {
				checkroll = 0;
				playerprogress();
			} else document.getElementById("tip").innerHTML = "Choose pawn";
		} else document.getElementById("tip").innerHTML = "Choose pawn";
	}
} function roll() {
	rollnum = Math.floor(Math.random() * 6) + 1;
	console.log(rollnum + " = Roll-Number");
	if (rollnum == 6) {
		rollagain = 1;
	}
}

function checkfield(id) {
	idram = id;
	chec();
	if (checktrue == 1 && checkroll == 1 && playercheck == 1) {
		checclear();
		console.log(id + " = id")
		field[ramN][id] = null;
		console.log(rampawn + " = rampawn")
		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		pcount[pawns.indexOf(rampawn)] = pcount[pawns.indexOf(rampawn)] + rollnum;
		//sanimateobjcet();
		id = id + rollnum;
		rollnum = 0;
		console.log("pcount = " + pcount[pawns.indexOf(rampawn)])
		if (pcount[pawns.indexOf(rampawn)] >= 39) {
			if (rampawn.charAt(0) == "y") { id = yd; yd--; } // ID = 40 - 43
			else if (rampawn.charAt(0) == "g") { id = gd; gd--; } // ID = 44 - 47
			else if (rampawn.charAt(0) == "r") { id = rd; rd--; } // ID = 48 - 51
			else if (rampawn.charAt(0) == "b") { id = bd; bd--; } // ID = 52 - 55
		}
		else if (id > 39) {
			id = id - 39;
		}
		field[ramN][id] = rampawn;
		idram = id;
		rampawns = [];
		checkpawn2();
		for (i = 0; i <= 15; i++) {
			if (rampawns[i] != null && rampawn.charAt(0) != rampawns[i].charAt(0)) {
				field[i][id] = null;
				var1 = rampawns[i].substr(1, 2);
				field[i][var1] = rampawns[i];
				pcount[pawns.indexOf(rampawns[i])] = 0;
			}
		}
		if (rollagain == 1) {
			rollagain = 0;
		} else playerprogress();
		loading();
		moved = 1;
		areyawinningson();
		document.getElementById("tip").innerHTML = "Roll";
	}
}

function fromBase(id) {
	idram = id;
	chec();
	if (checktrue == 1 && rollagain == 1 && checkroll == 1 && playercheck == 1) {
		checclear();

		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		var start;
		if (id >= 58 && id <= 61) start = 32;
		else if (id >= 62 && id <= 65) start = 2;
		else if (id >= 66 && id <= 69) start = 12;
		else if (id >= 70 && id <= 73) start = 22;
		field[ramN][id] = null;
		field[ramN][start] = rampawn;
		if (rollagain == 1) {
			rollagain = 0;
		} else playerprogress();
		moved = 1;
		loading();
		document.getElementById("tip").innerHTML = "Roll";
	}
}

//checking functions

function checkplayer() {

	if (rampawn.charAt(0) == "y") convertedcurplr = 1;
	else if (rampawn.charAt(0) == "g") convertedcurplr = 2;
	else if (rampawn.charAt(0) == "r") convertedcurplr = 3;
	else if (rampawn.charAt(0) == "b") convertedcurplr = 4;
	if (convertedcurplr == culprit) playercheck = 1;
}

function areyawinningson() {
	if (yd == 39) {
		wins[0].score = 1;
		updategame();
	}
	else if (gd == 43) {
		wins[1].score = 1;
		updategame();
	}
	else if (rd == 47) {
		wins[2].score = 1;
		updategame();
	}
	else if (bd == 51) {
		wins[3].score = 1;
		updategame();
	}
}

function checkpawn() {
	n = 0;
	field.forEach(truecheckpawn);
} function truecheckpawn() {
	if (pawns.includes(field[n][idram]) == true) {
		console.log("n" + n)
		console.log("pawn " + pawns[n])
		rampawn = pawns[n];
		ramN = n;
		checktrue = 1;
	}
	n++;
}

function checkpawn2() {
	n = 0;
	field.forEach(truecheckpawn2);
} function truecheckpawn2() {
	if (pawns.includes(field[n][idram]) == true) {
		rampawns[n] = pawns[n];
		ramN = n;
	}
	n++;
}

function isntpawn() {
	n = 1;
	wins.forEach(trueisntpawn);
} function trueisntpawn() {
	var shittydesign = culprit * 4 - n;
	console.log("shittydesign " + shittydesign + " " + pawns[shittydesign])
	if (field[shittydesign].indexOf(pawns[shittydesign]) > 40) {
		isnt++;
	}
	n++;
}
//animations

function animateobjcet() {

	if (rampawn.charAt(0) == "y") object = "url('img/pawns/yellowpawn.png')";
	else if (rampawn.charAt(0) == "g") object = "url('img/pawns/greenpawn.png')";
	else if (rampawn.charAt(0) == "r") object = "url('img/pawns/redpawn.png')";
	else if (rampawn.charAt(0) == "b") object = "url('img/pawns/bluepawn.png')";
	movedtiles = 1;
	var bullshit = setInterval(animate(), 300);

} function animate(t) {
	if (movedtiles <= rollnum) {
		var num = idram + movedtiles;
		var tile = document.getElementById("a" + num);
		tile.style.backgroundImage = object;
		movedtiles++;
		console.log("bitch")

	}//else clearInterval(bullshitt);
}

//other functions

function chec() {
	checktrue = 0;
	checkpawn();
	checkplayer();
} function checclear() {
	checkroll = 0;
	playercheck = 0;
}

function loading() {
	document.getElementById("playerwhich").innerHTML = curplr;
	document.getElementById("playerwhich").className = curplrs;
	n = 0;
	field.forEach(finding);
} function finding() {
	var tile = document.getElementById("a" + field[n].indexOf(pawns[n]));
	if (pawns[n].charAt(0) == "y") tile.style.backgroundImage = "url('img/pawns/yellowpawn.svg')";
	else if (pawns[n].charAt(0) == "g") tile.style.backgroundImage = "url('img/pawns/greenpawn.svg')";
	else if (pawns[n].charAt(0) == "r") tile.style.backgroundImage = "url('img/pawns/redpawn.svg')";
	else if (pawns[n].charAt(0) == "b") tile.style.backgroundImage = "url('img/pawns/bluepawn.svg')";
	n++;
}

function updategame() {
	for (i = 0; i < 4; i++) {
		if (wins[i].score == 1) document.getElementById("winner").innerHTML = wins[i].player + " Wins!";
	}
}

function playerprogress() {
	document.getElementById("playerwhich").innerHTML = curplr;
	document.getElementById("playerwhich").className = curplrs;
	culprit++;
	isnt = 0;
	if (culprit == 5) culprit = 1;
	switch (culprit) {
		case 1: curplr = "Yellow";curplrs = "yellowcolor"; break;
		case 2: curplr = "Green";curplrs = "greencolor"; break;
		case 3: curplr = "Red";curplrs = "redcolor"; break;
		case 4: curplr = "Blue";curplrs = "bluecolor"; break;
	}
	console.log("curplr " + curplr + " " + culprit)
	document.getElementById("playerwhich").innerHTML = curplr;
	document.getElementById("playerwhich").className = curplrs;
	moved = 1;
}

function toggleMenu() {
	let navigation = document.querySelector('.navigation');
	let toggle = document.querySelector('.toggle');
	navigation.classList.toggle('active');
	toggle.classList.toggle('active');
}