function setup() {
    // Create a canvas
    createCanvas(600, 600);
  
    // rectangle (x, y, width, height)
    rect(50, 200, 100, 50);
    
    // square (x, y, width, height)
    rect(200, 200, 50, 50);
    
    // ellipse (x, y, width, height)
    ellipse(400, 100, 100, 50);
    
    // circle (ellipse with equal width and height)
    ellipse(500, 200, 50, 50);
    
    // triangle (x1, y1, x2, y2, x3, y3)
    triangle(100, 400, 150, 300, 200, 400);
    
    // arc (x, y, width, height, start, stop)
    arc(300, 400, 100, 100, 0, PI + QUARTER_PI);
    
    // quad (x1, y1, x2, y2, x3, y3, x4, y4)
    quad(450, 300, 500, 350, 450, 400, 400, 350);
  }
  
  function draw() {
    // Nothing in draw() - the sketch is static
  }