let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "black");
let stroke2 = prompt("enter another basic color lowercase", "hotpink");
function setup() {
    createCanvas(1000, 900);
    background("#F6E3E2");
    grid = loadImage("100px_grid.png");
}
function draw() {
    // snowman bottom
    fill("ffffff");
    strokeWeight(20);
    stroke(stroke1);
    ellipse(500, 585, 400);

    // body
    ellipse(500, 390, 300);

    // head
    ellipse(500, 200, 200);

    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(375, 120, 625, 120);

    // hat body
    fill("hotpink");
    rect(425, 20, 150, 100, 10);

    // eyes
    stroke(0);
    strokeWeight(35);
    point(460, 200);
    point(540, 200);

    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 245, 60, 40, 0, PI);

      //arms
    //left arm
    strokeWeight(15);
    line(200, 200, 400, 400);

    //right arm
    line(800, 200, 600, 400);





}
