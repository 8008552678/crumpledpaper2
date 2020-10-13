
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball  = new Paper(200,450,70)
    ground = new Ground(width/2,670,width,20);
    dustbin = new Dustbin(1200,650, 200, 213);
  // leftbox1 = new Box(750,540,20,200);
  // bottombox2 = new Box(900, 650, 400, 20);
   //rightbox3 = new Box(1090,540,20,200);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 // bottombox2.display();

 ball.display();
  dustbin.display();
  ground.display();
// leftbox1.display();

//  rightbox3.display();



  
  
  
  
  
  //keyPressed();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:1100,y:-1100});
  }
}


