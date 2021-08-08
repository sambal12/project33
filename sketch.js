const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render
var engine,world
var girl;


function preload(){
  bg = loadImage("snow1.jpg")
  Girl = loadAnimation("girl.gif")
  }


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  girl=Bodies.circle(210,300,100,{isStatic: true})
   World.add(world,girl)

  ice = new Flake(50,10)
 
}


function draw() {
  background(bg)
  Engine.update(engine)
  imageMode(CENTER)
  animation(Girl ,girl.position.x,girl.position.y,250);
//Matter.Body.scale(girl,20,20,30)
ice.display();
 
}