let bgColor;
let lastColorChange = 0;

function setup() {
  createCanvas(800, 600);
  bgColor = color(220); // Initial background color
}

function draw() {
  background(bgColor);

  // Check if the 'r' key is pressed
  if (keyIsDown(82)) {
    if (millis() - lastColorChange > 500) { // Add a half a second delay to each color change
      
      // Generate random RGB values
       let bgColor1 = random(0,256);
       let bgColor2 = random(0,256);
       let bgColor3 = random(0,256);

       bgColor= color(bgColor1,bgColor2,bgColor3);
      
      // Update the time of the last color change
      lastColorChange = millis();
      
      //text to display the message
      textSize(50);
      fill(0);
      text('To run this sketch, press the "r" key to change the background color', 50, height - 20);

    }
  }
}
