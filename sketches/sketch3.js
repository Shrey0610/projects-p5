function setup() {
    // Create a canvas
    createCanvas(600, 600);
  
    // rectangle (x, y, width, height)
    
  }
  
  function draw() {
    // Nothing in draw() - the sketch is static
    noFill();
    strokeWeight(7);
    stroke("#0081C8");
    ellipse(100, 100, 100, 100);
  
    noFill();
    strokeWeight(7);
    stroke("orange");
    ellipse(155, 155, 100, 100);
    
    noFill();
    strokeWeight(7);
    stroke("black");
    ellipse(210, 100, 100, 100);
  
    noFill();
    strokeWeight(7);
    stroke("red");
    ellipse(320, 100, 100, 100);
     
    noFill();
    strokeWeight(7);
    stroke("green");
    ellipse(265, 155, 100, 100);
  }
  