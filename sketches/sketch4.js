
function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background(220);
    
    fill("white");
    strokeWeight(0);
    rect(20, 20, 80, 20);
    strokeWeight(15);
    stroke("red");
    line(200, 40, 80, 40);
    strokeWeight(0);
    fill("blue");
    rect(90, 70, 90, 320);
    
    noFill();
    strokeWeight(10);
    stroke("green");
    ellipse(250, 100, 50, 50);
  }
  