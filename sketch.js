const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
function preload() {
  backgroundIMG = loadImage("bg.png");
}

function setup(){
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)
  Box1 = new Box(700,320,70,70);
  Box2 = new Box(920,320,70,70);
  Log1 = new Log(810,260,300,PI/2);
  Box3 = new Box(700,240,70,70);
  Box4 = new Box(920,240,70,70);
  Log2 = new Log(810,180,300,PI/2);
  Box5 = new Box(810,160,70,70);
  Log3 = new Log(760,120,150,PI/7);
  Log4 = new Log(860,120,150,-PI/7);
  pig1 = new Pig(810, 350);
  pig2 = new Pig(810, 200);
  bird = new Bird(100, 100);
  platform = new Ground(150,305,300,170);
  log6 = new Log(230,180,80,PI/2);
  chain = new Chain(bird.body,log6.body);

}
function draw()
{
  background(backgroundIMG);
  Engine.update(engine);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Log1.display();
  Log2.display();
  Log3.display();
  Log4.display();
  pig1.display();
  pig2.display();
  bird.display();
  platform.display();
  log6.display();
  chain.display();
}
