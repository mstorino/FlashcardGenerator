//dependency for inquirer npm package
var inquirer = require ("inquirer");

//constructor function for new cards
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  this.userAnswer = userAnswer;
};

//loop to run prompt multiple times

for (var i = 0; i <1; i++) {
	//runs inquirer and asks questions
	inquirer.prompt([
		{
			name: "question",
			message: this.front;

		}
	]).then (function(answers){
		//compares answers
		console.log("Answers");
	});

}
