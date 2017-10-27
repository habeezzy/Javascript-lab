
var userhealth = 40
var enemyhealth = 10
var wins = 0; 
var playing = prompt("Do you want to play a game?");
var username = "";

if (playing === "yes") {
  username = prompt("Enter your name");
  

while (playing === "yes" ) {
  if (wins === 3) {
    console.log("you won the game!");
    break;
  } 
  if (userhealth <=0) {
    console.log("You have been defeated");
    break;
  }
  enemyhealth -= Math.floor((Math.random() * 2) + 1);
  userhealth -= Math.floor((Math.random() * 2) + 1);
  	console.log(username+" health is " + userhealth);
    console.log("Grant the mighty chicken's health is " + enemyhealth);
   if (enemyhealth <=0 ) {
    wins ++;
    enemyhealth = 10;
    console.log("You have won the fight!");
  }
}
} 