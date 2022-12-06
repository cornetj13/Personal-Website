import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav
      className="p-3 border-gray-500 rounded bg-gray-300 dark:bg-gray-800 dark:border-gray-700"
      id="navbar"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <div className="m-4">
            <svg
              width="50"
              height="50"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M150 0C169.698 0 189.204 3.87986 207.403 11.4181C225.601 18.9563 242.137 30.0052 256.066 43.934C269.995 57.8628 281.044 74.3987 288.582 92.5975C296.12 110.796 300 130.302 300 150L150 150L150 0Z"
                fill="#84C45C"
              />
              <path
                d="M300 150C300 169.698 296.12 189.204 288.582 207.403C281.044 225.601 269.995 242.137 256.066 256.066C242.137 269.995 225.601 281.044 207.403 288.582C189.204 296.12 169.698 300 150 300L150 150H300Z"
                fill="#539344"
              />
              <path
                d="M150 300C130.302 300 110.796 296.12 92.5975 288.582C74.3986 281.044 57.8628 269.995 43.934 256.066C30.0052 242.137 18.9563 225.601 11.4181 207.403C3.87986 189.204 -8.61039e-07 169.698 0 150L150 150L150 300Z"
                fill="#84C45C"
              />
              <path
                d="M0 150C0 130.302 3.87986 110.796 11.4181 92.5975C18.9563 74.3986 30.0052 57.8628 43.934 43.934C57.8628 30.0052 74.3987 18.9563 92.5975 11.4181C110.796 3.87986 130.302 -8.61039e-07 150 0L150 150H0Z"
                fill="#539344"
              />
              <line x1="150" y1="30" x2="150" stroke="white" strokeWidth="6" />
              <line
                x1="270"
                y1="150"
                x2="300"
                y2="150"
                stroke="white"
                strokeWidth="6"
              />
              <line
                x1="150"
                y1="300"
                x2="150"
                y2="270"
                stroke="white"
                strokeWidth="6"
              />
              <line y1="150" x2="30" y2="150" stroke="white" strokeWidth="6" />
              <circle cx="150" cy="150" r="121" fill="white" />
              <circle cx="150" cy="150" r="115" fill="#0C54A3" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M149.636 68.2517C149.48 68.4487 148.628 69.9347 147.742 71.5517C145.707 75.2667 146.229 74.7567 142.299 76.8737C138.103 79.1347 138.103 79.0987 142.31 81.3427C146.03 83.3277 145.899 83.1887 148.315 87.7357C150.051 91.0047 150.1 90.9927 152.356 86.7537L154.177 83.3327L157.608 81.4797C161.991 79.1127 161.992 79.1007 157.852 76.8917C154.139 74.9117 154.384 75.1597 152.202 71.1787C150.466 68.0117 150.128 67.6267 149.636 68.2517ZM91.4712 103.234C90.3452 104.842 91.2462 105.898 94.0802 106.291C96.7572 106.662 97.9322 107.359 101.454 110.661C108.785 117.535 115.023 117.367 122.912 110.086C126.592 106.69 127.152 106.429 130.787 106.428C134.564 106.426 135.384 106.814 139.297 110.457C146.701 117.348 152.873 117.418 160.172 110.694C166.978 104.424 171.221 104.491 177.846 110.974C184.092 117.086 191.374 117.11 197.856 111.041C202.012 107.149 202.819 106.666 205.808 106.283C208.437 105.945 209.315 104.826 208.199 103.234C206.723 101.126 201.005 103.259 196.193 107.711C192.682 110.961 191.42 111.646 188.608 111.828C184.902 112.068 183.695 111.476 178.775 107.012C171.802 100.683 165.735 100.895 158.203 107.732C154.267 111.304 153.342 111.748 149.835 111.748C146.315 111.748 145.445 111.323 141.569 107.709C134.13 100.775 127.85 100.694 120.512 107.438C113.923 113.493 109.809 113.546 103.434 107.658C98.6392 103.229 92.9482 101.124 91.4712 103.234ZM91.5922 141.758C90.4102 143.261 91.2402 144.353 93.8332 144.705C96.4822 145.064 98.0882 145.994 101.499 149.141C108.756 155.837 115.022 155.811 122.329 149.054C129.099 142.794 132.887 142.93 140.031 149.69C143.484 152.957 145.428 153.765 149.834 153.765C154.511 153.765 156.11 153.04 160.539 148.913C164.436 145.28 165.407 144.802 168.883 144.802C172.353 144.802 173.307 145.271 177.225 148.907C181.682 153.042 183.274 153.765 187.917 153.765C192.487 153.764 193.655 153.237 198.403 149.027C202.192 145.668 203.325 145.022 205.999 144.701C208.571 144.391 209.511 142.993 208.098 141.58C206.335 139.817 201.042 141.756 196.823 145.71C189.87 152.226 185.942 152.246 179.096 145.8C172.224 139.331 165.541 139.331 158.67 145.8C151.805 152.262 147.976 152.236 140.915 145.679C134.039 139.292 127.53 139.365 120.469 145.906C113.786 152.097 109.789 152.132 103.358 146.054C98.7822 141.73 93.2142 139.696 91.5922 141.758ZM91.5922 179.853C90.4142 181.351 91.2412 182.448 93.8152 182.8C96.5292 183.171 98.1352 184.064 101.095 186.848C108.645 193.947 114.964 194.022 122.368 187.1C128.657 181.221 133.072 181.162 139.149 186.876C146.706 193.981 153.014 194.022 160.531 187.015C164.436 183.375 165.406 182.897 168.883 182.897C172.397 182.897 173.26 183.318 177.146 186.929C184.531 193.79 190.772 193.94 198.017 187.43C202.26 183.618 203.763 182.757 206.175 182.757C208.035 182.757 209.077 181.518 208.423 180.083C207.442 177.928 201.222 179.613 197.604 183.014C192.975 187.366 192.017 187.987 189.368 188.355C185.582 188.882 183.535 188.012 179.352 184.103C172.149 177.37 165.339 177.35 158.459 184.042C152.045 190.28 147.694 190.195 140.939 183.701C134.377 177.393 127.495 177.495 120.467 184.004C113.822 190.158 109.898 190.193 103.41 184.16C98.5962 179.683 93.2562 177.737 91.5922 179.853ZM147.824 212.493L145.968 215.899L142.509 217.782C138.095 220.186 138.097 220.098 142.392 222.438L145.905 224.353L147.586 227.445C150.276 232.394 149.908 232.374 152.455 227.715L154.293 224.353L157.271 222.698C162.141 219.99 162.1 220.198 158.174 218.079C156.984 217.437 155.622 216.695 155.147 216.431C154.563 216.105 153.868 215.182 152.989 213.569C149.989 208.058 150.215 208.105 147.824 212.493Z"
                fill="#F8F9FA"
              />
            </svg>
          </div>

          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Jonathan Cornet
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
