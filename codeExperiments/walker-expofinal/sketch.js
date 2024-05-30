let pos
let prev
let vel
let steer=5;
let friction=0.7
let trailLength = 0.2


function setup() {
  createCanvas(400, 400 , WEBGL);
  pos=createVector(width/2, height/2)
  prev=pos.copy()
   vel = createVector(random(-1, 1), random(-1, 1));
  background(200);


  vel=createVector(1,0)
  background(200);
}

function draw() {
   background(100, 100);
  
  let noiseAngle=noise(frameCount*0.01)*TWO_PI;
  let acc=p5.Vector.fromAngle(noiseAngle).mult(steer)
  vel.add(acc)
  vel.mult(friction)
  
  prev=pos.copy()
  pos.add(vel)
  
  stroke(200, 100);
   stroke(200, 100); // Adjust base color
  for (let i = 0; i < 15; i++) { 
    let alpha = 255 - i * 15; 
    strokeWeight(10); // Consistent line weight
    let trailPos = p5.Vector.lerp(pos, prev, i / 0.01); 
    line(trailPos.x, trailPos.y, prev.x, prev.y);
    fill(20, 10, alpha); 
    ellipsoid(trailPos.x, trailPos.y, 20, 20); 
  }
  
  edges()
  
}

function edges(){
  pos.x=(pos.x+width)%width;
  pos.y=(pos.y+height)%height;
}