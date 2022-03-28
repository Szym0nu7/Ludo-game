var bluepos = 23;
var bluepawn = document.getElementById("a23");

var yellowpos = 33;
var yellowpawn = document.getElementById("a33");

var greenpos = 3;
var greenpawn = document.getElementById("a3");

var redpos = 13;
var redpawn = document.getElementById("a13");

var rollnum;
var totalroll = 0;

document.getElementById("yellow-btn").disabled = true;
document.getElementById("green-btn").disabled = true;
document.getElementById("blue-btn").disabled = true;
document.getElementById("red-btn").disabled = true;
//document.getElementById("move").disabled = true;		    -TESTING-
//window.onload = setup();  								-TESTING-
function startgame()
{
	var startplayerroll = Math.floor(Math.random() * 6) + 1;
	document.getElementById("startgame").innerHTML = startplayerroll; //.textContent możliwy
	console.log(startplayerroll);

	if(startplayerroll == 6){
		document.getElementById("yellow-btn").disabled = false;
		document.getElementById("green-btn").disabled = true;
		document.getElementById("blue-btn").disabled = true;
		document.getElementById("red-btn").disabled = true;		//Fixed. "move" isn't an id.
		document.getElementById("btnstartgame").disabled = true;

		//https://stackoverflow.com/questions/51787988/javascript-uncaught-typeerror-cannot-set-property-disabled-of-null
		// document.addEventListener("DOMContentLoaded", function(event) {
		// 	document.getElementById("move").disabled = false;
		// 	document.getElementById("btnstartgame").disabled = true;
		//   });
		  
		setup(5);
		document.getElementById("startgame").innerHTML = startplayerroll + " Zaczyna gracz: ";
	}
}
// function togglebutton(toggle){
// 	const button = document.getElementById("move");
// 	switch (toggle){
// 		case 1:
// 		button.disabled = true;
// 		break;
// 		case 2:
// 		button.disabled = false;
// 		break;
// 	}
// }

function setup(cheeck){
	switch (cheeck){

	case 1:
		yellowpawn = document.getElementById("a33");
		yellowpawn.style.backgroundColor = "yellow";
	break;
	case 2:
		bluepawn = document.getElementById("a23");
		bluepawn.style.backgroundColor = "blue";
	break;
	case 3:
		redpawn = document.getElementById("a13");
		redpawn.style.backgroundColor = "red";
	break;
	case 4:
		greenpawn = document.getElementById("a3");
		greenpawn.style.backgroundColor = "green";
	break;
	case 5:
		yellowpawn = document.getElementById("a33");
		yellowpawn.style.backgroundColor = "yellow";

		bluepawn = document.getElementById("a23");
		bluepawn.style.backgroundColor = "blue";

		greenpawn = document.getElementById("a3");
		greenpawn.style.backgroundColor = "green";

		redpawn = document.getElementById("a13");
		redpawn.style.backgroundColor = "red";
	break;
}
}
													//FIXED: other solution: https://stackoverflow.com/questions/68959632/typeerror-cannot-read-properties-of-undefined-reading-id
function roll(elem) 								//FIXED: idea from here: https://stackoverflow.com/questions/18410341/using-multiple-buttons-on-same-function-that-redirects-to-different-functions
{
	if(elem === undefined) {return} //naprawia błąd z elem.id poniżej || Może coś w return dać aby to 6 działała
	rollnum = Math.floor(Math.random() * 6) + 1;
	console.log(rollnum + " Roll-Number"); 			
	totalroll = totalroll + rollnum;
	if (rollnum == 6)
	{
		roll(elem);
	}
	if(totalroll != 0){								//hot-fix to showing 0 on Total-Roll
		console.log(totalroll + " Total-Roll"); 	
		console.log(""); 							
	}	
	
													// FIXED!  **PROBLEM!!!!! checks what player clicked button || if statment is not working! || Error after 6 roll
	if(elem.id == "blue-btn") 						
	{
		MOVE_Blue();
	}
	else if(elem.id == "red-btn")
	{
		MOVE_Red();
	}
	else if(elem.id == "green-btn")
	{
		MOVE_Green();
	}
	else if(elem.id == "yellow-btn")
	{
		MOVE_Yellow();
	}
}
function MOVE_Blue()
{
	bluepawn.style.backgroundColor = "white";
	bluepos = bluepos + totalroll;
	totalroll = 0;	
	if (bluepos > 40)
	bluepos = bluepos - 40;
		
	bluepawn = document.getElementById("a" + bluepos);
	bluepawn.style.backgroundColor = "blue";
	if (bluepos == redpos){
		setup(3); console.log("Red killed");

	}
	else if(bluepos == greenpos){
		setup(4); console.log("Green killed");

	}

	else if(bluepos == yellowpos){
		setup(1); console.log("Yellow killed");

	}
}
function MOVE_Red()
{
	redpawn.style.backgroundColor = "white";
	redpos = redpos + totalroll;
	totalroll = 0;
	if (redpos > 40)
	redpos = redpos - 40;
		
	redpawn = document.getElementById("a" + redpos);
	redpawn.style.backgroundColor = "red";
	if (redpos == bluepos){
		setup(2); console.log("Blue killed");

	}
	else if(redpos == greenpos){
		setup(4); console.log("Green killed");

	}

	else if(redpos == yellowpos){
		setup(1); console.log("Yellow killed");

	}
}
function MOVE_Green()
{
	greenpawn.style.backgroundColor = "white";
	greenpos = greenpos + totalroll;
	totalroll = 0;

	if (greenpos > 40)
	greenpos = greenpos - 40;
		
	greenpawn = document.getElementById("a" + greenpos);
	greenpawn.style.backgroundColor = "green";
	if (greenpos == bluepos){
		setup(2); console.log("Blue killed");

	}
	else if(greenpos == yellowpos){
		setup(1); console.log("Yellow killed");

	}

	else if(greenpos == redpos){
		setup(3); console.log("Red killed");

	}
}
function MOVE_Yellow()
{
	yellowpawn.style.backgroundColor = "white";
	yellowpos = yellowpos + totalroll;
	totalroll = 0;

	if (yellowpos > 40)
	yellowpos = yellowpos - 40;
																//can add smooth animation with e.g for (i=1; i<=totalroll; i++)
	yellowpawn = document.getElementById("a" + yellowpos);
	yellowpawn.style.backgroundColor = "yellow";
	//checkKill(yellowpos);

	if (yellowpos == bluepos){
		setup(2); console.log("Blue killed");

	}
	else if( yellowpos == greenpos){
		setup(4); console.log("Green killed");

	}

	else if(yellowpos == redpos){
		setup(3); console.log("Red killed");

	}
}
