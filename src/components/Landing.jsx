import { Link } from 'react-scroll';

function Landing() {
  return (
    <div className="flex flex-col text-center h-screen justify-center bg-orange-200">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-stone-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome!
      </h1>
      <p className="mb-6 text-lg font-normal text-stone-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        I'm <span>Jonathan Cornet</span>. Let me show you some of{' '}
        <span className="text-blue-800 font-bold">my work</span>.
      </p>
      <Link
        to="navbar"
        spy={true}
        smooth={true}
        duration={500}
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 w-48 self-center"
      >
        Take a Look
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}

export default Landing;
