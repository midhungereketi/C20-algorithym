var frect,mrect;


function setup() {
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
mrect=createSprite(200,200,50,50);
frect.shapeColor="green";
mrect.shapeColor="green";
frect.velocityX=-5;
mrect.velocityX=5;
}

function draw() {
  background(255,255,255);  

  if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
    frect.x-mrect.x<mrect.width/2+frect.width/2)
    {
      frect.velocityX=frect.velocityX*(-1);
      mrect.velocityX=mrect.velocityX*(-1);


  }

  drawSprites();
}