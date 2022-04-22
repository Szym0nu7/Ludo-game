var pole = [];
var Ybase = [];
var rollnum;
var totalroll = 0;

Ybase[0] = "yellow1";
var pawn = document.getElementById("yellowbase0");
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

	if (pole[id] == "yellow1"){

		pole[id] = ""; 													//wyczyszcza zawartosc klikniętego pola
		pawn = document.getElementById("a" + id);						//pobiera id miejsca pionka
		pawn.style.backgroundImage = ""; 								//wyczyszcza pionek graficznie

		roll(); 														//wykonuje rzut
		id = id + totalroll; 											//oddaje wartosc do którego miejsca musi pójść pionek
		totalroll = 0; 													//wymazujemy ilość rzuconych oczek

		if (id > 39){ 													//cofa index aby plansza się zapętlała
			id = id - 39;
		}

		pole[id] = "yellow1"; 											//przypisujemy do pola nowe miejsce pionka
		pawn = document.getElementById("a" + id);						//pobiera id nowego miejsca pionka
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')"; //przypisuje pionek graficznie
	}
	
}

function fromBase(id){
	if(Ybase[id] == "yellow1")
	{
		Ybase[id] = null;
		pawn = document.getElementById("yellowbase" + id);
		pawn.style.backgroundImage = null;
		pawn = document.getElementById("a32");
		pawn.style.backgroundImage = "url('img/pawns/yellowpawn.png')";
		pole[32] = "yellow1";
	}
}

