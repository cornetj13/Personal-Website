import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

function PortfolioCard({ image, gif, website, github, title }) {
  return (
    <div className="relative group bg-black rounded-xl hover:scale-95 transition-transform duration-500">
      <img
        className="w-full h-full rounded-xl object-cover group-hover:opacity-0"
        src={image}
        alt="The landing page of a project of mine."
      />
      {gif ? (
        <img
          className="w-full h-full rounded-xl object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100"
          src={gif}
          alt="Gif of a project of mine being used or played."
        />
      ) : (
        <img
          className="w-full h-full rounded-xl object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100"
          src={image}
          alt="Picture of a project of mine."
        />
      )}
      <div className="portfolio-card-layout opacity-0 group-hover:opacity-100 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500">
        <div className="h-full col-flex justify-between group-hover:translate-y-0">
          <h3 className="portfolio-card-title">{title}</h3>
          <ul className="row-flex justify-end text-sm gap-8">
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="flex center-all"
            >
              <li className="bg-github hover:bg-button-hover portfolio-button-color portfolio-button-layout flex center-all">
                <MdOpenInBrowser className="portfolio-icons" />
              </li>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex center-all"
            >
              <li className="bg-github hover:bg-github-green portfolio-button-color portfolio-button-layout flex center-all">
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
