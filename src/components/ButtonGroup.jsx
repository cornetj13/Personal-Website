import {
  FaBorderAll,
  FaLayerGroup,
  FaServer,
  FaTerminal,
} from 'react-icons/fa';
import { IoIosBrowsers } from 'react-icons/io';

function ButtonGroup() {
  return (
    <div className="m-auto shadow-xl p-2 w-full bg-cyan-300">
      <div className="flex justify-between py-2 px-4 max-w-full">
        <div className="p-2 text-zinc-900 text-lg">
          <p>I want to see: </p>
        </div>
        <div className="p-4">
          <form>
            <div className="flex">
              <label htmlFor="front-end" className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="front-end"
                  value="front-end"
                />
                <IoIosBrowsers size={70} className="m-8 hover:text-indigo-600" />
              </label>

              <label htmlFor="back-end" className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="back-end"
                  value="back-end"
                  checked
                />
                <FaServer size={70} className="m-8 hover:text-amber-600" />
              </label>

              <label htmlFor="full-stack" className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="full-stack"
                  value="full-stack"
                />
                <FaLayerGroup size={70} className="m-8 hover:text-sky-600" />
              </label>

              <label htmlFor="misc-projects" className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="misc-projects"
                  value="misc-projects"
                />
                <FaTerminal size={70} className="m-8 hover:text-green-600" />
              </label>

              <label htmlFor="all-projects" className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="all-projects"
                  value="all-projects"
                />
                <FaBorderAll size={70} className="m-8 hover:text-rose-600" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
