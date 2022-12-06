import ButtonGroup from "../components/ButtonGroup";
import PortfolioGrid from "../components/PortfolioGrid";

function Portfolio() {
  return (
    <div className="flex h-auto m-16 p-16 bg-lime-800" id="portfolio">
      <div className="m-auto bg-amber-600 p-8">
      <h1 className="mb-12 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          My Portfolio
        </h1>
        <div id="project-control w-full">
          <ButtonGroup />
        </div>

        <div className="grid bg-blue-500" id="projects-display">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
