
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var ground;
var man1,man2,man3,man4,man5,man6,man7,man8,man9,man10;
var line1;
var stone;
var world,boy1;
var tree;
//var backgroundImg

function preload()
{
///	backgroundImg = loadImage("sprites/mango.png");
boy1 = loadImage("sprites/boy.png");
tree = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,600,width,30);
stone =  new Bob(100,100,40,30);
line1 = new Slingshot(stone.body,{x:240,y:440});


man1=new mango(900,110,30);
man2=new mango(950,130,30);
man3=new mango(1010,140,30);
man4=new mango(1000,100,30);
man5=new mango(1100,115,30);
man6=new mango(1000,230,30);
man7=new mango(900,230,40);
man8=new mango(1140,150,40);
man9=new mango(1000,230,40);
man10=new mango(1090,200,40);

  detectollision(stone,man1);
  detectollision(stone,man2);
  detectollision(stone,man3);
  detectollision(stone,man4);
  detectollision(stone,man5);
  detectollision(stone,man6);
  detectollision(stone,man7);
  detectollision(stone,man8);
  detectollision(stone,man9);
  detectollision(stone,man10);

//	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(240);
  Engine.update(engine);
  textSize(30);
  //textFill(black);
  text("Press Space to Grab one More Stone!!",50 ,50);
    image(boy1,200,360,200,300);
    image(tree,700,50,550,550);

  ground.display();
  stone.display();
  line1.display();
  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();
  man6.display();
  man7.display();
  man8.display();
  man9.display();
  man10.display();
 
  detectollision(stone,man1);
  detectollision(stone,man2);
  detectollision(stone,man3);
  detectollision(stone,man4);
  detectollision(stone,man5);
  detectollision(stone,man6);
  detectollision(stone,man7);
  detectollision(stone,man8);
  detectollision(stone,man9);
  detectollision(stone,man10);
 // drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
  }
  
function mouseReleased(){
  line1.fly();
  
  
  }
  
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:240, y:440}) 
	  line1.attach(stone.body);
	}
  }
//console.log(stone.position.x);
  function detectollision(lstone,lmango){
   
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
      if(distance<=lmango.r+lstone.r)
      {
        
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


