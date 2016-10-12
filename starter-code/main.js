console.log("JS file is connected to HTML! Woo!")

var cardsInPlay =[];
var score = 0;

function createCards(){
  var cards = ['queen','queen','king','king'];
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
   var selectedCard = this;
   var cardType =  selectedCard.getAttribute('data-card');
   if (cardType === "queen"){
     selectedCard.innerHTML = "<img src='queen.png' alt='Queen'/>";
   }else{
     selectedCard.innerHTML = "<img src='king.png' alt='King'/>";
   };

  cardsInPlay.push(cardType);
  checkNumCards();
}

function checkNumCards(){
  if (cardsInPlay.length===2){
      isMatch(cardsInPlay);
      cardsInPlay = [];
    };
 }

function isMatch(selectedCards){
  var points = document.getElementById('points');

  if(selectedCards[0] === selectedCards[1]){
    setTimeout(function(){ alert("You found a match 100 points!"); }, 500);
    score += 100;
  }else{
    setTimeout(function(){ alert("Sorry, try again"); }, 500);
  };
  points.innerHTML = score;
  setTimeout(function(){ resetBoard(); }, 500);
}

function resetBoard(){
   var allCards = document.getElementsByClassName('card');
   for(var i = 0; i < allCards.length; i++){
      allCards[i].innerHTML = "";
   };
}


createCards();





