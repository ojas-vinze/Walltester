var bullet,wall;
var speed,weight,thikness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,55,10);
  bullet.velocityX=speed;
  
  thikness = random(22,83);

  wall = createSprite(1500,200,thikness,height/2);
  wall.shapeColor = color(80,80,80);

 
}

function draw() {
  background("black");  
  drawSprites();
  bullet.shapeColor="white";
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
   
    var damage = (0.5 * weight * speed * speed)/(thikness * thikness * thikness);
    
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";
    }
  }
}