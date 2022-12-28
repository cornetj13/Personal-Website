import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Landing() {
  // // Create empty embers array.
  // const [embersArray, setEmbersArray] = useState([])

  // // Target canvas element and canvas context.
  // const canvas = document.getElementById('landing-canvas');
  // const ctx = canvas.getContext('2d');

  // // Set canvas to viewport size.
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  // // Define Embers class which contains the following:
  // /*
  //   x-position: A random x position along the canvas width.
  //   y-position: A random y position above the canvas, so that the embers fall into frame randomly.
  //   size: A random size between 2 and 10 pixels.
  //   speed: A random speed between 0.5 and 1.5.
  //   x-direction: A random push in the x direction to create a non-linear fall pattern.
  //   y-direction:
  //   x-speed:
  //   y-speed:
  //   angle:
  //   spin:
  //   framecount:
  //   t:
  // */
  // class Ember {
  //   constructor() {
  //     this.x = Math.random() * canvas.width;
  //     this.y = 0 - (Math.random() * 800);
  //     this.size = Math.random() * 10 + 2;
  //     this.directionX = (Math.random() * 1 + 0.5) * (Math.round(Math.random()) ? 1 : -1);
  //     this.directionY = Math.random() * 1 + 1;
  //     this.speedX = 0;
  //     this.speedY = 0;
  //     this.angle = 0;
  //     this.spin = Math.random() > 0.5 ? 0.2 : -0.2;
  //     this.frameCount = 0;

  //     this.t = 0;
  //   };

  //   update() {
  //     if(this.y > canvas.height) {
  //       this.y = 0 - this.size - (Math.random() * 500);
  //       this.x = Math.random() * canvas.width;
  //       this.speedX = 0;
  //       this.size = Math.random() * 10 + 1;
  //     };

  //     if(this.size > 1) {
  //       this.size -= (Math.random() * 0.01);
  //     }

  //     this.frameCount += 1;

  //     if(this.frameCount > 60) {
  //       this.frameCount = 0;
  //       this.speedX += (0.05);
  //       this.directionX = (Math.round(Math.random()) ? 1 : -1);
  //     }

  //     this.directionY = Math.random() * 1 + 1;

  //     this.y += this.directionY;
  //     this.x += this.directionX * this.speedX;
  //   };

  //   draw() {
  //     ctx.fillStyle = 'red';
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  //     ctx.closePath();
  //     ctx.fill();
  //   };
  // };

  // // Initialize an array with 100 unique embers.
  // function init() {
  //   for (let i = 0; i < 100; i++) {
  //     setEmbersArray([
  //       // FIGURE OUT HOW TO FILL ARRAY!
  //     ]);
  //     // embersArray.push(new Ember());
  //   };
  // }

  // // Update and draw for each ember in array.
  // function handleEmbers() {
  //   for (let i = 0; i < embersArray.length; i++) {
  //     const ember = embersArray[i];
  //     ember.update();
  //     ember.draw();
  //   }
  // };

  // function animate() {
  //   ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  //   ctx.fillRect(0, 0, canvas.width, canvas.height)
  //   handleEmbers();
  //   requestAnimationFrame(animate);
  // };

  // useEffect(() => {
  //   init();
  // }, []);

  // useEffect(() => {
  //   // Track mouse data for reactive feature.
  //   canvas.addEventListener('mousemove', function(event) {
  //     // console.log(event);
  //   });

  //   animate();
  // });

  return (
    <div className="landing-colors landing-layout col-flex center-all">
      {/* <canvas id="landing-canvas"></canvas> */}
      <h1 id="landing-splash" className="landing-header">
        Welcome!
      </h1>
      <p className="landing-tagline text-tagline-size">
        I'm <span>Jonathan Cornet</span>. Let me show you some of{' '}
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          className="landing-my-work-text"
        >
          my work
        </Link>
        .
      </p>
      <Link
        to="navbar"
        spy={true}
        smooth={true}
        duration={500}
        className="landing-button-colors landing-button-border landing-button-layout landing-button-animation center-all self-center group"
      >
        Take a Look
        <svg
          className="landing-button-arrow-layout landing-button-arrow-spin group-hover:rotate-90"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}

export default Landing;
