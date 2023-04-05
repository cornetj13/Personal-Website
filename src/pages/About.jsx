import ProfilePicture from '../images/Jon2021.jpg';
import { FaLayerGroup, FaServer, FaTerminal } from 'react-icons/fa';
import { MdSchool, MdWork, MdMiscellaneousServices } from 'react-icons/md';
import { GiBoots } from 'react-icons/gi';
import { IoIosBrowsers } from 'react-icons/io';

function About() {
  return (
    <div
      className="outer-box-color outer-box-layout outer-box-border"
      id="about"
    >
      <div className="inner-box-color inner-box-layout inner-box-border">
        {/* About Section Title */}
        <h2 className="text-header center-all">
          <mark className="text-mark">About</mark> Me
        </h2>

        <div className="flex col-flex lg:row-flex">
          <div
            className="flex-col center-all m-2 md:m-8 lg:w-1/2 max-w-2xl"
            id="bio-box"
          >
            {/* Avatar */}
            <div className="flex mx-auto w-4/5">
              <img
                className="rounded shadow-xl w-full h-full lg:mx-auto profile-picture-clip"
                src={ProfilePicture}
                alt="Picture of Jonathan Cornet"
              />
            </div>

            {/* Bio */}
            <div className="my-2 md:my-6 p-6 text-subtagline-size">
              <p>
                I am programmer who took quite the detour before ending up on my
                current path. I have lived other lives as a physicist, a
                bartender, a tour guide, and a teacher. After I finished my
                degree in 2017, I spent some time living in Paris. While there,
                I rediscovered my love of programming, a skill I had picked up
                in college. I decided to make it my fulltime career at the start
                of 2020, and have worked in a variety of fields, from
                computational modeling to web developement. I'm doing what I
                love and living by the motto: "always learning, always
                improving, and always coding"!
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="p-4 md:p-12 md:w-1/2" id="skills-box">
            <ol className="relative border-l-2 border-landing-color">
              {/* Front-End Skills */}
              <li className="skills-layout pt-4">
                <span className="skills-circle-color skills-circle-layout">
                  <IoIosBrowsers className="skills-circle-icon" />
                </span>
                <h3 className="skills-header text-tagline-size">Front-End:</h3>
                <p className="text-subtagline-size skills-text">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    HTML
                  </a>{' '}
                  |
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    CSS
                  </a>{' '}
                  |
                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    SASS
                  </a>{' '}
                  |
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    JavaScript (ES5/6)
                  </a>
                </p>
              </li>

              {/* Back-End Skills */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaServer className="skills-circle-icon" />
                </span>
                <h3 className="skills-header text-tagline-size">Back-End:</h3>
                <p className="text-subtagline-size skills-text">
                  <a
                    href="https://en.wikipedia.org/wiki/SQL"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    SQL
                  </a>{' '}
                  |
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    MySQL
                  </a>{' '}
                  |
                  <a
                    href="https://www.mongodb.com/home"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    MongoDB
                  </a>{' '}
                  |
                  <a
                    href="https://graphql.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    GraphQL
                  </a>{' '}
                  |
                  <a
                    href="https://sequelize.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Sequelize
                  </a>{' '}
                  |
                  <a
                    href="https://www.json.org/json-en.html"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    JSON
                  </a>
                </p>
              </li>

              {/* Multi-Purpose Skills */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaTerminal className="skills-circle-icon" />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Multi-Purpose:
                </h3>
                <p className="text-subtagline-size skills-text">
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    Python
                  </a>{' '}
                  |
                  <a
                    href="https://fortran-lang.org/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    FORTRAN
                  </a>{' '}
                  |
                  <a
                    href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    C#
                  </a>{' '}
                  |
                  <a
                    href="https://www.java.com/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Java
                  </a>{' '}
                  |
                  <a
                    href="https://isocpp.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    C++
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/C_(programming_language)"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    C
                  </a>{' '}
                  |
                  <a
                    href="https://kotlinlang.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Kotlin
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/Object-oriented_programming"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    OOP Methodology
                  </a>
                </p>
              </li>

              {/* Frameworks */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaLayerGroup className="skills-circle-icon" />
                </span>
                <h3 className="skills-header text-tagline-size">Frameworks:</h3>
                <p className="text-subtagline-size skills-text">
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    Node JS
                  </a>{' '}
                  |
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    React JS
                  </a>{' '}
                  |
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Express JS
                  </a>{' '}
                  |
                  <a
                    href="https://www.npmjs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    NPM
                  </a>{' '}
                  |
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Tailwind
                  </a>{' '}
                  |
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Bootstrap
                  </a>{' '}
                  |
                  <a
                    href="https://www.ibm.com/cloud/learn/rest-apis"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    REST APIs
                  </a>{' '}
                  |
                  <a
                    href="https://jquery.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    jQuery
                  </a>{' '}
                  |
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    AJAX
                  </a>{' '}
                  |
                  <a
                    href="https://mongoosejs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Mongoose JS
                  </a>{' '}
                  |
                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Firebase
                  </a>{' '}
                  |
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    AWS
                  </a>
                </p>
              </li>

              {/* Misc Skills */}
              <li className="skills-layout-bottom">
                <span className="skills-circle-color skills-circle-layout">
                  <MdMiscellaneousServices className="skills-circle-icon" />
                </span>
                <h3 className="skills-header text-tagline-size">Misc:</h3>
                <p className="text-subtagline-size skills-text">
                  <a
                    href="https://unity.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    Unity
                  </a>{' '}
                  |
                  <a
                    href="https://www.adobe.com/creativecloud.html"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Adobe XD
                  </a>{' '}
                  |
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Figma
                  </a>{' '}
                  |
                  <a
                    href="https://www.aseprite.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Aseprite
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/Agile_software_development"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Agile
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    MVC
                  </a>{' '}
                  |
                  <a
                    href="https://jestjs.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    Testing (Jest JS)
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    MERN Stack
                  </a>{' '}
                  |
                  <a
                    href="https://en.wikipedia.org/wiki/Progressive_web_app"
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {' '}
                    PWAs
                  </a>
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Experience */}
        <div id="experience-box">
          <ol className="col-flex md:row-flex">
            {/* Bootcamp Experience */}
            <li className="relative mb-6 sm:mb-0 text-center">
              <div className="flex items-center">
                <div className="experience-through-line"></div>
                <a
                  href="https://bootcamp.uw.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <div className="experience-circle-color experience-circle-layout experience-circle-animation experience-circle-hover-animation">
                    <GiBoots className="experience-circle-icon" />
                  </div>
                </a>
                <div className="experience-through-line"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-tagline-size font-semibold">
                  University of Washington Full-stack Bootcamp Graduate
                </h3>
                <time className="text-subtagline-size experience-subheader">
                  Graduated: December 2022
                </time>
                <p className="experience-paragraph text-subtagline-size">
                  Up to date on modern web developement practices and
                  methodologies.
                </p>
              </div>
            </li>

            {/* University Experience */}
            <li className="relative mb-6 sm:mb-0  text-center">
              <div className="flex items-center">
                <div className="experience-through-line"></div>
                <a
                  href="https://www.wwu.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <div className="experience-circle-color experience-circle-layout experience-circle-animation experience-circle-hover-animation">
                    <MdSchool className="experience-circle-icon" />
                  </div>
                </a>
                <div className="experience-through-line"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-tagline-size font-semibold">
                  Western Washington University Double Major
                </h3>
                <time className="text-subtagline-size experience-subheader">
                  Graduated: June 2017
                </time>
                <p className="experience-paragraph">
                  Bachelor of Science in Physics and Bachelor of Arts in Chinese
                  Language
                </p>
              </div>
            </li>

            {/* Work Experience */}
            <li className="relative mb-6 sm:mb-0  text-center">
              <div className="flex items-center">
                <div className="experience-through-line"></div>
                <a
                  href="https://cvdyn.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <div className="experience-circle-color experience-circle-layout experience-circle-animation experience-circle-hover-animation">
                    <MdWork className="experience-circle-icon" />
                  </div>
                </a>
                <div className="experience-through-line"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-tagline-size font-semibold">
                  3 Years Experience In Industry
                </h3>
                <time className="text-subtagline-size experience-subheader">
                  Joined Conveyor Dynamics, Inc. in March 2020
                </time>
                <p className="experience-paragraph">
                  Working as a Software Engineer refactoring a FORTRAN legacy
                  codebase.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
