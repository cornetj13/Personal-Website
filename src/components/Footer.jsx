import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-600 text-snow p-6 border-t-4 border-warm-blue">
      <div className="col-flex center-all w-full gap-2">
        <ul className="row-flex center-all text-sm gap-8 relative">
          <li className="bg-linkedin hover:bg-dark-blue footer-button-color footer-button-layout footer-button-animation right-[40px] flex center-all">
            <a
              href="https://www.linkedin.com/in/cornetj13/"
              target="_blank"
              className="flex center-all"
            >
              <FaLinkedin className="footer-icons" />
            </a>
          </li>
          <li className="bg-github hover:bg-gray-600 footer-button-color footer-button-layout footer-button-animation left-[40px] flex center-all">
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
