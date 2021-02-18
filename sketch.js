const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,200,20,20,ground_options);
World.add(world,ground);
}
  

function draw () {
   background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
 fill("white"); 
 rect(ground.position.x,ground.position.y ,20,20); 
  }