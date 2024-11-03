
let x, y;
function setup() {
  createCanvas(400, 400);
  x = width / 2; // x position at 200 pixels 
  y = height / 2; // y position at 200 pixels 
}
function draw() {
  x += random(-5, 5); // random movement in x direction by 10 pixels
  y += random(-5, 5); // random movement in y direction by 10 pixels
  ellipse(x, y, 50, 50);
}
