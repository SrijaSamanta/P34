const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.body;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count = 0;
var line;
var gameState ;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  //line = createSprite(width/2,height-350,width,5);
  //line.shapeColor="yellow";

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("Life : "+count,699,30);
  text("500",30,550);
  text("500",100,550);
  text("500",170,550);
  text("500",250,550);
  text("200",330,550);
  text("200",410,550);
  text("200",490,550);
  text("300",570,550);
  text("300",650,550);
  text("300",730,550);
  Engine.update(engine);
 
  if(count >= 5){
    gameState ="end";
    textSize(50);
    text("GAME OVER",250, 250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  //if(gameState !== "end"){
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   
  //}

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles != null){
     particles.display();
     if(particles.body.position.y > 760)
     {
       if(particles.body.position.x < 300)
       {
         score = score+500;
         particles = null;
       }
      }
    }
    
   if(particles != null){
    particles.display();
    if(particles.body.position.y > 760)
    { 
       if(particles.body.position.x > 301 && particles.body.position.x < 600)
       {
         score = score+200;
         particles = null;
       }
      }
    }
    if(particles != null){
      particles.display();
      if(particles.body.position.y > 760)
      { 
       if(particles.body.position.x > 601 && particles.body.position.x < 900)
       {
         score = score+300;
         particles = null;
       }
     }
    }
   //drawSprites();
}
function mousePressed(){
  if(gameState !== "end"){
  particles = new Particle(mouseX,10, 10,10);
  count++;
  }
}