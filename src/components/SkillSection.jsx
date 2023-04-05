import React from 'react';

const linkProps = {
  target: '_blank',
  rel: 'noreferrer',
  className: 'link-hover',
};

function SkillSection({ skill, place, icon, links }) {
  return (
    <li
      className={
        place === 'Top'
          ? 'skills-layout pt-4'
          : place === 'Middle'
          ? 'skills-layout'
          : 'skills-layout-bottom'
      }
    >
      <span className="skills-circle-color skills-circle-layout">{icon}</span>
      <h3 className="skills-header text-tagline-size">{skill}:</h3>
      <p className="skills-text">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.href} {...linkProps}>
              {' '}
              {link.label}
            </a>
            {index === links.length - 1 ? '' : ' |'}
          </React.Fragment>
        ))}
      </p>
    </li>
  );
}

export default SkillSection;
