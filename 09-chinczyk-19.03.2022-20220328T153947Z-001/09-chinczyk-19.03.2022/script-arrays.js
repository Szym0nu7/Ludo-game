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
var n = 0;
var ramN;
var idram;

var var1;
var yd = 43;
var gd = 47;
var rd = 51;
var bd = 55;

var rampawn;
var rampawns = [];

var pawns =	["y58","y59","y60","y61","g62","g63","g64","g65","r66","r67","r68","r69","b70","b71","b72","b73"];

var pcount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var rollnum;
var totalroll = 0;

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

var pawn;
loading();
var checktrue = 0;
var score = [0,0,0,0]

function areyawinningson(){
	if(yd == 39){
		score[0]++;
		updategame();
	}
	else if(gd == 43){
		score[1]++;
		updategame();
	}
	else if(rd == 47){
		score[2]++;
		updategame();
	}
	else if(bd == 51){
		score[3]++;
		updategame();
	}
}
function updategame(){
	
}

function checkpawn(){
	n = 0;
	field.forEach(truecheckpawn);
		
}
function truecheckpawn(){
	//console.log("n = " + n + "|| idram = " + idram)
	
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
}
function truecheckpawn2(){
	
	if (pawns.includes(field[n][idram]) == true){ 
		rampawns[n] = pawns[n];
		ramN = n;
	}
	n++;	
}

function roll(){
	
	rollnum = Math.floor(Math.random() * 6) + 1;
	console.log(rollnum + " = Roll-Number"); 			
	totalroll = totalroll + rollnum;
	if (rollnum == 6)
	{
		roll();
	}
	else{
		if(totalroll != 0){								
			console.log(totalroll + " = Total-Roll"); 	
			console.log(""); 							
		}	
	}
	
}	

function checkfield (id){
	idram = id;
	checktrue = 0;
	checkpawn();
							console.log(checktrue + " from checkfield / 0 or 1")
	
	if (checktrue == 1){ 
		console.log(id + " = id")

		field[ramN][id] = null;								
							console.log(rampawn + " = rampawn")											
		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		roll(); 														
		pcount[pawns.indexOf(rampawn)] = pcount[pawns.indexOf(rampawn)] + totalroll;												
		id = id + totalroll; 											
		totalroll = 0;													
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
									console.log("is it here?")
				field[i][id] = null;
				var1 = rampawns[i].substr(1, 2);
				field[i][var1] = rampawns[i];
				pcount[pawns.indexOf(rampawns[i])] = 0;
				
			}
		}
		loading();
		areyawinningson();
	}
	
}

function fromBase(id){
	idram = id;
	checktrue = 0;
	checkpawn();
									console.log(checktrue + " from base");
	if(checktrue == 1){
		
		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		//pawn = document.getElementById("a32");
		//pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
		var start;
		if(id >= 58 && id <= 61) start = 32;
		else if(id >= 62 && id <= 65) start = 2;
		else if(id >= 66 && id <= 69) start = 12;
		else if(id >= 70 && id <= 73) start = 22;
									console.log("ramN = " + ramN);
									console.log("rampawn = " + rampawn)
		field[ramN][id] = null;
		field[ramN][start] = rampawn;
		loading();
	}
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


function test(){
	
}
