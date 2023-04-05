import ProfilePicture from '../images/Jon2021.jpg';
import { FaLayerGroup, FaServer, FaTerminal } from 'react-icons/fa';
import { MdSchool, MdWork, MdMiscellaneousServices } from 'react-icons/md';
import { GiBoots } from 'react-icons/gi';
import { IoIosBrowsers } from 'react-icons/io';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';

function About() {
  return (
    <div
      id="about"
      className="outer-box-color outer-box-layout outer-box-border"
    >
      <div className="inner-box-color inner-box-layout inner-box-border">
        {/* About Section Title */}
        <h2 className="text-header center-all">
          <mark className="text-mark">About</mark> Me
        </h2>

        <div className="flex col-flex lg:row-flex">
          <div className="flex-col center-all m-2 lg:m-8 lg:w-1/2 max-w-2xl">
            {/* Avatar */}
            <div className="flex mx-auto w-4/5">
              <img
                className="w-full h-full rounded shadow-xl lg:mx-auto profile-picture-clip"
                src={ProfilePicture}
                alt="Jonathan Cornet, author of the website"
              />
            </div>

            {/* Bio */}
            <div className="my-2 md:mt-6 p-6 bio-text">
              <p>
                As a software developer, I bring a diverse background to the
                table. Prior to pursuing a career in programming, I've explored
                various paths, including engineering, hospitality, tourism, and
                education. However, it was during my time in Paris in 2017 that
                I rediscovered my passion for programming, a skill I had first
                picked up in college. Since then, I've been fully committed to
                my craft, working on a range of projects in fields such as
                computational modeling and web development. I'm constantly
                pushing myself to learn and improve, always striving to write
                elegant and efficient code.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="p-4 md:px-12 lg:w-1/2">
            <ol className="relative border-l-2 border-landing-color">
              {/* Front-End Skills */}
              <SkillSection
                skill="Front-End"
                place="Top"
                icon={<IoIosBrowsers className="skills-circle-icon" />}
                links={[
                  {
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                    label: 'HTML',
                  },
                  {
                    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                    label: 'CSS',
                  },
                  { href: 'https://sass-lang.com/', label: 'SASS' },
                  {
                    href: 'https://www.javascript.com/',
                    label: 'JavaScript (ES5/6)',
                  },
                ]}
              />

              {/* Back-End Skills */}
              <SkillSection
                skill="Back-End"
                place="Middle"
                icon={<FaServer className="skills-circle-icon" />}
                links={[
                  {
                    href: 'https://en.wikipedia.org/wiki/SQL',
                    label: 'SQL',
                  },
                  {
                    href: 'https://www.mysql.com/',
                    label: 'MySQL',
                  },
                  {
                    href: 'https://www.postgresql.org/',
                    label: 'PostgreSQL',
                  },
                  {
                    href: 'https://graphql.org/',
                    label: 'GraphQL',
                  },
                  { href: 'https://www.mongodb.com/home', label: 'MongoDB' },
                  {
                    href: 'https://sequelize.org/',
                    label: 'Sequelize',
                  },
                  {
                    href: 'https://www.json.org/json-en.html',
                    label: 'JSON',
                  },
                ]}
              />

              {/* Programming Language Skills */}
              <SkillSection
                skill="Programming Languages"
                place="Middle"
                icon={<FaTerminal className="skills-circle-icon" />}
                links={[
                  {
                    href: 'https://www.python.org/',
                    label: 'Python',
                  },
                  {
                    href: 'https://fortran-lang.org/en/',
                    label: 'FORTRAN',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
                    label: 'C',
                  },
                  {
                    href: 'https://isocpp.org/',
                    label: 'C++',
                  },
                  {
                    href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
                    label: 'C#',
                  },
                  {
                    href: 'https://www.java.com/en/',
                    label: 'Java',
                  },
                  {
                    href: 'https://kotlinlang.org/',
                    label: 'Kotlin',
                  },
                  {
                    href: 'https://www.rust-lang.org/',
                    label: 'Rust',
                  },
                ]}
              />

              {/* Frameworks/Libraries */}
              <SkillSection
                skill="Frameworks/Libraries"
                place="Middle"
                icon={<FaLayerGroup className="skills-circle-icon" />}
                links={[
                  {
                    href: 'https://nodejs.org/en/',
                    label: 'Node JS',
                  },
                  {
                    href: 'https://expressjs.com/',
                    label: 'Express',
                  },
                  {
                    href: 'https://mongoosejs.com/',
                    label: 'Mongoose',
                  },
                  {
                    href: 'https://reactjs.org/',
                    label: 'React',
                  },
                  {
                    href: 'https://nextjs.org/',
                    label: 'Next JS',
                  },
                  {
                    href: 'https://angular.io/',
                    label: 'Angular',
                  },
                  {
                    href: 'https://www.npmjs.com/',
                    label: 'NPM',
                  },
                  {
                    href: 'https://tailwindcss.com/',
                    label: 'Tailwind',
                  },
                  {
                    href: 'https://getbootstrap.com/',
                    label: 'Bootstrap',
                  },
                  {
                    href: 'https://jquery.com/',
                    label: 'JQuery',
                  },
                  {
                    href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started',
                    label: 'AJAX',
                  },
                  {
                    href: 'https://firebase.google.com/',
                    label: 'Firebase',
                  },
                  {
                    href: 'https://aws.amazon.com/',
                    label: 'AWS',
                  },
                ]}
              />

              {/* Misc Skills */}
              <SkillSection
                skill="Misc"
                place="Bottom"
                icon={
                  <MdMiscellaneousServices className="skills-circle-icon" />
                }
                links={[
                  {
                    href: 'https://www.ibm.com/cloud/learn/rest-apis',
                    label: 'REST API',
                  },
                  {
                    href: 'https://unity.com/',
                    label: 'Unity',
                  },
                  {
                    href: 'https://www.adobe.com/creativecloud.html',
                    label: 'Adobe XD',
                  },
                  {
                    href: 'https://www.figma.com/',
                    label: 'Figma',
                  },
                  {
                    href: 'https://www.aseprite.org/',
                    label: 'Aseprite',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Agile_software_development',
                    label: 'Agile',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
                    label: 'MVC Architecture',
                  },
                  {
                    href: 'https://jestjs.io/',
                    label: 'Jest',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Progressive_web_app',
                    label: 'PWA',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
                    label: 'OOP Methodology',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/MEAN_(solution_stack)',
                    label: 'MERN Stack',
                  },
                ]}
              />
            </ol>
          </div>
        </div>

        {/* Experience */}
        <div id="experience-box">
          <ol className="col-flex lg:row-flex">
            {/* Bootcamp Experience */}
            <ExperienceSection
              experience="University of Washington Full-stack Bootcamp Graduate"
              time="Graduated: December 2022"
              description="Up to date on modern web developement practices and
                  methodologies."
              icon={<GiBoots className="experience-circle-icon" />}
              link="https://bootcamp.uw.edu/"
            />

            {/* University Experience */}
            <ExperienceSection
              experience="Western Washington University Double Major"
              time="Graduated: June 2017"
              description="Bachelor of Science in Physics and Bachelor of Arts in Chinese
              Language."
              icon={<MdSchool className="experience-circle-icon" />}
              link="https://www.wwu.edu/"
            />

            {/* Work Experience */}
            <ExperienceSection
              experience="3 Years Experience In Industry"
              time="Joined Conveyor Dynamics, Inc. in March 2020"
              description="Working as a Software Engineer refactoring a FORTRAN legacy
              codebase."
              icon={<MdWork className="experience-circle-icon" />}
              link="https://cvdyn.com/"
            />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
