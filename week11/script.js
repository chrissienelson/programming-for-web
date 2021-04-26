function setup() {
    createCanvas(1000, 800);
  }
  
  function draw() {
    background (154, 182, 87)
    fill(56, 93, 13)
    square(mouseX, mouseY, pmouseX)
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
    for (let squareY = 30; squareY <= 800; squareY += 100) {
      for (let squareX = 30; squareX <= 1000; squareX += 100) {
        square(squareX, squareY, 50);
      }
    }
  }