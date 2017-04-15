
var basicCardArray =  [];
// constructor which can be used to create objects with the ".front" & ".back" properties and printCard method
var inquirer = require ("inquirer");



var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  
  this.question = function (){
  	console.log("Question: " + this.front);
  }
  this.answer = function (){
  	console.log("Answer: " + this.back);
  }

  this.arrayPush = function (){
  	basicCardArray.push(this.front);
  	basicCardArray.push(this.back);
  	console.log(basicCardArray);
  }

  this.askQuestion = function (){
  	var that = this;

	inquirer.prompt([
		{
			name: "question",
			message: this.front

		}

	]).then (function(answers){
		//compares answers
		console.log(answers.question);
		console.log(that.back);
		if (answers.question === that.back) {
			console.log("You're right!")
		} else {
			console.log("you're wrong")
		}
	});


  }

};





module.exports = BasicCard;
// store new cards in array


