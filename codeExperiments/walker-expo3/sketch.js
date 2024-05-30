let pos
let prev
let vel
let steer=0.9
let friction=0.05

function setup() {
  createCanvas(400, 400 );
  pos=createVector(width, height)
  prev=pos.copy()
  vel=createVector(-1,0)
  background(200);
}

function draw() {
   background(100, 10);
  
  let noiseAngle=noise(pos.x*0.5, pos.y*0.08, frameCount*0.08)*TWO_PI
  let acc=p5.Vector.fromAngle(noiseAngle).mult(steer)
  vel.add(acc)
  vel.mult(friction)
  prev=pos.copy()
  pos.add(vel)
  line(prev.x, prev.y, pos.x, pos.y)
   ellipse(pos.x, pos.y, pos.x/2, pos.x/2)
  
  edges()
  
}

function edges(){
  pos.x=(pos.x+width)%width*4
  pos.y=(pos.y+height)%height/2
}