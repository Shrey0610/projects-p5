function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    background(220);
  
    fill(mouseX, 100, mouseY);
    ellipse(mouseX, mouseY, 50, 50);
    
    fill(150, 200, 250);
    rect(150, 150, 100, 100);
  }