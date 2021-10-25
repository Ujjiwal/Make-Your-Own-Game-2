var bg , landerImg;
var lander;
var vy = 0;
var g = 0.05;

function preload(){
bg = loadImage("./assets/bg.png");
landerImg = loadImage("./assets/normal.png");
}

function setup(){
 createCanvas(1000,700);
 
 lander = createSprite(100,100,40,40);
 lander.addImage("lander",landerImg);
 lander.scale = 0.2;
}

function draw(){
background("black");
image(bg,0,0);

vy +=g
lander.position.y+=vy

drawSprites();
}

function keyPressed(){
    if(keyCode==UP_ARROW){
    vy = -1;
    thrust.nextFrame();
    lander.changeAnimation('thrusting');
    }
}