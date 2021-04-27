
let guitar1, guitar2, guitar3, guitar4, guitar5;
function preload() {
    soundFormats('mp3');
    guitar1 = loadSound('guitar1.mp3');
    guitar2 = loadSound('guitar2.mp3');
    guitar3 = loadSound('guitar3.mp3');
    guitar4 = loadSound('guitar4.mp3');
    guitar5 = loadSound('guitar5.mp3');
}

function setup() {
    createCanvas (800, 500)
    noise = new p5.Noise();
    noise.start();
    noise.amp(0);
    amplitude = new p5.Amplitude();
  }


function keyPressed () {
    if (key === '1') {
      guitar1.play();
    } else if (key === '2') {
      guitar2.play();
    } else if (key === '3') {
      guitar3.play();
    } else if (key === '4') {
      guitar4.play();
    } else if (key === '5') {
      guitar5.play();
    }   
  }

    function draw() {
        background(220, 150);
        textAlign(CENTER);
        text('Press 1-5 to play the guitar', width/2, 20);
      
        let level = amplitude.getLevel();
        let size = map(level, 0, 1, 0, 200);
        ellipse(width/2, height/2, size, size);
      }
      
      function toggleSound(){
        if (sound.isPlaying()) {
          sound.stop();
        } else {
          sound.play();
        }
      }
  




