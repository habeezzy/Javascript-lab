function getDamage() {
 return Math.floor((Math.random() * 5) + 1); 
}


var answer = prompt("do you want to attack, heal, or quit?")

var user = {
	name: prompt("Whats your name");
	wins: 0;
	health: 40;
	healsRemaining: 2;
	generateAttackDamage: function getDamage() {
    return Math.floor((Math.random() * 3) + 1);
    
    }


}


var enemy = {
	name: "Grant";
    health: 10;
	enemy.health -= getDamage
	generateAttackDamage: function getDamage() {
    return Math.floor((Math.random() * 3) + 1);
    }
	
    }
}


function StartGame () {

while (user.wins < 6) {

	if(answer === "attack") {
  user.health -= getDamage();
  enemy.health -= getDamage();
} else if  (answer === "heal") {
	console.log("Cool...see ya later");
} else 
  
}
}



