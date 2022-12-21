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
          <mark className="text-mark">
            About
          </mark>{' '}
          Me
        </h2>

        <div className="flex">
          <div className="flex-col center-all m-8 w-1/2" id="bio-box">
            {/* Avatar */}
            <div className='flex justify-center'>
              <img
                className="rounded shadow-xl"
                src={ProfilePicture}
                alt="Picture of Jonathan Cornet"
              />
            </div>

            {/* Bio */}
            <div className="my-6 p-6">
              <p>
                I am programmer who took quite the detour before ending up on
                the path I love. I have lived other lives as a physicist, a
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
          <div className="p-12 w-1/2" id="skills-box">
            <ol className="relative border-l-2 border-gray-500">
              {/* Front-End Skills */}
              <li className="skills-layout pt-4">
                <span className="skills-circle-color skills-circle-layout">
                  <IoIosBrowsers className='skills-circle-icon' />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Front-End:
                </h3>
                <p className="text-subtagline-size skills-text">
                  HTML | CSS | SASS | JavaScript (ES5/6)
                </p>
              </li>

              {/* Back-End Skills */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaServer className='skills-circle-icon' />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Back-End:
                </h3>
                <p className="text-subtagline-size skills-text">
                  SQL | MySQL | MongoDB | GraphQL | Sequelize | JSON
                </p>
              </li>

              {/* Multi-Purpose Skills */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaTerminal className='skills-circle-icon' />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Multi-Purpose:
                </h3>
                <p className="text-subtagline-size skills-text">
                  Python | FORTRAN | C# | Java | C++ | C | Kotlin | OOP
                  Methodology
                </p>
              </li>

              {/* Frameworks */}
              <li className="skills-layout">
                <span className="skills-circle-color skills-circle-layout">
                  <FaLayerGroup className='skills-circle-icon' />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Frameworks:
                </h3>
                <p className="text-subtagline-size skills-text">
                  Node | React | Express | NPM | Tailwind | Bootstrap | REST
                  APIs | jQuery | AJAX | Mongoose | Firebase | AWS
                </p>
              </li>

              {/* Misc Skills */}
              <li className="skills-layout-bottom">
                <span className="skills-circle-color skills-circle-layout">
                  <MdMiscellaneousServices className='skills-circle-icon' />
                </span>
                <h3 className="skills-header text-tagline-size">
                  Misc:
                </h3>
                <p className="text-subtagline-size skills-text">
                  Unity | Adobe XD | Figma | Aseprite | Agile | MVC | Testing
                  (Jest) | MERN Stack | PWAs
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
                <div className="experience-circle-color experience-circle-layout">
                  <GiBoots className='experience-circle-icon' />
                </div>
                <div className="experience-through-line"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-tagline-size font-semibold">
                  University of Washington Full-stack Bootcamp Graduate
                </h3>
                <time className="text-subtagline-size experience-subheader">
                  Graduated: December 2022
                </time>
                <p className="experience-paragraph">
                  Up to date on modern web developement practices and
                  methodologies.
                </p>
              </div>
            </li>

            {/* University Experience */}
            <li className="relative mb-6 sm:mb-0  text-center">
              <div className="flex items-center">
                <div className="experience-through-line"></div>
                <div className="experience-circle-color experience-circle-layout">
                  <MdSchool className='experience-circle-icon' />
                </div>
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
                <div className="experience-circle-color experience-circle-layout">
                  <MdWork className='experience-circle-icon' />
                </div>
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
