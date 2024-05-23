let cbs=[]
let numClickables=100

function setup() {
  createCanvas(400, 400, WEBGL);
  
  for(let i=0; i<numClickables; i++){
    cbs.push(new ClickableBlob(random(width), random(height), 100))
  }
  console.log(cbs)
}

function draw() {
  background(220, 100, 10);
  cbs.forEach(function(cb){
    cb.update()
    cb.show()
  })
}

function mousePressed(){
  cbs.forEach(function(cb){
    cb.click()
  })
}

class ClickableBlob{
  constructor(x,y,s){
    this.tx=x
    this.ty=y
    this.x=x
    this.y=y
    this.s=s
    this.hover=true
  }
  
  click(){
    if(this.hover){
      this.tx=random(width)
      this.ty=random(height)
    }
  }
  
  update(){
    this.x+=(this.tx-this.x)/10
    this.y+=(this.ty-this.y)/10
    let d=dist(this.x, this.y, mouseX, mouseY)
    this.hover = d < this.s/2
  }
  
  show(){
    fill(255)
    if(this.hover){
      fill(1,110,100)
    }
    stroke(0)
    ellipsoid(this.x, this.y, this.s, 10)
  }
  
}