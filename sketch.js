
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper;



function preload()
{
	dustbinimage=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



ground = new Ground(400,670,800,20)

paper = new Paper(50,650,40);
dustbin1 = new Dustbin(660,650,150,15)
dustbin2 = new Dustbin(580,575,15,170)
dustbin3 = new Dustbin(740,575,15,170)
//try and switch them


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  drawSprites();
  
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinimage,560,465,200,200);
  

 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:90, y:-90})
	}
}



