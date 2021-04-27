
var mySound;

function setup() {
    mySound = loadSound('doorbell.mp3');
}

function draw() {
    mySound.setVolume(0.1);
    mySound.play();
}