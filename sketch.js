const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world , engine ;
var ground;

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
var option = {
  isStatic : true         
  
}

  ground = Bodies.rectangle(200, 380, 400, 50,option);
World.add(world,ground);
 console.log(ground);
var option2 =  
{
restitution:1

}

 
ball = Bodies.circle(200,100,30,option2 );
World.add(world,ball);


}

function draw() 
{
  background("lightblue"); 
  Engine.update(engine);
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30, 30);

}  