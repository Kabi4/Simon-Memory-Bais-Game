const redbutton = document.querySelector('#red');
const bluebutton = document.querySelector('#blue');
const greenbutton = document.querySelector('#green');
const pinkbutton = document.querySelector('#pink');
const leveltxt = document.querySelector('#level');
const gameController = document.querySelector("#start");
const link = document.querySelector('#reset');
var user=[];
var stored=[];
var level=0;
var chance=0;
var userTurn = false;
function change(bools){
	 redbutton.disabled = bools;
	 bluebutton.disabled = bools;
	 greenbutton.disabled = bools;
	 pinkbutton.disabled = bools;
}

function getRandom(){
	let number = Math.floor(Math.random()*4)+1;
	return number;
}
function tapRed(){
	redbutton.style.backgroundColor='red';
	playSound("red");
	setTimeout(resetRed,200);
}
function resetRed(){
	redbutton.style.backgroundColor='darkred';
	if(userTurn===true){user.push(1);
		checkUser();}
}
function tapGreen(){
	greenbutton.style.backgroundColor='lightgreen';
	playSound("green");
	setTimeout(resetGreen,200);
}
function resetGreen(){
	greenbutton.style.backgroundColor='darkgreen';
	if(userTurn===true){user.push(2);
		checkUser();}
}
function tapBlue(){
	bluebutton.style.backgroundColor='blue';
	playSound("blue");
	setTimeout(resetBlue,200);
}
function resetBlue(){
	bluebutton.style.backgroundColor='darkblue';
	if(userTurn===true){user.push(3);
		checkUser();}
}
function tapPink(){
	pinkbutton.style.backgroundColor='pink';
	playSound("pink");
	setTimeout(resetPink,200);
}
function resetPink(){
	pinkbutton.style.backgroundColor='hotpink';
	if(userTurn===true){user.push(4);
		checkUser();}
}

function randomPlay(ele){
	if (ele==1){
			setTimeout(tapRed(),200);
		}
		else if(ele==2){
			setTimeout(tapGreen(),200);
		}
		else if(ele==3){
			setTimeout(tapBlue(),200);
		}
		else if(ele==4){
			setTimeout(tapPink(),200);
	}
}

function changeUser(){
	userTurn=true;
}

function start(){
	userTurn=false;
	gameController.textContent="Game On!!";
	gameController.disabled=true;
	change(true);
	level++;
	leveltxt.textContent="Level : "+level;
	let rand = getRandom();
	randomPlay(rand);
	stored.push(rand);
	change(false);
	setTimeout(changeUser,300);
}

function insertNext(){
	user = [];
	chance=0;
	userTurn=false;
	change(true);
	level++;
	leveltxt.textContent="Level : "+level;
	let rand = getRandom();
	randomPlay(rand);
	stored.push(rand);
	change(false);
	setTimeout(changeUser,300);
}

function checkUser(){
	chance++;
	let z=user.length;
	let input = user[z-1];
	let predecided = stored[chance-1];
	if (input!==predecided){
		GameOver();
		playSound("wrong");
		return;
	}
	if (chance==level){
		setTimeout(insertNext,100);
	}
	
}

function GameOver(){
	change(true);
	link.href="index.html";
	gameController.disabled=false;
	gameController.textContent="Game Over! Play Again?";
	gameController.onClick="";
}
function playSound(name) {
  var audio = new Audio("Sounds/" + name + ".mp3");
  audio.play();
}
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 10);
