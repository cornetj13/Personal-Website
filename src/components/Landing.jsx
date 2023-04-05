import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Particles from './Particles';

const animateHeading = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const linkProps = {
  spy: true,
  smooth: true,
  duration: 500,
};

function Landing() {
  return (
    <section className="landing-colors landing-layout col-flex center-all">
      <Particles />
      <motion.div initial="hidden" animate="visible" variants={animateHeading}>
        <h1 className="landing-header">Welcome!</h1>
        <p className="landing-tagline text-tagline-size">
          I'm <span>Jonathan Cornet</span>. Let me show you some of{' '}
          <Link to="portfolio" {...linkProps} className="landing-my-work-text">
            my work
          </Link>
          .
        </p>
        <p className="landing-tagline text-tagline-size">
          Or, you can meet me first.
        </p>
        <Link
          to="navbar"
          {...linkProps}
          offset={138}
          className="landing-button-colors landing-button-border landing-button-layout landing-button-animation center-all self-center group"
        >
          About me
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
      </motion.div>
    </section>
  );
}

export default Landing;
