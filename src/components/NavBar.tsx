import logo from '../assets/site-logo.svg';

const NavBar = () => {
    return (
        <div className="p-2 flex bg-black text-white min-h-min justify-between items-center">
            <img src={logo} alt="hmlogo" className="h-8" />
            <ul className="flex flex-row space-x-8 min-h-max justify-center w-full">
                <li className="hover:text-red-500 min-h-full">Home</li>
                <li className="hover:text-red-500 min-h-full">Men's</li>
                <li className="hover:text-red-500 min-h-full">Women's</li>
                <li className="hover:text-red-500 min-h-full">Kid's</li>
                <li className="hover:text-red-500 min-h-full">Baby</li>
                <li className="hover:text-red-500 min-h-full">Sport</li>
                <li className="hover:text-red-500 min-h-full">Sale</li>
            </ul>
        </div>
    );
};

export default NavBar;
