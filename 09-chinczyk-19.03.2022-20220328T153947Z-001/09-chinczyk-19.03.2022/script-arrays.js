var pole = [
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

var rampawn;

var piony =	["yellow1","yellow2"];

var pcount = [0,0];

var rollnum;
var totalroll = 0;

pole[1][58] = "yellow1";
pole[2][59] = "yellow2";
var pawn = document.getElementById("yellowbase58");
pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
pawn = document.getElementById("yellowbase59");
pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";

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

	
	if (piony.includes(pole[id]) == true){

		console.log("id " + id) 
		rampawn = pole[id];	
		pole[id] = null;
		console.log(rampawn)												//wyczyszcza zawartosc klikniętego pola
		pawn = document.getElementById("a" + id);						//pobiera id miejsca pionka
		pawn.style.backgroundImage = ""; 								//wyczyszcza pionek graficznie
		//tets();
		roll(); 											//wykonuje rzut
		pcount[piony.indexOf(rampawn)] = pcount[piony.indexOf(rampawn)] + totalroll;														
		id = id + totalroll; 											//oddaje wartosc do którego miejsca musi pójść pionek	
		totalroll = 0;		
		console.log(pcount[piony.indexOf(rampawn)])

		if (pcount[piony.indexOf(rampawn)] >= 39){
		id = 43;
		}
		else if (id > 39){ 													//cofa index aby plansza się zapętlała
			id = id - 39;
		}
																		//wymazujemy ilość rzuconych oczek
		pole[id] = rampawn; 											//przypisujemy do pola nowe miejsce pionka
		pawn = document.getElementById("a" + id);						//pobiera id nowego miejsca pionka
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')"; //przypisuje pionek graficznie
	}
	
}

function fromBase(id){
	if(piony.includes(pole[id]) == true)
	{
		rampawn = pole[id];
		pawn = document.getElementById("yellowbase" + id);
		pawn.style.backgroundImage = null;
		pawn = document.getElementById("a32");
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
		pole[id] = null;
		pole[32] = rampawn;
	}
}
var n = 0;
function ofindex(){
	console.log(pole[n].indexOf("yellow1"));
	n++;
}
function tets(){
pole.forEach(ofindex);
n = 0;
}



