var bluepos;
var bluepawn = document.getElementById("a23");

var yellowpos;
var yellowpawn = document.getElementById("a33");

var greenpos;
var greenpawn = document.getElementById("a3");

var redpos;
var redpawn = document.getElementById("a13");

var rollnum;
var totalroll = 0;

var whichplayer = 1;

//document.getElementById("btnmove").disabled = true;


//document.getElementById("yellow-btn").disabled = true;
//document.getElementById("green-btn").disabled = true;
//document.getElementById("blue-btn").disabled = true;
//document.getElementById("red-btn").disabled = true;
function startgame()
{
	var startplayerroll = Math.floor(Math.random() * 6) + 1;
	document.getElementById("startgame").innerHTML = startplayerroll;
	console.log(startplayerroll);

	if(startplayerroll == 6){
		//document.getElementById("yellow-btn").disabled = false;
		//document.getElementById("green-btn").disabled = false;
		//document.getElementById("blue-btn").disabled = false;
		//document.getElementById("red-btn").disabled = false;		
		document.getElementById("btnstartgame").disabled = true;
		document.getElementById("btnmove").disabled = false;
		
		setup("setup");
		
	}
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
		if(totalroll != 0){								//hot-fix to showing 0 on Total-Roll
			console.log(totalroll + " Total-Roll"); 	
			console.log(""); 							
		}	
	}											
}
function rollRound(){
	 
	console.log(whichplayer + " ten gracz");
	roll();
	switch(whichplayer){
	
	case 1:
		if (bluepos == undefined){
			if (totalroll > 5){
				bluepos = 23;
			}
			totalroll = 0;
		}
		else{
			document.getElementById("startgame").innerHTML = "Rusza się gracz: Niebieski";
			MOVE_Blue();
		}
	break;

	case 2:
		if (yellowpos == undefined){
			if (totalroll > 5){
				yellowpos = 33;
			}
			totalroll = 0;
		}
		else{
			document.getElementById("startgame").innerHTML = "Rusza się gracz: Żółty";
			MOVE_Yellow();
		}
	break;
		
	case 3:
		if (greenpos == undefined){
			if (totalroll > 5){
				greenpos = 3;
			}
			totalroll = 0;
		}
		else{
			document.getElementById("startgame").innerHTML = "Rusza się gracz: Zielony";
			MOVE_Green();
		}
	break;
		
	case 4:
		if (redpos == undefined){
			if (totalroll > 5){
				redpos = 13;
			}
			totalroll = 0;
		}
		else{
			document.getElementById("startgame").innerHTML = "Rusza się gracz: Czerwony";
			MOVE_Red();
		}
	break;
	}

	if (whichplayer == 4)
	whichplayer -= 4;

	whichplayer ++;
	
	
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

	case "bluekill":
	bluepawn = document.getElementById("a23");
	bluepawn.style.backgroundColor = "blue";
	break;
	case "yellowkill":
	yellowpawn = document.getElementById("a33");
	yellowpawn.style.backgroundColor = "yellow";
	break;
	case "greenkill":
	greenpawn = document.getElementById("a3");
	greenpawn.style.backgroundColor = "green";
	break;
	case "redkill":
	redpawn = document.getElementById("a13");
	redpawn.style.backgroundColor = "red";
	break;
	case "setup":
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
function MOVE_Blue()
{
	bluepawn.style.backgroundColor = "white";
	bluepos = bluepos + totalroll;
	animation(1);
	totalroll = 0;	
	//if (bluepos > 40)
	//bluepos = bluepos - 40;
	//	
	//bluepawn = document.getElementById("a" + bluepos);
	//bluepawn.style.backgroundColor = "blue";
	if (bluepos == redpos){
		setup("redkill"); console.log("Red killed");

	}
	else if(bluepos == greenpos){
		setup("greenkill"); console.log("Green killed");

	}

	else if(bluepos == yellowpos){
		setup("yellowkill"); console.log("Yellow killed");

	}
}
function MOVE_Red()
{
	redpawn.style.backgroundColor = "white";
	redpos = redpos + totalroll;
	animation(4);
	totalroll = 0;
	//if (redpos > 40)
	//redpos = redpos - 40;
	//	
	//redpawn = document.getElementById("a" + redpos);
	//redpawn.style.backgroundColor = "red";
	if (redpos == bluepos){
		setup("bluekill"); console.log("Blue killed");

	}
	else if(redpos == greenpos){
		setup("greenkill"); console.log("Green killed");

	}

	else if(redpos == yellowpos){
		setup("yellowkill"); console.log("Yellow killed");

	}
}
function MOVE_Green()
{
	greenpawn.style.backgroundColor = "white";
	greenpos = greenpos + totalroll;
	animation(3);
	totalroll = 0;

	//if (greenpos > 40)
	//greenpos = greenpos - 40;
	//	
	//greenpawn = document.getElementById("a" + greenpos);
	//greenpawn.style.backgroundColor = "green";
	if (greenpos == bluepos){
		setup("bluekill"); console.log("Blue killed");

	}
	else if(greenpos == yellowpos){
		setup("yellowkill"); console.log("Yellow killed");

	}

	else if(greenpos == redpos){
		setup("redkill"); console.log("Red killed");

	}
}
function MOVE_Yellow()
{
	yellowpawn.style.backgroundColor = "white";
	yellowpos = yellowpos + totalroll;
	animation(2);
	totalroll = 0;

	//if (yellowpos > 40)
	//yellowpos = yellowpos - 40;
	//
	//
	////can add smooth animation with e.g for (i=1; i<=totalroll; i++)
	//yellowpawn = document.getElementById("a" + yellowpos);
	//yellowpawn.style.backgroundColor = "yellow";
	////checkKill(yellowpos);

	if (yellowpos == bluepos){
		setup("bluekill"); console.log("Blue killed");

	}
	else if( yellowpos == greenpos){
		setup("greenkill"); console.log("Green killed");

	}

	else if(yellowpos == redpos){
		setup("redkill"); console.log("Red killed");

	}
}
function animation(player) {
	switch(player){
		case 1:
			for(i=0; i<=totalroll; i++){
			bluepawn.style.backgroundColor = "white";
			bluepos ++;
				if (bluepos > 40)
				{bluepos = bluepos - 40;}
			bluepawn = document.getElementById("a" + bluepos);
			bluepawn.style.backgroundColor = "blue";
			//await sleep(1000);
			}
		break;
	
		case 2:
			for(i=0; i<=totalroll; i++){
				yellowpawn.style.backgroundColor = "white";
				yellowpos ++;
					if (yellowpos > 40)
					{yellowpos = yellowpos - 40;}
				yellowpawn = document.getElementById("a" + yellowpos);
				yellowpawn.style.backgroundColor = "yellow";
				//await sleep(1000);
			}
		break;

		case 3:
			for(i=0; i<=totalroll; i++){
				greenpawn.style.backgroundColor = "white";
				greenpos ++;
					if (greenpos > 40)
					{greenpos = greenpos - 40;}
				greenpawn = document.getElementById("a" + greenpos);
				greenpawn.style.backgroundColor = "green";
				//await sleep(1000);
			}
		break;
	
		case 4:
			for(i=0; i<=totalroll; i++){
				redpawn.style.backgroundColor = "white";
				redpos ++;
					if (redpos > 40)
					{redpos = redpos - 40;}
				redpawn = document.getElementById("a" + redpos);
				redpawn.style.backgroundColor = "red";
				//await sleep(1000);
			}
		break;
	
	}
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}