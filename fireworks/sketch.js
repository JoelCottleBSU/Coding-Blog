let firework

function setup() {
  createCanvas(400, 400);
  //p=new Particle(200,200)
  
}

function draw() {
  background(0, 10);
  if(firework){
    firework.update()
  }
}

function mousePressed(){
  firework=new Firework(mouseX, mouseY)
}

class Firework{
  constructor(x,y){
    this.p=[]
    this.numParticles=100
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(x,y))
    }
  }
  
  update(){
    this.p.forEach(function(thingy){
      thingy.update()
      thingy.show()
    })

  }
}


class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(2.5,4.5)
    this.fall=0
    this.gravity=0.05
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
    
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
  }
  
  show(){
    fill(255,0,0)
    noStroke()
    ellipse(this.x, this.y, 5)
  }
}