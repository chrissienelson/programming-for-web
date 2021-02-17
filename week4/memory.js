
const circleDiameter = 100;

let startingX = 150;
let startingY = 100;
let myRects = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background('white');
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 5; i++) {
            rect(startingX, startingY, circleDiameter);
            myRects.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++;
        }
        
        startingY += 150;
        startingX = 150;

    }

console.log(myRects);

}


function mousePressed() {
    for (let j = 0; j < myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
        if (distance < circleDiameter / 2) {
            console.log('circle has been click', myCircles[j].id);
    }
}

}
