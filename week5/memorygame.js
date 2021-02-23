let myCard;
const DOWN = 'down';
const UP = 'up';
function setup() {
    createCanvas(800, 600);
    background('cyan');
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height= 100;
        this.face = DOWN;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill('magenta');
            rect(this.x, this.y, this.width, this.height, 10);     
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
