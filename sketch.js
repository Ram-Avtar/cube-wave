let angle = 0;
let w = 24;
let ma;
let maxD;


function setup() {
  createCanvas(500, 500,WEBGL);
  ma=atan(1/sqrt(2));
  
  maxD=dist(0,0,200,200);
}

function draw() {
  background(0);
  // ambientLight(199,145,200,20);
  let mX= mouseX;
let mY = mouseY;
  // pointLight(100,0,0,mX,mY,50);
  directionalLight(240,240,240,mX,mY,-1);
  ortho(-400,400,-400,400,0,1000);
  rotateX(-QUARTER_PI);
  rotateY(PI/4)
  rotateZ(ma);
  // translate(width / 2, height / 2);
  // rectMode(CENTER);

for(let z=0; z<height; z+=w){
  for (let x = 0; x < width; x += w) {
    
    
    push();
    
    let d= dist(x,z,width /2,height/2);
      let offset = map(d,0,maxD,-PI,PI);
    let a = angle + offset;
    let h = floor(map(sin(a), -1, 1, 50, 450));
    translate(x -width /2,0,z- height/2);
    ambientMaterial(150);
    // normalMaterial(140,150,100);
    // cylinder(w-2,h);
    box(w-2,h,w-2);
      // cone(w-2,h);
    // rect(x - width / 2 + w / 2, 0, w, h);

    pop();



  }
      // offset += 0.12;
}
  angle -= 0.25;


}