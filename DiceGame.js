

function runGame(){
	let player = {
		health: 100,
		currentObstacle: 1,
		username: ""
	};
	
	player.userName = getUserName();
		
	while(player.health > 0 && player.currentObstacle > 0){
			
		switch(player.currentObstacle) {
			case 1:
				player = firstObstacle(player);
				break;
			case 2:
				player = secondObstacle(player);
				break;
			case 3:
				player = thirdObstacle(player);
				break;
			case 4:
				player = fourthObstacle(player);
				break;
			case 5:
				player = fifthObstacle(player);
				break;
			case 6:
				player = sixthObstacle(player);
				break;
		}
		if (player.health > 100){
			player.health = 100;
		}
	}	
	player = determineOutcome(player);
}

function determineOutcome(player) {
	if(player.health <= 0 && player.currentObstacle == 0) {
		alert("You have died! Refresh page to play again.");
	} 
	else if (player.health <= 0){
		alert("You have died! Refresh page to play again.");
		
	}
	else if(player.currentObstacle == 0 && player.health > 0){
		alert("You have WON!!! Refresh page to play again.")
	}
	else if(player.currentObstacle == -1){
		alert("You and the Dragon rule the Dark Forest now! Refresh page to play again.")
	}
	else {
		alert("anything else");
	}
}

function getUserName(){
	let userName = prompt("Please enter your name.")
	console.log(userName);
	return userName;
}

function firstObstacle(player){
	alert("Hello " + player.userName + " welcome to the Dark Forest. Your objective is to get through all the obstacles without losing all your health! You will start with 100 HP. Good Luck!");
	alert("This is your first obstacle! A log lays over a valley, you must try and cross it! Roll a  3 side die to determine your fate! Your HP is " + player.health);
	let roll1 = randomWholeNum(3);
		if (roll1 == 1) {
			alert("WOW! You safely cross the log with no problem!");
			player.currentObstacle++;
			console.log(roll1);
		}
		else if(roll1 == 2) {
			alert("You begin to run across the log but you trip taking 10 HP. You still crossed though!");
			player.health -= 10;
			player.currentObstacle++;
			console.log(roll1);
		}
		else if(roll1 == 3) {
			alert("You tried to cross the log but you are very uncordinated and fell to your DEATH!!!");
			player.currentObstacle = 0;
			player.health = 0;
		}
			return player;
}

function secondObstacle(player){
	alert("This is your second obstacle! You come to a sheer cliff face with a vine wall going up it! Roll a  4 side die to determine your fate! HP = " + player.health);
	let roll2 = randomWholeNum(4);
		if (roll2 == 1) {
			alert("WOW! You safely climb the wall with no problem!");
			player.currentObstacle++;
			console.log(roll2);
		}
		else if(roll2 == 2) {
			alert("You start climbing the vine wall when a rock dislodges above you and strikes you in the head! You manage to hang on and make it to the top but you lose 20 HP!");
			player.health -= 20;
			player.currentObstacle++;
			console.log(roll2);
		}
		else if(roll2 == 3) {
			alert("You slip and fall to the ground, luckily you survived! You lose 50 HP and have to redo the obstacle!");
			console.log(roll2);
			player.health -= 50;
		}
		else if(roll2 == 4) {
			alert("You are not built for climbing and slip and fall to your DEATH!!!");
			console.log(roll2);
			player.health = 0;
			player.currentObstacle = 0;
		}
		return player;
}

function thirdObstacle(player){
	alert("You come up to your third obastacle. You see a vine hanging over a raging river, and you must roll a 5 side die to determine the fate of your swing across! HP = " + player.health);
	let roll3 = randomWholeNum(5);
	if (roll3 == 1) {
		alert("WOW you are insane! You safely crossed the river without any problem!");
		player.currentObstacle++;
		console.log(roll3);
	}
	else if(roll3 == 2) {
		alert("You begin your swing across and all of the sudden a Mythical Healing Fish jumps and touches you mid air! You safely cross the river and gain 20 HP!");
		player.health += 20;
		player.currentObstacle++;
		console.log(roll3);
		}
		else if(roll3 == 3) {
			alert("You try to grab the hanging vine but slip and fall into the river! Luckily you are a great swimmer, and somehow you float downstream and it takes you to the exit of the Dark Forest! Congrats you WON!!!");
			console.log(roll3);
			player.currentObstacle = 0;
		}
		else if(roll3 == 4) {
			alert("During your swing the vine breaks and hit the ground hard on the opposite shore! You lose 20 HP but you made it across!");
			player.health -= 20;
			player.currentObstacle++;
			console.log(roll3);
		}
		else if(roll3 == 5) {
			alert("You try and swing across the river but fail and drown to your DEATH.");
			player.health = 0;
			player.currentObstacle = 0;
			console.log(roll3);
		}
		return player;
}

