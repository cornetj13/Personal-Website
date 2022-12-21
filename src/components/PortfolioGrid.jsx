import PortfolioCard from "./PortfolioCard";
import GridlockeGif from "../images/Gridlocke.gif"
import TestPicture1 from '../images/project-photo-1-resized.jpg'
import TestPicture2 from '../images/project-photo-2-resized.jpg'
import TestPicture3 from '../images/project-photo-3-resized.jpg'
import TestPicture4 from '../images/project-photo-4-resized.jpg'
import TestPicture5 from '../images/project-photo-5-resized.jpg'

function PortfolioGrid() {
  // TODO: Create all the different portfolios as an object, and pass the object down to the cards via props.

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <div className="sm:col-span-2 sm:row-span-2">
        <PortfolioCard image={GridlockeGif} />
      </div>
      <div>
        <PortfolioCard image={TestPicture1} />
      </div>
      <div>
        <PortfolioCard image={TestPicture2} />
      </div>
      <div>
        <PortfolioCard image={TestPicture3} />
      </div>
      <div className="lg:col-span-2 lg:row-span-2">
        <PortfolioCard image={TestPicture4} />
      </div>
      <div className="sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-1 ">
        <PortfolioCard image={TestPicture5} />
      </div>
      <div>
        <PortfolioCard image={TestPicture1} />
      </div>
      <div>
        <PortfolioCard image={TestPicture2} />
      </div>
      <div>
        <PortfolioCard image={TestPicture3} />
      </div>
      <div>
        <PortfolioCard image={TestPicture4} />
      </div>
      <div>
        <PortfolioCard image={TestPicture5} />
      </div>
      <div>
        <PortfolioCard image={TestPicture1} />
      </div>
      <div className="lg:col-span-2 lg:row-span-2">
        <PortfolioCard image={TestPicture2} />
      </div>
      <div>
        <PortfolioCard image={TestPicture3} />
      </div>
      <div>
        <PortfolioCard image={TestPicture4} />
      </div>
      <div>
        <PortfolioCard image={TestPicture5} />
      </div>
      <div>
        <PortfolioCard image={TestPicture1} />
      </div>
      <div>
        <PortfolioCard image={TestPicture2} />
      </div>
    </div>
  );
}

export default PortfolioGrid;

// WEBSITES:
/*
  React Feedback: https://awesome-beaver-2e320b.netlify.app/
  Github Finder: https://react-git-hub-finder-app-gt2k0p2be-cornetj13.vercel.app/
  Housing Marketplace: https://react-housing-market-app.vercel.app/
  MERN Support Ticket: https://cornetsupportdesk.herokuapp.com/
  Caregiver Connection: https://caregiver-connection.herokuapp.com/
  
*/