/*
 * @name Geometries
 * @arialabel Seven 3D shapes in neon gradient rotating on a white background. Shapes include cube, cylinder, ring, pyramid, sphere, plane, and ellipsoid.
 * @description There are seven 3D primitives in p5 now.
 */

function setup() {
  createCanvas(710, 400, WEBGL);

  describe(
    'a 3d example containing seven primitive objects, a plane, box, cylinder, cone, torus, sphere, and ellipsoid.'
  );
}

function draw() {
  background(250);

 
  push();
   translate(-240, sin(frameCount * 0.01) * 50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noFill();
  stroke('black')
  plane(70);
  pop();

  push();
  translate(0, -100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70 + 20 * sin(millis()/200));//function found by kjhollen (pulsing box)
  pop();

  push();
  translate(240, -100, 0);
  noStroke();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  emissiveMaterial(255, 0, 0, 50);
  cylinder(70, 70);
  pop();

  push();
  translate(-250, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  const coneSize = frameCount * 0.02; // Increase cone size over time
  pointLight(255, 255, 255, 100, 50, 100);
  ambientMaterial(200);
  cone(coneSize, 70);
  pop();

  push();
  translate(-75, 100, 0);  
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  const hue = frameCount % 255;
  fill (hue, 100, 100);
  torus(50, 20);
  pop();

  push();
  translate(100, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
   shade = map(mouseX, 100, width, 0, 255, true);//https://pdm.lsupathways.org/2_graphics/1_proceduraldrawing/2_lesson_2/
 fill(shade);
  sphere(50);
  pop();

  push();
  translate(275, 100, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  const noiseScale = 0.06;
  const radiusScale = 100;
fill(200, 100, 25);
  stroke(2);
  const radiusX = 30 + noise(frameCount * noiseScale, 0) * radiusScale;
const radiusY = 40 + noise(frameCount * noiseScale, 1) * radiusScale;
ellipsoid(radiusX, radiusY, 70);
   
  pop();
}
