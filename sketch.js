const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,393,400,10,options);
  World.add(world,ground);
  console.log(ground);
  var balloption = {
      restitution:0.5
  }
  ball = Bodies.circle(200, 200, 20, balloption);
  World.add(world, ball);

}

function draw() {
  background(0);
  Engine.update(engine) ;
  rectMode(CENTER) ;
  rect(ground.position.x, ground.position.y, 400, 20);
  fill("orange");
  circle(ball.position.x, ball.position.y, 20);
}