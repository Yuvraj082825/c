const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var boyImg,treeImg;
var mango,mango2,mango3,mango4,mango4,mango5,mango6;
var chances;
function preload()
{
	boyImg=loadImage("boy.png");
	treeImg=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(620, 330, 40);
  	mango2 = new Mango(630, 250, 50);
	mango3 = new Mango(570, 370, 40);
  	mango4 = new Mango(570, 280, 45);
  	mango5 = new Mango(520, 325, 45);
	mango6 = new Mango(730, 340, 45);
	  
	ground=new Ground();
	stone=new Stone()
	shot=new Shot(stone.body, {x:100, y:510});

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  
  imageMode(CENTER);
  image(boyImg, 140, 595, 120, 220);

  push();
  translate(600, 400);
  image(treeImg, 20, 20, 350, 500);
  pop();

  ground.display();
  stone.display();
  shot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  textSize(20);
  fill(0);
  text("Press 'space' to get another chance", 30, 40);
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased()
{
	shot.fly();
}
function keyPressed()
{
	if(keyCode===32){
	  Matter.Body.setPosition(stone.body, {x:98, y:540});
	  shot.attach();
	}
  }
function detectCollision(a ,b)
{
	var posA = a.body.position;
	var posB = b.body.position;
	let d = dist(posA.x, posA.y, posB.x, posB.y);
	if(d <= 20 + 20){
	  Matter.Body.setStatic(b.body, false);
  }
  /*mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }*/
}
