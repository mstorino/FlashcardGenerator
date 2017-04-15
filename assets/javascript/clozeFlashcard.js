// constructor which can be used to create objects with the ".fullText", ".partialText",

var ClozeCard = function(fullText, partialText) {
	this.fullText = fullText;
	this.partialText = partialText;

	this.question = function (){
		//check to make sure that the partialText is in the fullText, if it is display the card, if not throw an error
	  	var checkText = fullText.includes(partialText);
		if (checkText === true){

			var newText = fullText.replace(/\partialText\/g, '...')
		  	console.log("Question (fill in the blank): " + newText);
			} else {
				console.log('Oops, this part: ' + partialText + ' is not in the sentence.');
			}

	}

	this.answer = function (){
  		console.log("Answer: " + this.fullText);
  	}
  
}

module.exports = ClozeCard;



// USE THIS FROM BRIAN
    // var testVar = partialText;
    
    // string.replace(/ReGeX + testVar + ReGeX/, "...")
