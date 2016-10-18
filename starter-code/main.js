console.log("JS file is connected to HTML! Woo!")

var cards = ['ace','queen','jack','king','nine','ten','queen','king','ten','ace','nine','jack'];
var cardsInPlay =[];
var cardsMatched = 0;
var scoreTally = 0;

function createCards(){ //creates each card and adds to board div
  var board = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute("data-card", cards[i]); //sets attribute according to card name
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  };
}

function flipCard(){
   var flippedCard = this;
   var cardType = flippedCard.getAttribute('data-card');
   flippedCard.innerHTML = "<img src='"+cardType+".png' alt='"+cardType+"'/>";
   cardsInPlay.push(flippedCard);
   flippedCard.removeEventListener("click", flipCard); //removes event listener so card can no longer be clicked
   if (cardsInPlay.length===2){ //checks to see if two cards have been flipped
      checkMatch(cardsInPlay);
      cardsInPlay = []; //resets cards in play array
    };
}

function checkMatch(flippedCards){// checks if cards match
  if(flippedCards[0].getAttribute('data-card') === flippedCards[1].getAttribute('data-card')){
      addScore();
      addMatches();
  }else{
    setTimeout(function(){// lets player see card positions for 1 second then flips cards
      flippedCards[0].innerHTML = ""; //flips cards back over if wrong pair and no match
      flippedCards[0].addEventListener("click", flipCard); //re-enables event listener so player can click on card
      flippedCards[1].innerHTML = "";
      flippedCards[1].addEventListener("click", flipCard);
    }, 1000);
  };
}

function addMatches(){ // checks to see if num of cards matched equals total cards in array for end of game
  cardsMatched +=2; // adds two to the cardsMatched counter
  if (cardsMatched === cards.length){
     setTimeout(function(){//timeout allows cards to be shown before alert pops up
      alert("Congratulations you finished!!");
      resetBoard();
      cardsMatched = 0; //reset matched cards counter once all cards matched
    }, 500);
  };
}

function addScore(){
  scoreTally +=100; //100 points added for every match
  document.getElementById('points').innerHTML = scoreTally; //updates scoreboard
}

function resetBoard(){
   var allCards = document.getElementsByClassName('card');
   for(var i = 0; i < allCards.length; i++){
      allCards[i].innerHTML = "";
      allCards[i].addEventListener("click", flipCard); //re-enables event listener so player can click on card
 };
  scoreTally = 0;
  document.getElementById('points').innerHTML = scoreTally; //resets scoreboard to 0
 }
createCards();





