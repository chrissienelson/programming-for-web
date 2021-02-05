function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY) {
    translate(originX, originY);
    fill('blue');
    rect(0, 0 ,200, 200);
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('purple');
    strokeWeight(5);
    circle(100, 100, 100);

}

function draw(){
    createTile(0,0);
    createTile(0,200);
    createTile(0,200);
    createTile(200,-400);
    createTile(0,200);
    createTile(0,200);
    createTile(200,-400);
    createTile(0,200);
    createTile(0,200);
}