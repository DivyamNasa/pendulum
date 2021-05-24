
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var Roof;
var bob1,bob2,bob3,bob4,bob5;
var bobDiameter;


function preload()
{
	
}

function setup() {

	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 Roof = new roof(580,50,500,20)

 bob1 = new BOB(432,390);
 bob2 = new BOB(466,390);
 bob3 = new BOB(500,390);
 bob4 = new BOB(534,390);
 bob5 = new BOB(568,390);
  
 rope1 = new rope(bob1.body,roof.body,-bobDiameter*2,0);
 rope2 = new rope(bob2.body,roof.body,-bobDiameter*2,0);
 rope3 = new rope(bob3.body,roof.body,-bobDiameter*2,0);
 rope4 = new rope(bob4.body,roof.body,-bobDiameter*2,0);
 rope5 = new rope(bob4.body,roof.body,-bobDiameter*2,0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,243,5);
  
  Roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 

  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob1.body,bobt1.body.position,{x:70,y:-70});
}


}



