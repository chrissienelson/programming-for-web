let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background (0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(2);
    stroke('pink');
    rect(100, 100 + alt, 100 / alt);
}

function draw() {
    translate(300, 300)
    rotate(rotateBy)
    makeArm(rotateBy);
    rotateBy += 3;
}
function mousePressed() {
    noLoop();
}

function doubleClicked() {
    loop();
}