function fourthObstacle(player){
	alert("WOW! You have made it to the fourth obstacle which is a HUGE gorilla! Roll a 6 side die to determine your fate! HP = " + player.health);
	let roll4 = randomWholeNum(6);
	if (roll4 == 1) {
		alert("You are extremely sneaky and go past the gorilla easily!");
		player.currentObstacle++;
		console.log(roll4);
	}
	else if(roll4 == 2) {
		alert("You find a banana nearby and hand it to the gorilla... he then seems to want you to follow him. He leads you out of the forest and you WON!");
		console.log(roll4);
		player.currentObstacle = 0;
	}
	else if(roll4 == 3) {
		alert("The gorilla attacks you but you play dead and it stops so you can pass. You lose 10 HP.");
		player.health -= 10;
		player.currentObstacle++;
		console.log(roll4);
	}
	else if(roll4 == 4) {
		alert("The gorilla is friendly and hands you a banana which you eat and heal 10 HP. You walk to next obstacle.");
		player.health += 10;
		player.currentObstacle++;
		console.log(roll4);
	}
	else if(roll4 == 5) {
		alert("The gorilla is hostile and you have to fight it! After a long and difficult battle you manage to beat the gorilla and escape the obstacle, but you lose 30 HP.");
		player.health -= 30;
		player.currentObstacle++;
		console.log(roll4);
	}
	else if(roll4 == 6) {
		alert("The gorilla is extremely strong and violent! He KILLS you!");
		console.log(roll4);
		player.currentObstacle = 0;
		player.health = 0;
	}
	return player;
}

function fifthObstacle(player){
	alert("You approach the fifth obstacle which seems to be a booby trapped pathway! Roll a 7 sided die to determine your fate! HP = " + player.health);
	let roll5 = randomWholeNum(7);	
		if (roll5 == 1) {
			alert("You begin to walk, but nothing happens. You safely make it through no problem!");
			player.currentObstacle++;
			console.log(roll5);
		}
		else if(roll5 == 2) {
			alert("You nearly make it through the pathway when all of the sudden you set off a booby trap and an arrow gets shot into your leg. You limp to the next obstacle but lose 40 HP!");
			player.health -= 40;
			player.currentObstacle++;
			console.log(roll5);
		}
		else if(roll5 == 3) {
			alert("You start sneaking through the bushes instead of walking the pathway. You find a secret HEALING POTION in a bush and it heals you to FULL HP! And you make it to next obstacle.");
			player.health += 100;
			player.currentObstacle++;
			console.log(roll5);
		}
		else if(roll5 == 4) {
			alert("You begin your walk, and you accidentally step on a trapdoor! You fall into a slide that drops you off at the beginning of the Dark Forest! You must continue from the first obstacle.");
			console.log(roll5);
			player.currentObstacle = 1;
			}
		else if(roll5 == 5) {
			alert("You begin your walk, and you accidentally step on a trapdoor! You fall into a slide that drops you off at the END of the Drak Forest! You made it out!");
			console.log(roll5);
			player.currentObstacle = 0;
		}
		else if(roll5 == 6) {
			alert("You start walking down the pathway and all of the sudden a HUGE boulder starts rolling toward you! It forces you back to the beginning of the obstacle!");
			console.log(roll5);
			
		}
		else if(roll5 == 7) {
			alert("Luck is not on your side. You step on a pressure plate and an arrow hits you in the head killing you!!!");
			console.log(roll5);
			player.health = 0;
			player.currentObstacle = 0;
		}
		return player;
}

function sixthObstacle(player){
	alert("WOAH! You have made it to the final obstacle!!! Good Luck it is the hardest one yet it's a DRAGON!!! HP = " + player.health);
	let roll6 = randomWholeNum(8);
	if (roll6 == 1) {
		alert("I swear you are the luckiest person ever!!! You escape untouched after dodging all attacks! YOU WIN!");
		console.log(roll6);
		player.currentObstacle = 0;
	}
	else if(roll6 == 2) {
		alert("You get set on fire by the dragon losing 20 HP but manage to escape past it!");
		console.log(roll6);
		player.health -= 20;
		player.currentObstacle = 0;
	}
	else if(roll6 == 3) {
		alert("You try and fight the dragon but he tail whips you and you lose 10 HP and he sends you back to the beginning of this obstacle.");
		console.log(roll6);
		player.health -= 10;
		
	}
	else if(roll6 == 4) {
		alert("The dragon attacks and bites you, but he realizes humans taste bad. You lose 30 HP but escape.");
		player.health -= 30;
		player.currentObstacle = 0;
		console.log(roll6);
	}
	else if(roll6 == 5) {
		alert("The massive dragon flaps its giant wings and sends you flying back to the beginning of the forest!");
		console.log(roll6);
		player.currentObstacle = 1;
	}
	else if(roll6 == 6) {
		alert("The lonely dragon is just looking for a friend. You become his friend and decide to stay in the Dark Forest to rule over it with the help of the dragon.");
		console.log(roll6);
		player.currentObstacle = -1;
	}
	else if(roll6 == 7) {
		alert("You and the dragon have a massive battle! Somehow you manage to find a sword nearby and lunge it into the dragons heart! This battle didn't go unharmed though! You lost 70 HP but escaped!");
		player.health -= 70;
		player.currentObstacle = 0;
		console.log(roll6);
	}
	else if(roll6 == 8) {
		alert("The dragon is just way to powerfull for you and it KILLS you easily!");
		console.log(roll6);
		player.health = 0;
		player.currentObstacle = 0;
	}
	return player;
}

function randomWholeNum(numberOfSides) {
	return Math.floor((Math.random() * numberOfSides) + 1);
}

runGame();