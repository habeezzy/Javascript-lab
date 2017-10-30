
var userhealth = 40
var enemyhealth = 10
var wins = 0; 
var username = "";
var yourMove = "";





var gameStatus = true;

function startGame() {
 var playing = prompt("Do you want to play a game?");
  if (playing === "yes") {
   var username = prompt("Enter your name");
    startCombat(username);
}    
}  
  
  startGame();
  
  
  function startCombat(username) {
 
  
 while (gameStatus === true) {
    yourMove = prompt("Do you want to attack or quit?");
 if(yourMove === "attack") {
  userhealth -= getDamage();
  enemyhealth -= getDamage();

  
  if (wins === 3) {
    console.log("you won the game!");    
    gameStatus = false;                         
  } 
  if (userhealth <=0) {
    console.log("You have been defeated");
    break;
  }
 
    console.log(username+" health is " + userhealth);
    console.log("Grant the mighty chicken's health is " + enemyhealth);
   if (enemyhealth <=0 ) {                                  
    wins ++;
    enemyhealth = 10;
    console.log("You have won the fight!");           
  }
} else if (yourMove === "quit") {
  gameStatus = false;
}
  
}
  }

   

function getDamage() {
 return Math.floor((Math.random() * 5) + 1); 
}







/*var userhealth = 40
var enemyhealth = 10
var wins = 0; 
var playing = prompt("Do you want to play a game?");
var username = "";

if (playing === "yes") {
  username = prompt("Enter your name");      // entire loop is inside if statement because we dont want is to run IF the condition is no.//
  

while (playing === "yes" ) {
  if (wins === 3) {
    console.log("you won the game!");    
    break;                           //stops loop from running//
  } 
  if (userhealth <=0) {
    console.log("You have been defeated");
    break;
  }
  enemyhealth -= Math.floor((Math.random() * 2) + 1);   //first number and second number are the ranges,//
  userhealth -= Math.floor((Math.random() * 2) + 1);
  	console.log(username+" health is " + userhealth);
    console.log("Grant the mighty chicken's health is " + enemyhealth);
   if (enemyhealth <=0 ) {                                      //if enemy health gets to at least 0, the console logs message//
    wins ++;
    enemyhealth = 10;
    console.log("You have won the fight!");           
  }
}
}*/ 
