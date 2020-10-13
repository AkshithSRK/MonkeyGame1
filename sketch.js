var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){

monkey_running =                 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(400,400); 
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
}

function draw() {
  background("white");
  monkey.collide(ground);
  
  ground.x = ground.width/2;
  
  if(keyWentDown("space")) {
     monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  if (World.frameCount % 80 == 0) {  
   banana = createSprite(400,200,20,20);
   banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.velocityX = -4;
   
   banana.y = Math.round(random(200,250));
   banana.lifetime = 95;
 } 
  
  if (World.frameCount % 300 == 0) {  
   obstacle = createSprite(400,330,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -4;
   obstacle.lifetime = 90;
  }

 var survivalTime = 0;  
 stroke("white");  
 textSize(20);
 fill("white");
 text("Score:" + score, 250, 50); 
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:" + survivalTime, 100, 50); 
  
  drawSprites();  
}