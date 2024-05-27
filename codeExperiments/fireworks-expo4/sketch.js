let firework
let centre
function setup() {
  createCanvas(400, 400);
  //p=new Particle(200,200)
  
}

function draw() {
  background(0, 10);
  if(firework){
    firework.update(); 
  }
  if (centre){
    centre.update();
  }
}

function mouseWheel(){
  firework=new Firework(mouseX, mouseY)
}

class Firework{
  constructor(x,y){
    this.p=[]
    this.numParticles=300
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
    this.speed=(0.6, 0.6)
    this.fall=-0.2
    this.gravity=0.001
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
    
  }
  
  update(){
    this.x+=this.moveX*2
   this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
  }
  
  show(){
    fill(255,0,255)
    noStroke()
  // ellipse(this.x, this.y, 5)
      quad(this.x, this.y, this.x*2, this.y*2, 50, 38, this.x, this.y  )
  }
}