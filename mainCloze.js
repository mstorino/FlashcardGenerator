//require card constructor, json data and inquirer

var ClozeCard = require("./lib/cloze");
var cardData = require("./cloze.json");
var inquirer = require("inquirer");

// console.log(cardData);
var currentScore = 0;
var initialIndex = 0;
var cardArray = [];
// Creating a new card for each question using our BasicCard constructor
  for (var i = 0; i < cardData.length; i++) {
    currentCard = new ClozeCard(cardData[i].partial, cardData[i].cloze, cardData[i].question);
    cardArray.push(currentCard);
  }

playRound(cardArray, initialIndex);

function playRound(cardArray, currentIndex) {
  // If we have't gone through all the cards, ask the user the next question

  if (currentIndex < cardArray.length) {
    promptUser(cardArray, currentIndex);
  }
  // Otherwise end the game
  else {
    console.log("Game Over. The final score is: " + currentScore);
  }
}

function promptUser(cardArray, currentIndex) {
   var card = cardArray [currentIndex];
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: card.question + "\nAnswer:"
    }]).then(function(answer) {
      // Checking to see if their answer was correct, regardless of casing
      if (answer.text.trim().toLowerCase() === card.cloze.trim().toLowerCase()) {
        
        currentScore++;
        console.log("You are correct!");
      } 
      else {
        // Otherwise let them know they were incorrect
        console.log("Incorrect! The correct answer is '" + card.cloze + "'.");
      }

    // Increase our current card index
    currentIndex++;
    // Just a seperator
    console.log("-------------------------");
    // Play the next round with our updated score and card index
    playRound(cardArray, currentIndex);
  });
}