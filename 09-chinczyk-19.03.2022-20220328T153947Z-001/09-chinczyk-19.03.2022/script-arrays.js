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

function checkpawn(){
	n = 0;
	field.forEach(truecheckpawn);
	
}
function truecheckpawn(){
	console.log("n = " + n + "|| idram = " + idram)
	
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
	console.log("n = " + n + "|| idram = " + idram)
	if (pawns.includes(field[n][idram]) == true){ 
		console.log("n" + n)
		console.log("pawn "+ pawns[n])
		rampawns[n] = pawns[n];
		ramN = n;
		checktrue = 1;
	}
	n++;	
}

function roll(){
	
	rollnum = Math.floor(Math.random() * 6) + 1;
	console.log(rollnum + " Roll-Number"); 			
	totalroll = totalroll + rollnum;
	if (rollnum == 6)
	{
		roll();
	}
	else{
		if(totalroll != 0){								
			console.log(totalroll + " Total-Roll"); 	
			console.log(""); 							
		}	
	}
	
}	

function checkfield (id){
	idram = id;
	console.log(field[0].indexOf("yellow1"))
	checkpawn();
	console.log(checktrue + " from checkfield")
	
	if (checktrue == 1){  //chodzenie
		checktrue = 0;
		console.log("id " + id) 
		//rampawn = field[id];	
		field[ramN][id] = null;												//wyczyszcza zawartosc klikniętego pola
		console.log(rampawn)											
		pawn = document.getElementById("a" + id);						//pobiera id miejsca pionka
		pawn.style.backgroundImage = null; 								//wyczyszcza pionek graficznie
		//tets();
		roll(); 														//wykonuje rzut
		pcount[pawns.indexOf(rampawn)] = pcount[pawns.indexOf(rampawn)] + totalroll;		//zmiana ścieżki => do domu												
		id = id + totalroll; 											//oddaje wartosc do którego miejsca musi pójść pionek	
		totalroll = 0;													//wymazujemy ilość rzuconych oczek
		console.log(pcount[pawns.indexOf(rampawn)])

		if (pcount[pawns.indexOf(rampawn)] >= 39 ){
			if (rampawn.charAt(0) == "y") id = 43;
			else if (rampawn.charAt(0) == "g") id = 47;
			else if (rampawn.charAt(0) == "r") id = 51;
			else if (rampawn.charAt(0) == "b") id = 55;
		}
		else if (id > 39){
			id = id - 39;
		}
		field[ramN][id] = rampawn; 											//przypisujemy do pola nowe miejsce pionka
		idram = id;
		checkpawn2();
		for (i = 0; i <= 15; i++){
			if (rampawns[i]!= null && rampawn.charAt(0) != rampawns[i].charAt(0)){
				field[i][id] = null;
				var1 = rampawns[i].substr(1, 2);
				field[i][var1] = rampawns[i];
			}
		}
		

		loading();
	}
	
}

function fromBase(id){
	idram = id;
	checkpawn();
									console.log(checktrue + " from base");
	if(checktrue == 1){
		checktrue = 0;
		pawn = document.getElementById("a" + id);
		pawn.style.backgroundImage = null;
		//pawn = document.getElementById("a32");
		//pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
		var start;
		if(id >= 58 && id <= 61) start = 32;
		else if(id >= 62 && id <= 65) start = 2;
		else if(id >= 66 && id <= 69) start = 12;
		else if(id >= 70 && id <= 73) start = 22;
									console.log("n " + ramN);
									console.log("pawn " + rampawn)
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



