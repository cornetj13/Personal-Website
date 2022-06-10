import { Link } from 'react-router-dom';
import BellinghamFlagLogo from '../iconcomponents/BellinghamFlagLogo';

function Navbar() {
    return (
        <nav className="navbar shadow-lg bg-neutral text-neutral-content fixed w-full z-10 top-0">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <div className="flex">
                        <BellinghamFlagLogo />
                        <h1 className='text-lg font-bold px-4 self-center'>
                            Jonathan Cornet
                        </h1>
                    </div>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <a href='#home' className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </a>
                        <a href='#projects' className='btn btn-ghost btn-sm rounded-btn'>
                            Projects
                        </a>
                        <a href='#contact' className='btn btn-ghost btn-sm rounded-btn'>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
