//require .js files to use the constructors

var BasicCard = require ("./basicFlashcard.js");
var ClozeCard = require ("./clozeFlashcard.js");

//create new instance of the BasicCard
var basicCard1 = new BasicCard("What is the capital of Washington?", "Olympia");
var basicCard2 = new BasicCard("What is the capital of Georgia?", "Atlanta");

var basicQuestions = [basicCard1, basicCard2];

//print the BasicCards in the console

// basicCard1.question();
// basicCard1.answer();

// basicCard1.askQuestion();
// basicCard2.askQuestion();


//create new instance of the ClozeCard
var clozeCard1 = new ClozeCard("Olympia is the capital of Washington.", "Olympia");
var clozeCard2 = new ClozeCard("Atlanta is the capital of Georgia.", "Atlanta");

var clozeQuestions = [clozeCard1, clozeCard2];

// ask user if they want basic or cloze

// based on that response, iterate through the appropriate array of questions and 
// ask each one with inquirer
var count = 0;
function askQuestion() {
  	if (count <= 1) {
		var currentQuestion = clozeQuestions[count]
		inquirer.prompt([
			{
				name: "question",
				message: "... is the capital of Washington" //currentQuestions replaced text (...)

			}
		]).then (function(answers){
			// currentQuestion is in scope here
			if (answers.question === currentQuestion.back) {
				console.log("You're right! The answer is " + currentQuestion.back);
			} else {
				console.log("you're wrong, the answer is: " + currentQuestion.back);
			}
			count++;
			askQuestion();
		});
  	}
}
// this kicks off the recursion the first time
if count === 0 {
	askQuestion()
} else {
	console.log('you\'re done!')
}


//print the ClozeCards in the console
// clozeCard1.question();
// clozeCard1.answer();

// clozeCard2.question();
// clozeCard2.answer();