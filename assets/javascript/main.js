var BasicCard = require ("./basicFlashcard.js");
var ClozeCard = require ("./clozeFlashcard.js");


var basicCard1 = new BasicCard("What president do I miss?", "B");
var basicCard2 = new BasicCard("How many times was Pres. Jackson shot?", "Several");

// basicCard1.question();
// basicCard1.answer();
// basicCard1.arrayPush();


// basicCard2.question();
// basicCard2.answer();
// basicCard2.arrayPush();

var clozeCard1 = new ClozeCard("George Washington was the first president", "George Washington");
var clozeCard2 = new ClozeCard("Donald Trump is our new president and our president is Donald Trump", "Donald Trump");

clozeCard1.question();
clozeCard1.answer();

// basicCard1.askQuestion();

//dependency for inquirer npm package
// var inquirer = require ("inquirer");

//loop to run prompt multiple times

// for (var i = 0; i <1; i++) {
// 	//runs inquirer and asks questions
// 	inquirer.prompt([
// 		{
// 			name: "question",
// 			message: basicCard1.front

// 		}
// 	]).then (function(answers){
// 		//compares answers
// 		console.log(basicCard1.back);
// 	});

// }
