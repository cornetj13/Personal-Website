import ButtonGroup from "../components/ButtonGroup";
import PortfolioGrid from "../components/PortfolioGrid";

function Portfolio() {
  return (
    <div className="outer-box-color outer-box-layout outer-box-border" id="portfolio">
      <div className="inner-box-second-color inner-box-layout inner-box-border">
      <h1 className="text-header center-all">
          My Portfolio
        </h1>
        <div id="project-control">
          <ButtonGroup />
        </div>

        <div className="bg-blue-500" id="projects-display">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
