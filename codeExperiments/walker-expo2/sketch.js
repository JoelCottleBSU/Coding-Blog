let xPos, yPos
let xPrev, yPrev
let numDirections=80
let direction=0
let step=20

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  xPos=width/2
  yPos=height/2
  xPrev=xPos
  yPrev=yPos
  background(220);
  // frameRate(60)
}

function draw() {
  // background(220,20);
  // let newDir=floor(random(numDirections))
  direction+=(noise(xPos/50, yPos/50, frameCount/100)-0.5)*PI/3
  // let toCentre=atan2(yPos-height/2, xPos-width/2)
  // direction+=(toCentre-direction)/20
  step=noise(xPos/230, yPos/230, frameCount/100)*25
  let xStep=cos(direction) * step
  let yStep=sin(direction) * step
  xPrev=xPos
  yPrev=yPos
  xPos+=xStep
  yPos+=yStep
  edges()
  if(frameCount%2<1){
    stroke(200,100,100)
  } else {
    stroke(10)
  }
  if(random(200)<10){
    direction=random(TWO_PI)
  }
  strokeWeight(noise(xPos/30, yPos/30, frameCount/150)*15)
  line(xPrev, yPrev, xPos, yPos)
  fill(0)
   ellipsoid(xPos,yPos,20)
}

// function mouseClicked(){
//   xPos=width
//   yPos=height
// }

function edges(){
  if(xPos<0){ 
    xPos=width-5
    // direction+=PI
    xPrev=xPos
  }
  if(xPos>width){ 
    xPos=5
    // direction+=PI
    xPrev=xPos
  }
  if(yPos<0){ 
    yPos=height-5
    // direction+=PI
    yPrev=yPos
  }
  if(yPos>height){ 
    yPos=5
    // direction+=PI
    yPrev=yPos
  }
}