//require card constructor, json data and inquirer

var BasicCard = require("./lib/basic");
var cardData = require("./basic.json");
var inquirer = require("inquirer");

// console.log(cardData);
var currentScore = 0;
var initialIndex = 0;
var cardArray = [];
// Creating a new card for each question using our BasicCard constructor
  for (var i = 0; i < cardData.length; i++) {
    currentCard = new BasicCard(cardData[i].front, cardData[i].back);
    cardArray.push(currentCard);
  }

// Display each card to users in terminal, using initialIndex value as increment to loop through array

// ************** WHY DON'T WE HAVE TO DEFINE CURRENTINDEX AS VAR CURRENTINDEX? AND HOW DOES IT KEEP INCREMENTING IF IT'S NOT DEFINED?
playRound(cardArray, initialIndex);

function playRound(cardArray, currentIndex) {
  // If we have't gone through all the cards, ask the user the next question
  console.log("current index line 23: " + currentIndex);

  if (currentIndex < cardArray.length) {
    promptUser(cardArray, currentIndex);
  }
  // Otherwise end the game
  else {
    console.log("Game Over. The final score is: " + currentScore);
  }
}

function promptUser(cardArray, currentIndex) {
  console.log("current index line 35: " + currentIndex);
	var card = cardArray [currentIndex];
	inquirer.prompt([{
    type: "input",
    name: "text",
    message: card.front + "\nAnswer:"
	  }]).then(function(answer) {
	    // Checking to see if their answer was correct, regardless of casing
	    if (answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()) {
	      
        currentScore++;
        console.log("You are correct!");
	    } 
	    else {
	      // Otherwise let them know they were incorrect
	      console.log("Incorrect! The correct answer is '" + card.back + ".");
	    }

    // Increase our current card index
    currentIndex++;
    // Just a seperator
    console.log("current index line 56: " + currentIndex);
    console.log("-------------------------");
    // Play the next round with our updated score and card index
    playRound(cardArray, currentIndex);
	});
}