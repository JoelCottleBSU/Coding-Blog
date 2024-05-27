let pos
let prev
let vel
let steer=7
let friction=0.75

function setup() {
  createCanvas(400, 400 );
  pos=createVector(width/5, height/5)
  prev=pos.copy()
  vel=createVector(1,0)
  background(200);
}

function draw() {
   //background(100);
  
  let noiseAngle=noise(pos.x*0.5, pos.y*0.03, frameCount*0.03)*TWO_PI
  let acc=p5.Vector.fromAngle(noiseAngle).mult(steer)
  vel.add(acc)
  vel.mult(friction)
  prev=pos.copy()
  pos.add(vel)
  line(prev.x, prev.y, pos.x, pos.y)
   triangle(pos.x, pos.y, 200, 200)
  
  edges()
  
}

function edges(){
  pos.x=(pos.x+width)%width
  pos.y=(pos.y+height)%height
}