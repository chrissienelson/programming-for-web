
let mySound;
function preload() {
    soundFormats('mp3');
    mySound = loadSound('forest.mp3');
}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.mousePressed(canvasPressed);
    background(0);
    amp = new p5.Amplitude();
    amp.setInput(mySound);
  }
  

function draw() {
    background (154, 182, 87)
}

function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mySound.play();
  }