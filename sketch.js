const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var backImg
var child1, child2
var base1, base2
var music
var analyzer, rms
var snowflake, snowImg

function preload(){
  backImg = loadImage("snow1.jpg")
  snowImg = loadImage("snow4.webp")

  music = loadSound("backMusic.mp3")
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  child1 = new Child(750, 205, "child1.png")
  child2 = new Child(200, 285, "child2.png")
  base1 = new base(750, 280, 50, 10, 0, {
    "restitution": 0.8,
    "density": 1,
    "friction": 1,
    "isStatic": true
  })
  base2 = new base(200, 360, 50, 10, 0, {
    "restitution": 0.8,
    "density": 1,
    "friction": 1,
    "isStatic": true
  })

  music.loop()

  analyzer = new p5.Amplitude();
  analyzer.setInput(music);
}

function draw() {
  background(backImg); 

  Engine.update(engine);

  rms = analyzer.getLevel(); //rms means root mean square(average amplitude)

  jump()
  snow()

  child1.display()
  child2.display()
  base1.display

  drawSprites();
}

function jump(){
  let divisor = Math.round(random(100, 200))
  if (frameCount % divisor === 0){
    divisor = Math.round(random(100, 200))
    if (Math.round(random(1,2)) === 1){
      Matter.Body.applyForce(child1.body, child1.body.position, {x:0, y:-rms*1000})
    }else{
      Matter.Body.applyForce(child2.body, child2.body.position, {x:0, y:-rms*1000})
    }
  }
}    


function snow(){
  if(frameCount%10===0){
    snowflake = createSprite(Math.round(random(0,800)),0);
    snowflake.scale=rms/2;
    snowflake.addImage(snowImg)
    snowflake.velocityY=rms*20;
    snowflake.setLifetime=100;
  } 
}