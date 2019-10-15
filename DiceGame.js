

	function runGame(){
		let playerHealth = 100;
		if (playerHealth <= 0){
			alert("You have died!");
			return runGame();
		}
		else if (playerHealth > 100){
			playerHealth = 100;
		}
		let userName = getUserName();
		playerHealth = firstObstacle(userName, playerHealth);
		playerHealth = secondObstacle(playerHealth);
		playerHealth = thirdObstacle(playerHealth);
		playerHealth = fourthObstacle(playerHealth);
		playerHealth = fifthObstacle(playerHealth);
		playerHealth = sixthObstacle(playerHealth);
	}

	function getUserName(){
		let userName = prompt("Please enter your name.")
		console.log(userName);
		return userName;
	}

	function firstObstacle(userName, playerHealth){
		alert("Hello " + userName + " welcome to the Dark Forest. Your objective is to get through all the obstacles without losing all your health! You will start with 100 HP. Good Luck!");
		alert("This is your first obstacle! A log lays over a valley, you must try and cross it! Roll a  3 side die to determine your fate! Your HP is " + playerHealth);
		let roll1 = randomWholeNum(3);
			if (roll1 == 1) {
				alert("WOW! You safely cross the log with no problem!");
				console.log(roll1);
			}
			else if(roll1 == 2) {
				alert("You begin to run across the log but you trip taking 10 HP. You still crossed though!");
				playerHealth -= 10;
				console.log(roll1);
			}
			else if(roll1 == 3) {
				alert("You tried to cross the log but you are very uncordinated and fell to your DEATH!!!");
				return runGame();
			}
			return playerHealth;
	}

	function secondObstacle(userName, playerHealth){
		alert("This is your second obstacle! You come to a sheer cliff face with a vine wall going up it! Roll a  4 side die to determine your fate! HP = " + playerHealth);
		let roll2 = randomWholeNum(4);
			if (roll2 == 1) {
				alert("WOW! You safely climb the wall with no problem!");
				console.log(roll2);
			}
			else if(roll2 == 2) {
				alert("You start climbing the vine wall when a rock dislodges above you and strikes you in the head! You manage to hang on and make it to the top but you lose 20 HP!");
				playerHealth -= 20;
				console.log(roll2);
			}
			else if(roll2 == 3) {
				alert("You slip and fall to the ground, luckily you survived! You lose 50 HP and have to redo the obstacle!");
				console.log(roll2);
				playerHealth -= 50;
				return secondObstacle(playerHealth);
			}
			else if(roll2 == 4) {
				alert("You are not built for climbing and slip and fall to your DEATH!!!");
				console.log(roll2);
				return runGame();
			}
			return playerHealth;
	}

	function thirdObstacle(userName, playerHealth){
		alert("You come up to your third obastacle. You see a vine hanging over a raging river, and you must roll a 5 side die to determine the fate of your swing across! HP = " + playerHealth);
		let roll3 = randomWholeNum(5);
			if (roll3 == 1) {
				alert("WOW you are insane! You safely crossed the river without any problem!");
				console.log(roll3);
			}
			else if(roll3 == 2) {
				alert("You begin your swing across and all of the sudden a Mythical Healing Fish jumps and touches you mid air! You safely cross the river and gain 20 HP!");
				playerHealth += 20;
				console.log(roll3);
			}
			else if(roll3 == 3) {
				alert("You try to grab the hanging vine but slip and fall into the river! Luckily you are a great swimmer, and somehow you float downstream and it takes you to the exit of the Dark Forest! Congrats you WON!!!");
				console.log(roll3);
				return runGame();
			}
			else if(roll3 == 4) {
				alert("During your swing the vine breaks and hit the ground hard on the opposite shore! You lose 20 HP but you made it across!");
				playerHealth -= 20;
				console.log(roll3);
			}
			else if(roll3 == 5) {
				alert("You try and swing across the river but fail and drown to your DEATH.");
				console.log(roll3);
				return runGame();
			}
			return playerHealth;
	}

	function fourthObstacle(userName, playerHealth){
		alert("WOW! You have made it to the fourth obstacle which is a HUGE gorilla! Roll a 6 side die to determine your fate! HP = " + playerHealth);
		let roll4 = randomWholeNum(6);
			if (roll4 == 1) {
				alert("You are extremely sneaky and go past the gorilla easily!");
				console.log(roll4);
			}
			else if(roll4 == 2) {
				alert("You find a banana nearby and hand it to the gorilla... he then seems to want you to follow him. He leads you out of the forest and you WON!");
				console.log(roll4);
				return runGame();
			}
			else if(roll4 == 3) {
				alert("The gorilla attacks you but you play dead and it stops so you can pass. You lose 10 HP.");
				playerHealth -= 10;
				console.log(roll4);
			}
			else if(roll4 == 4) {
				alert("The gorilla is friendly and hands you a banana which you eat and heal 10 HP. You walk to next obstacle.");
				playerHealth += 10;
				console.log(roll4);
			}
			else if(roll4 == 5) {
				alert("The gorilla is hostile and you have to fight it! After a long and difficult battle you manage to beat the gorilla and escape the obstacle, but you lose 30 HP.");
				playerHealth -= 30;
				console.log(roll4);
			}
			else if(roll4 == 6) {
				alert("The gorilla is extremely strong and violent! He KILLS you!");
				console.log(roll4);
				return runGame();
			}
			return playerHealth;
	}

	function fifthObstacle(userName, playerHealth){
		alert("You approach the fifth obstacle which seems to be a booby trapped pathway! Roll a 7 sided die to determine your fate! HP = " + playerHealth);
		let roll5 = randomWholeNum(7);
			if (roll5 == 1) {
				alert("You begin to walk, but nothing happens. You safely make it through no problem!");
				console.log(roll5);
			}
			else if(roll5 == 2) {
				alert("You nearly make it through the pathway when all of the sudden you set off a booby trap and an arrow gets shot into your leg. You limp to the next obstacle but lose 40 HP!");
				playerHealth -= 40;
				console.log(roll5);
			}
			else if(roll5 == 3) {
				alert("You start sneaking through the bushes instead of walking the pathway. You find a secret HEALING POTION in a bush and it heals you to FULL HP! And you make it to next obstacle.");
				playerHealth += 100;
				console.log(roll5);
			}
			else if(roll5 == 4) {
				alert("You begin your walk, and you accidentally step on a trapdoor! You fall into a slide that drops you off at the beginning of the Dark Forest! You must continue from the first obstacle.");
				console.log(roll5);
				return firstObstacle(playerHealth);
			}
			else if(roll5 == 5) {
				alert("You begin your walk, and you accidentally step on a trapdoor! You fall into a slide that drops you off at the END of the Drak Forest! You made it out!");
				console.log(roll5);
				return runGame();
			}
			else if(roll5 == 6) {
				alert("You start walking down the pathway and all of the sudden a HUGE boulder starts rolling toward you! It forces you back to the beginning of the obstacle!");
				console.log(roll5);
				return fifthObstacle(playerHealth);
			}
			else if(roll5 == 7) {
				alert("Luck is not on your side. You step on a pressure plate and an arrow hits you in the head killing you!!!");
				console.log(roll5);
				return runGame();
			}
			return playerHealth;
	}

	function sixthObstacle(userName, playerHealth){
		alert("WOAH! You have made it to the final obstacle!!! Good Luck it is the hardest one yet it's a DRAGON!!! HP = " + playerHealth);
		let roll6 = randomWholeNum(8);
			if (roll6 == 1) {
				alert("I swear you are the luckiest person ever!!! You escape untouched after dodging all attacks! YOU WIN!");
				console.log(roll6);
			}
			else if(roll6 == 2) {
				alert("You get set on fire by the dragon losing 20 HP but manage to escape past it!");
				console.log(roll6);
			}
			else if(roll6 == 3) {
				alert("You try and fight the dragon but he tail whips you and you lose 10 HP and he sends you back to the beginning of this obstacle.");
				console.log(roll6);
				playerHealth -= 10;
				return sixthObstacle(playerHealth);
			}
			else if(roll6 == 4) {
				alert("The dragon attacks and bites you, but he realizes humans taste bad. You lose 30 HP but escape.");
				playerHealth -= 30;
				console.log(roll6);
			}
			else if(roll6 == 5) {
				alert("The massive dragon flaps its giant wings and sends you flying back to the beginning of the forest!");
				console.log(roll6);
				return firstObstacle(playerHealth);
			}
			else if(roll6 == 6) {
				alert("The lonely dragon is just looking for a friend. You become his friend and decide to stay in the Dark Forest to rule over it with the help of the dragon.");
				console.log(roll6);
			}
			else if(roll6 == 7) {
				alert("You and the dragon have a massive battle! Somehow you manage to find a sword nearby and lunge it into the dragons heart! This battle didn't go unharmed though! You lost 70 HP but escaped!");
				playerHealth -= 70;
				console.log(roll6);
			}
			else if(roll6 == 8) {
				alert("The dragon is just way to powerfull for you and it KILLS you easily!");
				console.log(roll6);
				return runGame();
			}
			return playerHealth;
	}

function randomWholeNum(numberOfSides) {
	return Math.floor((Math.random() * numberOfSides) + 1);

}

runGame();