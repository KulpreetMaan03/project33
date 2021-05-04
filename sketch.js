const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;



var backgroundImg,snow1;

function preload() {
 backgroundImg = loadImage("snow3.jpg");
}



function setup() {
  createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;

  snow1= new Snow(200,50,20,20);
  snow2= new Snow(300,50,20,20);

  snow3= new Snow(400,50,20,20);

  snow4= new Snow(500,50,20,20);


}

function draw() {
  background(backgroundImg); 
  
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  
}
