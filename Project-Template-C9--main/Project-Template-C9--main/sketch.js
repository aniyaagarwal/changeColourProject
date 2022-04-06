
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.width = box.width+20
  }
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.height = box.height+20
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.width = box.width-20
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.height = box.height-20
  }
  
  drawSprites();
}

