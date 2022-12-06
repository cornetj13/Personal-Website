import TestPicture from '../images/project-photo-1-resized.jpg'

function PortfolioCard() {
  return (
    <div>
      {/* <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"> */}
        {/* <a href="https://awesome-beaver-2e320b.netlify.app/" target="_blank" /> */}
          <img
            className="rounded-lg"
            src={TestPicture}
            alt="image description"
            width="150"
            height="150"
          />
        {/* </a> */}
        {/* <figcaption className="absolute bottom-6 px-4 text-lg text-white" />
          <p>
            Do you want to get notified when a new component is added to Flowbite?
          </p>
        </figcatpion>
      </figure> */}
    </div>
  );
}

export default PortfolioCard;
