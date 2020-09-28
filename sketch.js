var car1,wall1;
var car2,wall2;
var car3,wall3;
var car4,wall4;

var speed,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  car1 = createSprite(100,50,10,10);
  car1.shapeColor = "white";
  car1=speed = random(55,90)
  wall1 = createSprite(790,50,15,50);

  car2 = createSprite(100,100,10,10);
  car2.shapeColor = "yellow";
  wall2 = createSprite(790,100,15,50);

  car3 = createSprite(100,150,10,10);
  car3.shapeColor = "red";
  car3=speed = random(55,90)
  wall3 = createSprite(790,150,15,50);

  car4 = createSprite(100,200,10,10);
  car4.shapeColor = "green";
  wall4 = createSprite(790,200,15,50);  
}

function draw() {
  background(0);  
  if (keyDown("left")) {
    car1.x = car1.x + -10;
  }
  if (keyDown("left")) {
    car2.x = car2.x + -10;
  }

  if (keyDown("left")) {
    car3.x = car3.x + -10;
  }
  if (keyDown("left")) {
    car4.x = car4.x + -10;
  }  
  drawSprites();
}