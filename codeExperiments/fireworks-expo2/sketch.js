let firework


function setup() {
  createCanvas(400, 400, WEBGL);
  //p=new Particle(200,200)
  colorMode(HSB)
}

function draw() {
  background(0, 10);
  if(firework){
    firework.update()
  }
}

function mousePressed(){
  firework=new Firework(mouseX, mouseY, random(2,250))
}

class Firework{
  constructor(x,y,n){
    this.p=[]
    this.numParticles=n
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(x,y))
    }
  }
  
  update(){
    // this.p.forEach(function(thingy,i){
    //   if(thingy.update()){
    //     thingy.show()
    //   } else {
    //     // remove it
    //     this.p.splice(i,1)
    //   }
    // })
    
    for(let i=this.p.length-1; i>=0; i--){
      if(this.p[i].update()){
        this.p[i].show()
      } else {
        // remove it
        this.p.splice(i,5)
      }
    }
    fill(255)
    text(this.p.length,20,20)

  }
}


class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(PI)
    this.speed=random(1)
    this.fall=0.01
    this.gravity=0.03
    this.moveX=sin(this.a)*this.speed
    this.moveY=cos(this.a)*this.speed
    this.col=random(360)
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    return this.y<height
  }
  
  show(){
    fill(this.col,200,250)
    noStroke()
    
    ellipsoid(this.x, this.y, 0.05)
    
  }
}