console.log("JS file is connected to HTML! Woo!")

var cards = ['ace','queen','jack','king','nine','ten','queen','king','ten','ace','nine','jack'];
var cardsInPlay =[];
var cardsMatched = 0;
var scoreTally = 0;

function createCards(){
  var board = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute("data-card", cards[i]);
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  };
}

function flipCard(){
   var flippedCard = this;
   var cardType = flippedCard.getAttribute('data-card');
   flippedCard.innerHTML = "<img src='"+cardType+".png' alt='"+cardType+"'/>";
   cardsInPlay.push(flippedCard);
   flippedCard.removeEventListener("click", flipCard);
   if (cardsInPlay.length===2){
      checkMatch(cardsInPlay);
      cardsInPlay = [];
    };
}

function checkMatch(flippedCards){
  if(flippedCards[0].getAttribute('data-card') === flippedCards[1].getAttribute('data-card')){
    setTimeout(function(){
      alert("You found a match 100 points!"); }, 500);
      addScore();
      addMatches();
  }else{
    setTimeout(function(){
  alert("Sorry, try again");
      flippedCards[0].innerHTML = "";
      flippedCards[0].addEventListener("click", flipCard);
      flippedCards[1].innerHTML = "";
      flippedCards[1].addEventListener("click", flipCard);
    }, 500);
  };
}

function addMatches(){
  cardsMatched +=2;
  if (cardsMatched === cards.length){
     setTimeout(function(){
      alert("Congratulations you finished!!");
      resetBoard();
      resetScore();
      cardsMatched = 0;
    }, 500);
  };
}

function addScore(){
  scoreTally +=100;
  document.getElementById('points').innerHTML = scoreTally;
}

function resetScore(){
  scoreTally = 0;
  document.getElementById('points').innerHTML = scoreTally;
}

function resetBoard(){
   var allCards = document.getElementsByClassName('card');
   for(var i = 0; i < allCards.length; i++){
      allCards[i].innerHTML = "";
   };
 }
createCards();





