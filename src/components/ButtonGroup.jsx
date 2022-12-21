import {
  FaBorderAll,
  FaLayerGroup,
  FaServer,
  FaTerminal,
} from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';

function ButtonGroup() {
  return (
    <div className="bg-cyan-300 shadow-xl p-6 rounded-t-xl">
      <div className="col-flex center-all">
        <div className="text-tagline-size">
          <p>I want to see: </p>
        </div>
        <div className="w-full">
          <form>
            <div className="row-flex center-around">
              <div>
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="front-end"
                  value="front-end"
                />
                <MdOutlineWeb className="portfolio-button-icon hover:text-indigo-600" />
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="back-end"
                  value="back-end"
                  checked
                />
                <FaServer className="portfolio-button-icon hover:text-amber-600" />
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="full-stack"
                  value="full-stack"
                />
                <FaLayerGroup className="portfolio-button-icon hover:text-sky-600" />
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="misc-projects"
                  value="misc-projects"
                />
                <FaTerminal className="portfolio-button-icon hover:text-green-600" />
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  className="hidden peer"
                  id="all-projects"
                  value="all-projects"
                />
                <FaBorderAll className="portfolio-button-icon hover:text-rose-600" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
