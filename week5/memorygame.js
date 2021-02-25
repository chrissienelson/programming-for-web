const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

};
let cardback;
function preload() {
    cardback = loadImage('images/meow-cardback.png')

}
function setup() {
    createCanvas(900, 500);
    background('cyan');
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            cards.push(new Card(startingX, startingY));
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
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height= 100;
        this.face = DOWN;
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
