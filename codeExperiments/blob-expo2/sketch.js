let cbs=[]
let numClickables=300

function setup() {
  createCanvas(400, 400);
  text('hi', 200, 200)
  for(let i=0; i<numClickables; i++){
    cbs.push(new ClickableBlob(random(width), random(height), 50))
  }
  console.log(cbs)
 
}

function draw() {
  background(22, 100, 0);
  fill(0)
  text("you found me", 200, 200)
  cbs.forEach(function(cb){
    cb.update()
    cb.show()
  })
}

function mouseWheel(){
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
    this.hover=false
  }
  
  click(){
    if(this.hover){
      this.tx=random(width)
      this.ty=random(height)
    }
  }
  
  update(){
    this.x+=(this.tx-this.x)/8
    this.y+=(this.ty-this.y)/8
    let d=dist(this.x, this.y, mouseX, mouseY)
    this.hover = d < this.s/2
  }
  
  show(){
    fill(128)
    if(this.hover){
      fill(0,200,100)
    }
    stroke(5)
     square(this.x, this.y, this.s,10)
    fill(0)
    textAlign(CENTER,CENTER)
    text("scroll to reveal", this.x, this.y, this.s, this.s)
  }
}
  

