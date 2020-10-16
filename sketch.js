var monkey, player_running, backGroundImage, obstacleImage, obstaclesgroup, bananaImage, backGround, bananasgroup, survivalTime, ground, bananaImage, score;

function preload () {
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  
  
 backGroundImage = loadImage("jungle.jpg");
 obstacleImage = loadImage("stone.png");
  bananaImage = loadImage("banana.png");
}


function setup() {
  createCanvas(400, 350);
  
backGround = createSprite(200,200);
backGround.addImage(backGroundImage);
  backGround.scale = 0.5;
  
monkey = createSprite(50,200,20,20);  
monkey.addAnimation("monkey", player_running);
monkey.scale = 0.10;
  

  
ground = createSprite(375, 325, 800, 10);
ground.shapeColor = "brown";
  
obstaclesgroup = new Group();
bananasgroup = new Group();
score = 0;
}

function draw() {
  background(220);
   
  if (keyDown("space")) {
  monkey.velocityY = -16;
 }
 
 //add gravity
   monkey.velocityY = monkey.velocityY + 0.8;
  
  
 ground.velocityX = -6;
 
   
 if (ground.x < 200 ) {
   ground.x = 180; 
  }
 if(bananasgroup.isTouching(monkey)){
    score = score + 2;
   bananasgroup.destroyEach();
    } 
  switch(score){
    case 10: monkey.scale = 0.12;
    break;
    case 20: monkey.scale = 0.14;
    break;
    case 30: monkey.scale = 0.16;
    break;
    case 40: monkey.scale = 0.18;
    break;
    default: break;
  }
  
  
  
  if(monkey.isTouching(obstaclesgroup)){
    monkey.scale = 0.10;
  }
   
   
  monkey.collide(ground);
  
  
  
    
obstaclespawn();  
bananaspawn();

drawSprites();
 stroke("black");
  textSize(20);
  fill("black");
  
  text("Survival Time =" + score, 100, 50);
  
  
}
function obstaclespawn() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(410, 300);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2 ;
    obstacle.velocityX = -10; 
    obstacle.lifetime = 50 ;
    obstacle.collide(ground)
    obstaclesgroup.add(obstacle);
  }
}

function bananaspawn() {
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(425,random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -9;
    banana.lifetime = 75;
    bananasgroup.add(banana);
} 

}

