
let rad = 40; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 3; // Speed of the shape
let yspeed = 5; // Speed of the shape

let xdirection = 7; // Left or Right
let ydirection = 5; // Top to Bottom

let ellipseColor = 0;

function setup() {
  createCanvas(800, 400);
  noStroke();
  frameRate(40);
  ellipseMode(10);
  bgColor = random(255);
  ellipseColor = random(255);	
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
    background (239, 239, 239);
    fill(ellipseColor);


if (mouseIsPressed) {
    ellipseColor = color(random(255), random(255), random(255));
  }


  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  ellipse(xpos, ypos, rad, rad);

  
}
