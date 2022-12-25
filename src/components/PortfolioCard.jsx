import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

function PortfolioCard({ image, website, github, title }) {
  return (
    <div className="relative group">
      <img
        className="w-full h-full rounded-xl object-cover group-hover:scale-95 transition-transform duration-500"
        src={image}
        alt="Picture or Gif of a previous project."
      />
      <div className="portfolio-card-layout opacity-0 group-hover:opacity-100 group-hover:scale-95 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500">
        <div className='h-full col-flex justify-between group-hover:translate-y-0'>
          <h3 className='portfolio-card-title'>{title}</h3>
          <ul className="row-flex justify-end text-sm gap-8">
            <a href={website} target="_blank" className="flex center-all">
              <li className="bg-github portfolio-button-color portfolio-button-layout flex center-all">
                <MdOpenInBrowser className="portfolio-icons" />
              </li>
            </a>
            <a href={github} target="_blank" className="flex center-all">
              <li className="bg-github portfolio-button-color portfolio-button-layout flex center-all">
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
