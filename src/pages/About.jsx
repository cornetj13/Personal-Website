import ProfilePicture from '../images/Jon2021.jpg';
import { FaLayerGroup, FaServer, FaTerminal } from 'react-icons/fa';
import { MdSchool, MdWork } from 'react-icons/md';
import { GiBoots } from 'react-icons/gi';
import { IoIosBrowsers } from 'react-icons/io';

function About() {
  return (
    <div className="flex h-auto w-auto m-16 p-16 bg-lime-700 rounded" id="about">
      <div className="m-auto bg-lime-400 p-10">
        {/* About Section Title */}
        <h1 className="mb-12 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            About
          </mark>
          {' '}Me
        </h1>

        <div className="flex justify-center w-full">
          <div className="flex-col m-8" id="bio-box">
            {/* Avatar */}
            <div className="flex justify-center items-center space-y-4 md:space-y-0 md:space-x-4 md:flex md:items-center">
              <img
                className="w-96 h-96 rounded shadow-xl"
                src={ProfilePicture}
                alt="Extra large avatar"
              />
            </div>

            {/* Bio */}
            <div className="max-w-xl mt-6">
              <p className="mb-3 font-light text-center text-gray-500 dark:text-gray-400">
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

            {/* TODO: Get rid of this? */}
            <span className="sr-only">Loading...</span>
          </div>

          {/* Skills */}
          <div className="p-12" id="skills-box">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {/* Front-End Skills */}
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <IoIosBrowsers size={20}/>
                </span>
                <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Front-End:
                </h3>
                <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  HTML | CSS | SASS | JavaScript (ES5/6)
                </p>
              </li>

              {/* Back-End Skills */}
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaServer size={20}/>
                </span>
                <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Back-End:
                </h3>
                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  SQL | MySQL | MongoDB | GraphQL | Sequelize | JSON
                </p>
              </li>

              {/* Multi-Purpose Skills */}
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaTerminal size={20}/>
                </span>
                <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Multi-Purpose:
                </h3>
                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Python | FORTRAN | C# | Java | C++ | C | Kotlin | OOP
                  Methodology
                </p>
              </li>

              {/* Frameworks */}
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaLayerGroup size={20}/>
                </span>
                <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Frameworks:
                </h3>
                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Node | React | Express | NPM | Tailwind | Bootstrap | REST
                  APIs | jQuery | AJAX | Mongoose | Firebase | AWS
                </p>
              </li>

              {/* Misc Skills */}
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaLayerGroup size={20}/>
                </span>
                <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Misc:
                </h3>
                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Unity | Adobe XD | Figma | Aseprite | Agile | MVC | Testing
                  (Jest) | MERN Stack | PWAs
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Experience */}
        <div id="experience-box">
          <ol className="items-center sm:flex">
            {/* Bootcamp Experience */}
            <li className="relative mb-6 sm:mb-0 text-center">
              <div className="flex items-center">
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="flex z-10 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <GiBoots size={20}/>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  University of Washington Full-stack Bootcamp Graduate
                </h3>
                <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Graduated: December 2022
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Up to date on modern web developement practices and
                  methodologies.
                </p>
              </div>
            </li>

            {/* University Experience */}
            <li className="relative mb-6 sm:mb-0  text-center">
              <div className="flex items-center">
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="flex z-10 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <MdSchool size={20}/>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Western Washington University Double Major
                </h3>
                <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Graduated: June 2017
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Bachelor of Science in Physics and Bachelor of Arts in Chinese
                  Language
                </p>
              </div>
            </li>

            {/* Work Experience */}
            <li className="relative mb-6 sm:mb-0  text-center">
              <div className="flex items-center">
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="flex z-10 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <MdWork size={20}/>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  3 Years Experience In Industry
                </h3>
                <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Joined Conveyor Dynamics, Inc. in March 2020
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
