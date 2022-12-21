import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

function PortfolioCard({ image }) {
  return (
    <div className='relative'>
      <img
        className="rounded-xl w-full h-full"
        src={image}
        alt="Picture or Gif of a previous project."
      />

      <ul className="row-flex center-all text-sm gap-8">
        <li className="bg-github portfolio-button-color portfolio-button-layout right-[20px] flex center-all">
          <a
            href="https://www.linkedin.com/in/cornetj13/"
            target="_blank"
            className="flex center-all"
          >
            <FaGithub className="portfolio-icons" />
          </a>
        </li>
        <li className="bg-github portfolio-button-color portfolio-button-layout right-[120px] flex center-all">
          <a
            href="https://www.linkedin.com/in/cornetj13/"
            target="_blank"
            className="flex center-all"
          >
            <MdOpenInBrowser className="portfolio-icons" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioCard;
