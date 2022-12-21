// Target canvas element and canvas context.
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Set canvas to viewport size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create empty embers array.
let embersArray = [];

// Define Embers class which contains the following:
/*
  x-position: A random x position along the canvas width.
  y-position: A random y position above the canvas, so that the embers fall into frame randomly.
  size: A random size between 2 and 10 pixels.
  speed: A random speed between 0.5 and 1.5.
  x-direction: A random push in the x direction to create a non-linear fall pattern.

*/
class Ember {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0 - (Math.random() * 800);
    this.size = Math.random() * 10 + 2;
    this.directionX = (Math.random() * 1 + 0.5) * (Math.round(Math.random()) ? 1 : -1);
    this.directionY = Math.random() * 1 + 1;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    this.spin = Math.random() > 0.5 ? 0.2 : -0.2;
    this.frameCount = 0;

    this.t = 0;
  };

  update() {
    if(this.y > canvas.height) {
      this.y = 0 - this.size - (Math.random() * 500);
      this.x = Math.random() * canvas.width;
      this.speedX = 0;
      this.size = Math.random() * 10 + 1;
    };

    if(this.size > 1) {
      this.size -= (Math.random() * 0.01);
    }

    this.frameCount += 1;

    if(this.frameCount > 60) {
      this.frameCount = 0;
      this.speedX += (0.05);
      this.directionX = (Math.round(Math.random()) ? 1 : -1);
    }

    this.directionY = Math.random() * 1 + 1;

    this.y += this.directionY;
    this.x += this.directionX * this.speedX;
  };

  draw() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };
};

// Initialize an array with 100 unique embers.
function init() {
  for (let i = 0; i < 100; i++) {
    embersArray.push(new Ember());
  };
}

// Update and draw for each ember in array.
function handleEmbers() {
  for (let i = 0; i < embersArray.length; i++) {
    const ember = embersArray[i];
    ember.update();
    ember.draw();
  }
};

function animate() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  handleEmbers();
  requestAnimationFrame(animate);
};

// Track mouse data for reactive feature.
canvas.addEventListener('mousemove', function(event) {
  // console.log(event);
});

init();
animate();