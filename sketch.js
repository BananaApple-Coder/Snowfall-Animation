const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var backImg
var child1, child2
var base1, base2
var music
var analyzer, rms

function preload(){
  backImg = loadImage("snow1.jpg")

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
  //console.log(rms)

  //jump()

  child1.display()
  child2.display()
  base1.display

  drawSprites();
}

function jump(){
  if (frameCount % 150 === 0){
    console.log(3)
    let r1 = Math.round(random(1, 2))
    //if (r1 === 1) {
      console.log(1)
      for(let i = 0; i < 10; i++){
        //console.log(child1.y)
        //console.log(rms)
        setTimeout(() => { child1.y-=rms*5; }, 100);
        //console.log(rms)
        //console.log(child1.y)
        console.log(5)
      }
      for(let i = 0; i < 10; i++){
        console.log(child1.y)
        setTimeout(() => { child1.y+=rms*5; }, 100);
        console.log(child1.y)
      }
      console.log(9)
    } else {
      console.log(2)
      for(let i = 0; i < 10; i++){
         child2.y-=rms*5
      }
      for(let i = 0; i < 10; i++){
        child2.y+=rms*5
      }
    }
  }  
