// Constructor to create objects with ".fullText", ".partialText" properties and
// .question method that will console.log the question w/ the partial text removed and the answer

var ClozeCard = function(fullText, partialText) {
	this.fullText = fullText;
	this.partialText = partialText;
	

	this.question = function (){

		//check to make sure that the partialText is in the fullText, 
	  	var checkText = fullText.includes(partialText);

	  	//if it is display the card, if not throw an error
    
		if (checkText === true){
			var newText = fullText.replace(partialText, '...')
		  	console.log("Question (fill in the blank): " + newText);
			} else {
				console.log('Oops, this part: ' + partialText + ' is not in the sentence.');
			}

		}

		//display answer with full content

		this.answer = function (){
	  		console.log("Answer: " + this.fullText);
	  	}
  
	}

//exort constructor file for use in main.js
module.exports = ClozeCard;
