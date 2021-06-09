var ground,player;
var invisibleGround,zombie;
var zombieImg,bg,boy;

function preload(){
    bg=loadImage("images/bg.png");
    boy=loadAnimation("images/boy1.png","images/boy2.png");
    zombieImg=loadAnimation("images/zombie1.png","images/zombie2.png","images/zombie3.png","images/zombie4.png","images/zombie5.png","images/zombie6.png");
    
}

function setup(){
    createCanvas(800,500);
    ground = createSprite(500,-120,0,0);
    ground.scale = 1.7;
    ground.x = ground.width/2;
    ground.velocityX = -4;
    ground.addImage(bg);

    invisibleGround = createSprite(400,470,800,10);
    invisibleGround.visible = false;

    player = createSprite(300,420,20,100);
    player.addAnimation("a",boy);
    player.scale = 0.5;

    zombie = createSprite(150,410,20,100);
    zombie.addAnimation("z",zombieImg);
    zombie.scale = 0.4;
}

function draw(){

    background("black");

    if(ground.x<0){
        ground.x=ground.width/2;
        }

    if (keyDown("space") && player.y>=220){
    player.velocityY=-10;
}

    if(keyDown("left")){
    player.x -= 2;
}

    if(keyDown("right")){
    player.x += 2;
}

    player.velocityY = player.velocityY+0.8;

    player.collide(invisibleGround);
    zombie.collide(invisibleGround);

    drawSprites();
}















