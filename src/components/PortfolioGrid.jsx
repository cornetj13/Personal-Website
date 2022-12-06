import PortfolioCard from "./PortfolioCard";

function PortfolioGrid() {
  // TODO: Create all the different portfolios as an object, and pass the object down to the cards via props.

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      <div className="col-span-2">
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div className="col-span-2">
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
      <div>
        <PortfolioCard />
      </div>
    </div>
  );
}

export default PortfolioGrid;
