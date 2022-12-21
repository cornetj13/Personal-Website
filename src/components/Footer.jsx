import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-orange-200 p-8">
      <div className="col-flex center-all w-full gap-2">
        <ul className="row-flex center-all text-sm gap-8 relative">
          <li className="bg-linkedin footer-button-color footer-button-layout right-[40px] flex center-all">
            <a
              href="https://www.linkedin.com/in/cornetj13/"
              target="_blank"
              className="flex center-all"
            >
              <FaLinkedin className="footer-icons" />
            </a>
          </li>
          <li className="bg-github footer-button-color footer-button-layout left-[40px] flex center-all">
            <a
              href="https://github.com/cornetj13"
              target="_blank"
              className="flex center-all"
            >
              <FaGithub className="footer-icons" />
            </a>
          </li>
        </ul>
        <p className="text-sm mt-4 p-2">
          © 2022 Jonathan Cornet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
