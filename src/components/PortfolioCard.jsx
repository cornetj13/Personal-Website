import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

function PortfolioCard({ image, gif, website, github, title }) {
  return (
    <div className="group portfolio-card-div">
      <img
        className="portfolio-card-image group-hover:opacity-0"
        src={image}
        alt="The landing page of a project of mine."
      />
      {gif ? (
        <img
          className="portfolio-card-image portfolio-card-hover-image group-hover:opacity-100"
          src={gif}
          alt="Gif of a project of mine being used or played."
        />
      ) : (
        <img
          className="portfolio-card-image portfolio-card-hover-image group-hover:opacity-100"
          src={image}
          alt="Picture of a project of mine."
        />
      )}
      <div className="portfolio-card-layout  group-hover:opacity-100 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        <div className="h-full col-flex justify-between group-hover:translate-y-0">
          <h3 className="portfolio-card-title">{title}</h3>
          <ul className="row-flex justify-end text-sm gap-8">
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="flex center-all"
            >
              <li className="bg-github hover:bg-button-hover portfolio-button-color portfolio-button-layout center-all">
                <MdOpenInBrowser className="portfolio-icons" />
              </li>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex center-all"
            >
              <li className="bg-github hover:bg-github-green portfolio-button-color portfolio-button-layout center-all">
                <FaGithub className="portfolio-icons" />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
