var audio = new Audio('playhouse.mp3');


const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 7,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};

let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/music-note.png')
    cardfaceArray = [
        loadImage('images/treble-clef.png'),
        loadImage('images/bass-clef.png'),
        loadImage('images/eighth-note.png'),
        loadImage('images/quarter-note.png'),
        loadImage('images/sixteenth-note.png'),
        loadImage('images/whole-note.png'),
        loadImage('images/half-note.png')
    ]
}




function setup() {
    createCanvas(900, 500);
    background('#ded2bf');
    let selectedFaces = [];
    for (let z = 0; z < 7; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 7; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 100;
        }
        startingY += 150;
        startingX = 100;
    }
};


function myPlay(){
    var audio = new Audio("playhouse.mp3");
    audio.play();
}


//need to finish
function draw () {
    background('#ded2bf');
    if (gameState.numMatched === gameState.totalPairs) {
        fill('#000000');
        textSize(50);
        text('WINNER!', 325, 475);
        noLoop();
        audio.play();

    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill (0);
    textSize(20);
    text('attempts: ' + gameState.attempts, 675, 460);
    text('matches: ' + gameState.numMatched, 675, 425);
    fill('#000000');
}


function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // mark cards as flipped so dont flip back
                gameState.flippedCards[0].isMatch = true;
                gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
                gameState.flippedCards.length = 0;
            // increment the score
                gameState.numMatched++;
                loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}
//need to finish



class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height= 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill('#000000');
            rect(this.x, this.y, this.width, this.height, 10); 
            image(cardback, this.x + 10, this.y); 
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x + 7, this.y + 4); 
        }

    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    } 
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // Pick random index
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}




