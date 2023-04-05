import PortfolioCard from './PortfolioCard';
import GridlockeGif from '../images/Gridlocke.gif';
import GridlockeImage from '../images/Gridlocke-Image.png';
import FeedbackApp from '../images/Feedback-App.png';
import GithubFinder from '../images/Github-Finder.png';
import CaregiverConnection from '../images/Caregiver-Connection.png';
import SupportDesk from '../images/Support-Desk.png';
import HouseMarketplace from '../images/Housing-Marketplace.png';
import WeatherDashboard from '../images/Weather-Dashboard.png';
import WorkdayScheduler from '../images/Workday-Scheduler.png';

const portfolioItems = [
  {
    image: GridlockeImage,
    gif: GridlockeGif,
    website: 'https://gridlocke.net/',
    github: 'https://github.com/neft-tk/fatal-forge',
    title: 'Gridlocke',
    className: 'portfolio-card-special',
  },
  {
    image: FeedbackApp,
    website: 'https://awesome-beaver-2e320b.netlify.app/',
    github: 'https://github.com/cornetj13/React-Feedback-App',
    title: 'Feedback App',
    className: 'portfolio-card-normal',
  },
  {
    image: SupportDesk,
    website: 'https://cornetsupportdesk.herokuapp.com/',
    github: 'https://github.com/cornetj13/MERN-SupportTicket-App',
    title: 'Support Ticket',
    className: 'portfolio-card-normal',
  },
  {
    image: GithubFinder,
    website: 'https://react-git-hub-finder-app-gt2k0p2be-cornetj13.vercel.app/',
    github: 'https://github.com/cornetj13/React-GitHubFinder-App',
    title: 'Github Profile Finder',
    className: 'portfolio-card-normal',
  },
  {
    image: HouseMarketplace,
    website: 'https://react-housing-market-app.vercel.app/',
    github: 'https://github.com/cornetj13/React-HousingMarket-App',
    title: 'Housing Marketplace',
    className: 'portfolio-card-special',
  },
  {
    image: WeatherDashboard,
    website: 'https://cornetj13.github.io/weather-dashboard/',
    github: 'https://github.com/cornetj13/weather-dashboard',
    title: 'Weather Dashboard',
    className: 'portfolio-card-normal',
  },
  {
    image: WorkdayScheduler,
    website: 'https://cornetj13.github.io/work-day-scheduler/',
    github: 'https://github.com/cornetj13/work-day-scheduler',
    title: 'Workday Scheduler',
    className: 'portfolio-card-normal',
  },
  {
    image: CaregiverConnection,
    website: 'https://caregiver-connection.herokuapp.com/',
    github: 'https://github.com/cornetj13/caregiver-connection',
    title: 'Caregiver Connection',
    className: 'portfolio-card-normal',
  },
];

function PortfolioGrid() {
  return (
    <div className="grid-layout center-all">
      {portfolioItems.map((item) => (
        <div key={item.title} className={item.className}>
          <PortfolioCard {...item} />
        </div>
      ))}
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
