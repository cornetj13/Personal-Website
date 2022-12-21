import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav
      className="navbar-colors"
      id="navbar"
    >
      <ul className="row-flex center-around navbar-layout">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-text navbar-animation"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-text navbar-animation"
          >
            Portfolio
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-text navbar-animation"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
