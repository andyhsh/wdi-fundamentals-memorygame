console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.querySelector('#game-board');

var createBoard = function() {
    for (var i = 0; i < cards.length; i += 1) {
        var cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards);
        document.querySelector('#game-board').appendChild(cardElement);
    }
}


var isTwoCards = function() {
      // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // show the card's image
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='king.png'>"; // king
    } else {
        this.innerHTML = "<img src='queen.png'>"; //queen
    }



  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);



  }

}

var isMatch = function() {
    if (cards[0] === cards [1]) {
        alert("Congratulations, you have a match!");
    } else {
        alert("Sorry, please try again.")
    }
    // clear cards in play array for your next try
    cardsInPlay = [];

}

/*/
var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

if (cardOne === cardTwo) {
    alert("You found a match!")
} else {
    alert("Sorry, try again.")
}


var createBoard = function() {

var startGame = document.querySelector('#game-board');

for (var i = 0; i < cards.length; i += 1) {
    var card = document.createElement('div')
    card.className = 'card';
    document.querySelector('#game-board').appendChild(cardElement);
}
}
/*/

createBoard ();