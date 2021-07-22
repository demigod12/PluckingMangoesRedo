const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world,boy;

//Declare launcherObject and launchForce variable here
var slingshot1;
var launchForce = 100;


var ground1;
var mango1, mango2, mango3, mango4, mango5;
var stone1;
var boyImg;
var tree;

function preload() {
	boyImg = loadImage("images/boy.png");

}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;
  	ground1 = new Ground(400, 450, 800, 20);
	mango1 = new Mango(680, 250, 20, 20)
	mango2 = new Mango(700, 240, 20, 20);
	mango3 = new Mango(650, 260, 20, 20);
	mango4 = new Mango(755, 250, 20, 20);
	mango5 = new Mango(710, 210, 20, 20);

	tree = new Tree(600, 150, 200, 300);
	stone1 = new Stone(120, 385, 15, 15);
	boy = new Boy(100, 350, 120, 130);

	slingshot1 = new Slingshot(stone1.body, {x:120, y:385})


	Engine.run(engine);
}

function draw() {

  background(230);
  text(mouseX+","+mouseY, mouseX, mouseY);

  tree.display();

  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone1.display();
  boy.display();
  slingshot1.display();

  
}

//create mouseDragged function here
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY})
}


//create mouseReleased function here
function mouseReleased(){
	slingshot1.fly();
	Matter.Body.applyForce(stone1.body, stone1.body.position, {x:60, y:60})

}


//create keyPressed function here
/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(stone1.body, stone1.body.position, {x:60, y:60})
        //Matter.Body.setPosition(stone1.body, {x:60, y:60});
	}
}*/
