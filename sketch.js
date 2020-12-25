
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobj, tree, treeimg
var boy, boyimg
var stoneobj
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

groundobj=new ground();
stoneobj = new stone(100,460,23);
mango1 = new mango(600,290,34);
mango2 = new mango(855,325,35);
mango3 = new mango(670,270,35);
mango4 = new mango(730,200,35);
mango5 = new mango(710,320,36);
mango6 = new mango(780,250,35);
mango7 = new mango(825,170,33);
mango8 = new mango(880,260,35);
mango9 = new mango(940,220,35);
mango10 = new mango(980,300,35);

//attach = new Throw(stoneobj.body,{x:100,y:465});
tree=createSprite(775.368);
tree.addImage(treeimg);
tree.scale=0.42; 
boy=createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  fill("black");
  textSize(18);
  detectCollision(stoneobj,mango1);
  detectCollision(stoneobj,mango2);
  detectCollision(stoneobj,mango3);
  detectCollision(stoneobj,mango4);
  detectCollision(stoneobj,mango5);
  detectCollision(stoneobj,mango6);
  detectCollision(stoneobj,mango7);
  detectCollision(stoneobj,mango8);
  detectCollision(stoneobj,mango9);
  detectCollision(stoneobj,mango10);
  drawSprites();
 stoneobj.display();
 groundobj.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly();
}
function detectCollision(lstoneobj,lmango){
if(lstoneobj.body.position.x- lmango.body.position.x < lmango.diameter + lstoneobj.diameter
	&& lmango.body.position.x - lstoneobj.body.position.x < lmango.diameter + lstoneobj.diameter
	&& lstoneobj.body.position.y -lmango.body.position.y < lmango.diameter + lstoneobj.diameter
	&& lmango.body.position.y +lstoneobj.bodyo.position.y < lmango.diameter + lstoneobj.diameter){
	Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneobj.bodt,{x:100,y:465});
		attach.Launch(stones.body);
	}
}