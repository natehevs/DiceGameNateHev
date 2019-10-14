//create a dice game
	//create roll die function
	//create functions for each obstacle
	//create a way to keep track of HP

	function runGame(){
		let userName = getUserName();
		firstObstacle(userName);
	}

	function getUserName(){
		let userName = prompt("Please enter your name.")
		console.log(userName);
		return userName;
	}

	function firstObstacle(userName){
		alert("Hello " + userName + " welcome to the Dark Forest. Your objective is to get through all the obstacles without losing all your health! You will start with 100 HP. Good Luck!");
		let input = prompt("This is your first obstacle! A log lays over a valley you must choose a number from 1-3 to find out your fate!");
		let roll1 = randomWholeNum(3);
			if (roll1 === input) {
				alert("");
			}
			else {
				alert("");
			}

	}

	function secondObstacle(){

	}

	function thirdObstacle(){

	}

	function fourthObstacle(){

	}

	function fifthObstacle(){

	}

	function sixthObstacle(){

	}

function randomWholeNum(numberOfSides) {
	return Math.floor(Math.random() * numberOfSides) + 1;

}

runGame();