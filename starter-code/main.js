console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = cardOne;
var cardThree = "king";
var cardFour = cardThree;

var createCards = function(){
var board = document.getElementById('game-board');
var numCards = 4;

  for (var i = 0; i < numCards; i++){
    var newCard = document.createElement('div');
    newCard.className = "test";
    board.appendChild(newCard);
  };
};

createCards();

// if (cardTwo === cardFour){
//  alert("You found a match!");
// }
// else{
//   alert("Sorry, try again.");
// };

