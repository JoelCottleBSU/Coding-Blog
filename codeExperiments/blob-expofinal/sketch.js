let cbs=[]
let numClickables=50

function setup() {
  createCanvas(400, 400 );
  
  for(let i=0; i<numClickables; i++){
    cbs.push(new ClickableBlob(random(width), random(height), 50))
  }
  console.log(cbs)
}

function draw() {
  background(220);
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
     this.vx = random(-1, 1); // Initial velocity in X
    this.vy = random(-1, 1); // Initial velocity in Y
    this.s=random(s)
    this.hover=false
    this.color = color(random(255), random(255), random(255)); // Random colors
  }
  
  click(){
    if(this.hover){
      this.vx=random(-10, 10)//changes direction suddenly on click
      this.vy=random(-10, 10)
      this.color = this.color = color(random(255), random(255), random(255));
    }
  }
  
  update(){
    this.x+=this.vx;//changes position based on velocity
    this.y+=this.vy;
    
     if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
    let d=dist(this.x, this.y, mouseX, mouseY)
    this.hover = d < this.s/2
  }
  
  show(){
    fill(this.color)
    if(this.hover){
      fill(0,200,100)
    }
    stroke(0)
    ellipse(this.x, this.y, this.s, this.s  )
  }
  
}