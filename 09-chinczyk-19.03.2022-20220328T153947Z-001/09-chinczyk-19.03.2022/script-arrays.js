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

var rampawn;

var pawns =	["yellow1","yellow2"];

var pcount = [0,0];

var rollnum;
var totalroll = 0;

field[0][58] = "yellow1";
field[1][59] = "yellow2";
var pawn = document.getElementById("yellowbase58");
pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
pawn = document.getElementById("yellowbase59");
pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";

var checktrue = 0;

function checkpawn(){
	n = 0;
	field.forEach(truecheckpawn);
	
}
function truecheckpawn(){
	console.log("n = " + n + "|| idram = " + idram)
	if (pawns.includes(field[n][idram]) == true){     // -----------------------------------------ERROR
		console.log("n" + n)
		console.log("pawn "+ pawns[n])
		rampawn = pawns[n];
		ramN = n;
		console.log("sdfdsfdsdfsdfssdfdfsdfs")
		checktrue = 1;
	}
	n++;	
}

function roll() 								
{
	
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

		if (pcount[pawns.indexOf(rampawn)] >= 39){
		id = 43;
		}
		else if (id > 39){
			id = id - 39;
		}
		field[ramN][id] = rampawn; 											//przypisujemy do pola nowe miejsce pionka
		pawn = document.getElementById("a" + id);						//pobiera id nowego miejsca pionka
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')"; //przypisuje pionek graficznie
	}
	
}

function fromBase(id){
	idram = id;
	checkpawn();
									console.log(checktrue + " from base");
	if(checktrue == 1){
		checktrue = 0;
		pawn = document.getElementById("yellowbase" + id);
		pawn.style.backgroundImage = null;
		pawn = document.getElementById("a32");
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
									console.log("n " + ramN);
									console.log("pawn " + rampawn)
		field[ramN][id] = null;
		field[ramN][32] = rampawn;
	}
}



