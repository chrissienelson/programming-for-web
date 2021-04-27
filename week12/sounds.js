
let mySound;
function preload() {
    soundFormats ('mp3');
    mySound = loadSound('forest.mp3');
}

function setup() {
    let cnv = createCanvas(600, 600);
    cnv.mousePressed(canvasPressed);
    background(0);
    amp = new p5.Amplitude();
    amp.setInput(mySound);
  }
  

function draw() {

}

function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mySound.play();
  }