
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;	

var engine, world;
var bobobj;
var roofobg;
var rope1;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobobj=new Bob(200,450,40);
	roofobg=new Roof(width/2,200,width,20);
	bob1=new Bob(300,450,40);
	bob2=new Bob(400,450,40);
	bob3=new Bob(500,450,40);
	bob4=new Bob(600,450,40);
	rope1=new Rope(bob1.body,bob2.body,bob3.body,bob4.body);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roofobg.display();
	rope1.display();
	bobobj.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	

	

  drawSprites();

  
 
}



