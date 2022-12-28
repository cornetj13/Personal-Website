import PortfolioCard from './PortfolioCard';
import GridlockeGif from '../images/Gridlocke.gif';
import GridlockeImage from '../images/Gridlocke-Image.png';
import FeedbackApp from '../images/Feedback-App.png';
import GithubFinder from '../images/Github-Finder.png';
import CaregiverConnection from '../images/Caregiver-Connection.png';
import SupportDesk from '../images/Support-Desk.png';
import HouseMarketplace from '../images/Housing-Marketplace.png';

function PortfolioGrid() {
  // TODO: Create all the different portfolios as an object, and pass the object down to the cards via props.

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <div className="sm:col-span-2 sm:row-span-2">
        <PortfolioCard
          image={GridlockeImage}
          gif={GridlockeGif}
          website={'https://gridlocke.net/'}
          github={'https://github.com/neft-tk/fatal-forge'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={FeedbackApp}
          website={'https://awesome-beaver-2e320b.netlify.app/'}
          github={'https://github.com/cornetj13/React-Feedback-App'}
          title="Feedback App"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={GithubFinder}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Github Profile Finder"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={CaregiverConnection}
          website={'https://caregiver-connection.herokuapp.com/'}
          github={'https://github.com/cornetj13/caregiver-connection'}
          title="Caregiver Connection"
        />
      </div>
      <div className="lg:col-span-2 lg:row-span-2">
        <PortfolioCard
          image={HouseMarketplace}
          website={'https://react-housing-market-app.vercel.app/'}
          github={'https://github.com/cornetj13/React-HousingMarket-App'}
          title="Housing Marketplace"
        />
      </div>
      <div className="sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-1 ">
        <PortfolioCard
          image={SupportDesk}
          website={'https://cornetsupportdesk.herokuapp.com/'}
          github={'https://github.com/cornetj13/MERN-SupportTicket-App'}
          title="Support Ticket"
        />
      </div>
      {/* <div className="flex center-all">
        <PortfolioCard
          image={TestPicture1}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture2}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture3}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture4}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture5}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture1}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="lg:col-span-2 lg:row-span-2">
        <PortfolioCard
          image={TestPicture2}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture3}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture4}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture5}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture1}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div>
      <div className="flex center-all">
        <PortfolioCard
          image={TestPicture2}
          website={'https://google.com'}
          github={'https://google.com'}
          title="Gridlocke"
        />
      </div> */}
    </div>
  );
}

export default PortfolioGrid;

// WEBSITES:
/*
  You have hosted using: Heroku, Vercel, Netlify, and Github Pages
*/
/*
  Gridlocke: https://gridlocke.net/ 
  React Feedback: https://awesome-beaver-2e320b.netlify.app/
  Github Finder: https://react-git-hub-finder-app-gt2k0p2be-cornetj13.vercel.app/
  Caregiver Connection: https://caregiver-connection.herokuapp.com/
  Housing Marketplace: https://react-housing-market-app.vercel.app/
  MERN Support Ticket: https://cornetsupportdesk.herokuapp.com/
  Stay Homie: https://cornetj13.github.io/stay-homie/
*/
