


//require inquirer cdn to prompt user to answer questions
var inquirer = require ("inquirer");

// store questions / answers in an array in the event you need to access them down the road 
var basicCardArray =  [];

// constructor which can be used to create objects with the ".front" & ".back" properties and printCard method
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  

  //Asks the question on the front of the card
  this.question = function (){
  	console.log("Question: " + this.front);
  }

  //Displays the answer from the front of the card

  this.answer = function (){
  	console.log("Answer: " + this.back);
  }

  // pushes the front / back properties of the card into an array
  this.arrayPush = function (){
  	basicCardArray.push(this.front);
  	basicCardArray.push(this.back);
  }

  //Asks user the question and then displays the answer depending on if the answer is right. I should probably convert the input to all caps
  this.askQuestion = function (){
  	var that = this;
  	var count = 0;
	
	if (count <= 1) {

		count++;

	inquirer.prompt([
		{
			name: "question",
			message: this.front

		}


	]).then (function(answers){

		
					if (answers.question === that.back) {
						console.log("You're right! The answer is " + that.back);
					} else {
						console.log("you're wrong, the answer is: " + that.back);
					}
	});

  	}
}

};


module.exports = BasicCard;
// store new cards in array


