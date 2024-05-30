let angle=0;

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(220);

for(let a=-15;a<TWO_PI;a+=2){
   translate(a+50,0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke();
  angle += 0.0003
const hue = frameCount*0.5 % 255;
  fill (hue, 100, 100);  
  box(10 + 10 * sin(millis()/200));//function found by kjhollen (pulsing box)
  
 
}
  

  
 
 
}