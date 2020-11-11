var fixedRectangle,movingRectangle;
function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(200,100,100,50);
  movingRectangle=createSprite(400,300,50,100);
  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";
}

function draw() {
  background(0);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x-fixedRectangle.x)
  if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2&&
    fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
    fixedRectangle.shapeColor="red";
    movingRectangle.shapeColor="red";
  }
  else{
    fixedRectangle.shapeColor="green";
    movingRectangle.shapeColor="green";
  }
    drawSprites();
}