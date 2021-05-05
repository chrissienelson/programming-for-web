const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

};
let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/meow-cardback.png')
    cardfaceArray = [
        loadImage('images/kitten1.jpg'),
        loadImage('images/kitten2.jpg'),
        loadImage('images/kitten3.jpg'),
        loadImage('images/kitten4.jpg'),
        loadImage('images/kitten5.jpg')
    ]

}
function setup() {
    createCanvas(900, 500);
    background('');
    let selectedFaces = [];
    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 150;
        }
        startingY += 150;
        startingX = 100;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if (cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

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
            fill('magenta');
            rect(this.x, this.y, this.width, this.height, 10); 
            image(cardback, this.x + 10, this.y); 
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x + 5, this.y + 4); 
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