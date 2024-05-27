function setup() {
  createCanvas(600, 600);
  background("cyan");
}

function draw() {
   stroke("white");
   fill("black");
  
  if (mouseIsPressed){
     rect(mouseX, mouseY, 20, 35);
  }
}