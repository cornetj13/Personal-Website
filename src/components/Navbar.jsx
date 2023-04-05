import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const linkProps = {
  spy: true,
  smooth: true,
  duration: 500,
};

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const stickNavbar = () => {
      setIsSticky(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', stickNavbar);

    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const navbarClass = isSticky ? 'sticky-navbar-placement' : 'navbar-placement';

  return (
    <>
      <nav
        id="navbar"
        ref={navbarRef}
        className={`navbar-colors ${navbarClass}`}
      >
        <ul className="row-flex center-around navbar-layout">
          <li>
            <Link
              to="about"
              {...linkProps}
              className="navbar-text navbar-animation"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="portfolio"
              {...linkProps}
              className="navbar-text navbar-animation"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              {...linkProps}
              className="navbar-text navbar-animation"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {isSticky && (
        <div style={{ height: navbarRef.current.clientHeight }}></div>
      )}
    </>
  );
}

export default Navbar;
