let bubbleArray = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 6; i++) {
    bubble = new Bubble();
    }
}

function draw() {
    background(0);
    for (let k = 0; k < 6; k++) {
    bubble.move();
    bubble.show();  
    }   
}

class Bubble {
    constructor() {
        this.x= 200;
        this.y= 150;
    }

    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-4, 4);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}
s