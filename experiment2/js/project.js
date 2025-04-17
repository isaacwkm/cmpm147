// project.js - purpose and description here
// Author: Isaac Kim
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }

  // define a method
  myMethod() {
    // code to run when method is called
  }
}

let seed = 239;

function setup() {
  let cnv = createCanvas(800, 400); // <-- set your desired fixed size
  cnv.parent("canvas-container");

  document.getElementById("reimagine-btn").addEventListener("click", () => {
    seed++;
    redraw(); // force draw() to re-run if you're using noLoop()
  });
}


function draw() {
  randomSeed(seed);

  const SKY_TOP = color("#3b392f");
  const SKY_MID = color("#8f8165");
  const SUN_BAND = color("#c8ba8f");
  const HILL_FAR = color("#585040");
  const HILL_MID = color("#464132");
  const HILL_NEAR = color("#2f2d18");

  noStroke();

  fill(SKY_TOP);
  rect(0, 0, width, height * 0.35);

  fill(SKY_MID);
  rect(0, height * 0.35, width, height * 0.15);

  fill(SUN_BAND);
  rect(0, height * 0.50, width, height * 0.05);

  function drawRange(baseY, amp, steps, col) {
    fill(col);
    beginShape();
    vertex(0, height);
    vertex(0, baseY);
    for (let i = 0; i <= steps; i++) {
      const x = (width * i) / steps;
      const y = baseY - noise(seed * 0.1 + i * 0.2) * amp;
      vertex(x, y);
    }
    vertex(width, baseY);
    vertex(width, height);
    endShape(CLOSE);
  }

  drawRange(height * 0.55, 12, 40, HILL_FAR);
  drawRange(height * 0.70, 25, 30, HILL_MID);

  fill(HILL_NEAR);
  beginShape();
  vertex(width * 0.55, height * 0.75);
  vertex(width, height * 0.55);
  vertex(width, height);
  vertex(width * 0.45, height);
  endShape(CLOSE);

  const trees = 40;
  const scrub = mouseX / width;
  fill(20, 25, 15);
  for (let i = 0; i < trees; i++) {
    const z = random(0.7, 1.4);
    const x = width * ((random() + scrub / 50) % 1);
    const s = (width / 80) / z;
    const y = height * 0.72 + (random() * 10) / z;
    triangle(x, y - s, x - s / 2, y, x + s / 2, y);
  }
}


// let's get this party started - uncomment me
main();
