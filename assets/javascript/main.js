var BasicCard = require ("./basicFlashcard.js");
var ClozeCard = require ("./clozeFlashcard.js");

var basicCard1 = new BasicCard("What president do I miss?", "Barack Obama");
var basicCard2 = new BasicCard("How many times was Jackson shot?", "55");

basicCard1.question();
basicCard1.answer();

basicCard2.question();
basicCard2.answer();

var clozeCard1 = new ClozeCard("George Washington was the first president", "George Washington");
var clozeCard2 = new ClozeCard("Donald Trump is our new president", "cheese");

clozeCard1.question();
clozeCard1.answer();