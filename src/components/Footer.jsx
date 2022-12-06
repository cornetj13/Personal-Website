function Footer() {
  return (
    <footer className="p-4 bg-orange-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-stone-600 sm:text-center dark:text-gray-400">
        © 2022 Jonathan Cornet. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-stone-600 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Third Thing?
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
