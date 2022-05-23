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

var pawns =	["y58","y59","y60","y61","g62","g63","g64","g65","r66","r67","r68","r69","b70","b71","b72","b73"];

var pcount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
	{player:"yellow", score:0},
	{player:"green", score:0},
	{player:"red", score:0},
	{player:"blue", score:0},
]

var curplr = 1;

//other variables

var moved = 1;
var checkroll = 0;
var checktrue = 0;
var rollagain = 0;
var playercheck = 0;
var isnt = 0;

var diceoutput =""; 
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

//test function

function test(){
	
}

//main functions

function turns(){
	checkroll = 0;
	//player uses rolling
	//player choses pawn
	//eventually rolls again
	curplr++;
	if (curplr == 5) curplr = 1;
	//repeat
}

function rolling(){
	if(moved == 1){
		document.getElementById("playerwhich").innerHTML = curplr;
		roll();
		checkroll = 1;
		document.getElementById("die").src = "img/dice/dice"+rollnum+".png";
		moved = 0;
		console.log("culprit " + curplr)
		isntpawn();
		if (isnt == 4){
			console.log("inst")
			isnt = 0;
			
			if (rollagain == 0) {
				checkroll = 0;
				playerprogress();
			}
		}
	}
}function roll(){
	rollnum = Math.floor(Math.random() * 6) + 1;
	console.log(rollnum + " = Roll-Number"); 			
	if (rollnum == 6)	{
		rollagain = 1;
	}	
}	

function checkfield (id){
	idram = id;
	chec();
	if (checktrue == 1 && checkroll == 1 && playercheck == 1){ 
		checclear();
		console.log(id + " = id")
		field[ramN][id] = null;								
									console.log(rampawn + " = rampawn")											
		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;														
		pcount[pawns.indexOf(rampawn)] = pcount[pawns.indexOf(rampawn)] + rollnum;												
		id = id + rollnum; 											
		rollnum = 0;													
							console.log("pcount = " + pcount[pawns.indexOf(rampawn)])
		if (pcount[pawns.indexOf(rampawn)] >= 39 ){
				 if (rampawn.charAt(0) == "y") { id = yd; yd--; } // ID = 40 - 43
			else if (rampawn.charAt(0) == "g") { id = gd; gd--; } // ID = 44 - 47
			else if (rampawn.charAt(0) == "r") { id = rd; rd--; } // ID = 48 - 51
			else if (rampawn.charAt(0) == "b") { id = bd; bd--; } // ID = 52 - 55
		}
		else if (id > 39){
			id = id - 39;
		}
		field[ramN][id] = rampawn; 											
		idram = id;
		rampawns = [];
		checkpawn2();
		for (i = 0; i <= 15; i++){
			if (rampawns[i]!= null && rampawn.charAt(0) != rampawns[i].charAt(0)){
				field[i][id] = null;
				var1 = rampawns[i].substr(1, 2);
				field[i][var1] = rampawns[i];
				pcount[pawns.indexOf(rampawns[i])] = 0;
			}
		}
		if (rollagain == 1){
			rollagain = 0;
			alert("rollagain")	
		}else playerprogress(); 
		loading();
		moved = 1;
		areyawinningson();
	}
}

function fromBase(id){
	idram = id;
	chec();
	if(checktrue == 1 && rollagain == 1 && checkroll == 1 && playercheck == 1){
		checclear();

		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		var start;
		if(id >= 58 && id <= 61) start = 32;
		else if(id >= 62 && id <= 65) start = 2;
		else if(id >= 66 && id <= 69) start = 12;
		else if(id >= 70 && id <= 73) start = 22;
		field[ramN][id] = null;
		field[ramN][start] = rampawn;
		if (rollagain == 1){
			rollagain = 0;
			alert("rollagain")	
		}else playerprogress();
		moved = 1;
		loading();
	}
}

//checking functions

function checkplayer(){
	
	if (rampawn.charAt(0) == "y")convertedcurplr = 1;
	else if (rampawn.charAt(0) == "g")convertedcurplr = 2;
	else if (rampawn.charAt(0) == "r")convertedcurplr = 3;
	else if (rampawn.charAt(0) == "b")convertedcurplr = 4;
	if (convertedcurplr == curplr) playercheck = 1;
}

function areyawinningson(){
	if(yd == 39){
		wins[0].score++;
		updategame();
	}
	else if(gd == 43){
		wins[1].score++;
		updategame();
	}
	else if(rd == 47){
		wins[2].score++;
		updategame();
	}
	else if(bd == 51){
		wins[3].score++;
		updategame();
	}
}

function checkpawn(){
	n = 0;
	field.forEach(truecheckpawn);		
}function truecheckpawn(){	
	if (pawns.includes(field[n][idram]) == true){ 
		console.log("n" + n)
		console.log("pawn "+ pawns[n])
		rampawn = pawns[n];
		ramN = n;
		checktrue = 1;
	}
	n++;	
}

function checkpawn2(){
	n = 0;
	field.forEach(truecheckpawn2);
}function truecheckpawn2(){
	if (pawns.includes(field[n][idram]) == true){ 
		rampawns[n] = pawns[n];
		ramN = n;
	}
	n++;	
}

function isntpawn(){
	n = 1;
	wins.forEach(trueisntpawn);
}function trueisntpawn(){
	var shittydesign = curplr * 4 - n;
	console.log("shittydesign "+shittydesign + " " +pawns[shittydesign])	
	if (field[shittydesign].indexOf(pawns[shittydesign]) > 40){ 
		isnt++;
	}
	n++;
}
//animations



//other functions

function chec(){
	checktrue = 0;
	checkpawn();
	checkplayer();
}function checclear(){
	checkroll = 0;
	playercheck = 0;
}

function loading(){
    n = 0;
    field.forEach(finding);
}function finding(){
    var tile = document.getElementById("a" + field[n].indexOf(pawns[n]));
	if (pawns[n].charAt(0) == "y")  tile.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
	else if (pawns[n].charAt(0) == "g")  tile.style.backgroundImage = "url('img/pawns/greenpawn.png')";
	else if (pawns[n].charAt(0) == "r")  tile.style.backgroundImage = "url('img/pawns/redpawn.png')";
	else if (pawns[n].charAt(0) == "b") tile.style.backgroundImage = "url('img/pawns/bluepawn.png')"; 
    n++;
}

function updategame(){
	wins.sort(compare);
	for(i=0; i<4; i++){
		document.getElementById("p" + i).innerHTML = wins[i].player +": "+ wins[i].score + " pkt";
	}
}function compare( a, b ) {
	if ( a.score > b.score ){
	  return -1;
	}
	if ( a.score < b.score ){
	  return 1;
	}
	return 0;
}

function playerprogress(){
	curplr++;
	isnt = 0;
	if (curplr == 5) curplr = 1;
	moved = 1;
}

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}