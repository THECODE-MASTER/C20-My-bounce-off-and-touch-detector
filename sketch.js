function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(200,200,50,50);
  r1=createSprite(700,300,50,50);
  r2=createSprite(100,300,50,50);
  r1.velocityX=-3;
  r2.velocityX=3;
  r1.shapeColor="cyan"
  r2.shapeColor="yellow"
}
 function isTouching(){
   if (mrect.x-frect.x<=mrect.width/2+mrect.width/2 && mrect.y-frect.y<=mrect.height/2+mrect.height/2 &&  frect.x-mrect.x<=mrect.width/2+mrect.width/2 && frect.y-mrect.y<=mrect.height/2+mrect.height/2){
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  else{
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
  }
  function bounceoff(){
    if (r1.x-r2.x<=r1.width/2+r2.width/2 && r2.x-r1.x<=r2.width/2+r1.width/2){
      r1.velocityX=r1.velocityX*(-1);
      r2.velocityX=r2.velocityX*(-1);
    }
    if (r1.x>700 || r1.x<100){
      r1.velocityX=r1.velocityX*(-1);
    }
    if (r2.x>700 || r2.x<100){
      r2.velocityX=r2.velocityX*(-1);
    }
  }
 
function draw() {
  background(0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  isTouching();
  bounceoff();
 drawSprites();
}