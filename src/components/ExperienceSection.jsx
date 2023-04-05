const linkProps = {
  target: '_blank',
  rel: 'noreferrer',
  className: 'z-10',
};

function ExperienceSection({ experience, time, description, icon, link }) {
  return (
    <li className="relative mb-6 sm:mb-2 md:mb-6 text-center">
      <div className="flex items-center">
        <div className="experience-through-line"></div>
        <a href={link} {...linkProps}>
          <div className="experience-circle-color experience-circle-layout experience-circle-animation experience-circle-hover-animation">
            {icon}
          </div>
        </a>
        <div className="experience-through-line"></div>
      </div>
      <div className="mt-4 sm:pr-8">
        <h3 className="text-tagline-size font-semibold">{experience}</h3>
        <time className="text-subtagline-size experience-subheader">
          {time}
        </time>
        <p className="experience-paragraph text-subtagline-size">
          {description}
        </p>
      </div>
    </li>
  );
}

export default ExperienceSection;
