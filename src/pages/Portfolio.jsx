// import ButtonGroup from '../components/ButtonGroup';
import PortfolioGrid from '../components/PortfolioGrid';

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="outer-box-color outer-box-layout outer-box-border"
    >
      <div className="inner-box-second-color inner-box-layout inner-box-border">
        <h1 className="text-header center-all text-light-text">
          My <mark className="text-mark-portfolio">Portfolio</mark>
        </h1>
        {/* <div id="project-control">
          <ButtonGroup />
        </div> */}

        <div id="projects-display">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
