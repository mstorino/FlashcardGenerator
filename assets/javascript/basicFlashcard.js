// constructor which can be used to create objects with the ".front" & ".back" properties and printCard method

var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  this.question = function (){
  	console.log("Question: " + this.front);
  }
  this.answer = function (){
  	console.log("Answer: " + this.back);
  }
  
  };

module.exports = BasicCard;