const gameContainer = document.getElementById("game");


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    // gameContainer.append(newDiv);
  }
}


const card = document.querySelector("#game");


// TODO: Implement this function!
function handleCardClick() {
  // // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
this.classList.toggle('handleCardClick')

}


// when the DOM loads
createDivsForColors(shuffledColors);

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false
let firstCard, secondCard;

function handleCardClick(){
  if(lockBoard) return;
  if(this === firstCard) return;
  this.classList.add('flip');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    
    return;
  } 

  secondCard = this
    checkForMatch()
  }


function checkForMatch(){
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

  isMatch ? disableCards() : unflippCards()
  }


function disableCards(){
  firstCard.removeEventListener('click', handleCardClick)
  secondCard.removeEventListener('click', handleCardClick)
  resetCard()
}

function unflippCards(){
  lockboard = true;
  setTimeout(function() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetCard();
  }, 1500)
}

function resetCard(){
  [hasFlippedCard, lockboard] = [false, false];
  [firstCard, secondCard] = [null, null];
}



cards.forEach(card => card.addEventListener('click', handleCardClick));
