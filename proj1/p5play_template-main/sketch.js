var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "grey";
}

function draw() {
  background(1);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
  background("red");
  drawSprites();
  }
}