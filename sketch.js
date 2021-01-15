const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
 
var engine, world;
var grounD;
 
var particles = [];
var plinkos =[];
var division = [];
 
var divisionHeight= 300;
 
var score =0;
 
var particle ;
 
var turn = 0 ;
 
var gameState ;
 
 
function setup() { 
 createCanvas(800,800);
  
 
   engine = Engine.create();
   world = engine.world;

   grounD =new Ground(400,795,800,10);
 
    for (var k=0; k <=innerWidth; k= k+80){
       division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
 
   for (var j=25; j<=width; j=j+50)
   {
       plinkos.push(new Plinko(j,75,10));
  }
 
   for (var j=50; j<=width-10; j=j+50)
   {
       plinkos.push(new Plinko(j,175,10));
  }
 
   for (var j=25; j<=width; j=j+50)
   {
       plinkos.push(new Plinko(j,275,10));
  }
 
   for (var j=50; j<=width-10; j=j+50)
   {
       plinkos.push(new Plinko(j,375,10));
   }
 
   Engine.run(engine);
 }
 
function draw() {
 rectMode(CENTER);
 background(0,0,0);
 Engine.update(engine);
 
 
 noStroke();
 textSize(30)
 fill("lavender")
 text("Score   "+ score, width-450, 50)
 text("500" , 20, 600);
 text("500" , 90, 600);
 text("500" , 170, 600);
 text("1000" , 250, 600);
 text("1000" , 330, 600);
 text("1000" , 410, 600);
 text("1500" , 490, 600);
 text("1500" , 570, 600);
 text("1500" , 650, 600);
 
 grounD.display();
 
 //if(frameCount%50===0){
  // particles.push(new Particle(random(width/2-10,width/2+10),10,10));
//}
 
for(var b=0;b<plinkos.length;b++){
  plinkos[b].display();
}

if (particle != null) {
 particle.display();
 
 if (particle.body.position.y > 760) {
   if (particle.body.position.x < 300) {
     score = score + 500;
     particle = null;
     if (turn >= 5) gameState = "end";
   } 
   else if (
     particle.body.position.x < 600 &&
     particle.body.position.x > 301
   ) {
     score = score + 100;
     particle = null;
     if (turn >= 5) gameState = "end";
   } 
   else if (
     particle.body.position.x < 900 &&
     particle.body.position.x > 601) {
     score = score + 200;
     particle = null;
     if (turn >= 5) gameState = "end";
   }
 }
}
 
 
 for(var k=0;k<division.length;k++){
   division[k].display();
 }
 
 //for(var a=0;a<particles.length;a++){
  // particles[a].display();
// }
 
   
 if (gameState == "end") {
  textSize(100);
  fill("perwinkle");
  text("Game Over", 150, 250);
}
 
 
 drawSprites();
}
 
function keyPressed(){
   if (gameState !== "end"){
       turn ++ ;
       particle = new Particle (mouseX , 10 ,10 ,10);
   }
}
 
 
