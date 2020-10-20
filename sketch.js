
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= Bodies.circle(450,290,200,20);
	bobObject2= Bodies.circle(480,290,200,20);
	bobObject3= Bodies.circle(520,290,200,20);
	fill("pink");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



