let rectX = 0;
const rectWidth = 75;
let clickCount = 0;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(155);
    drawShape();
    rectX++;
    if( rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= 75)) {
        clickCount++;
        console.log('hit', clickCount);
    }
   
}

function drawShape() {
    fill('pink');
    rect(rectX, 0, rectWidth, 75);
}
