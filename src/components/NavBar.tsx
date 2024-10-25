import logo from '../assets/site-logo.svg';

const NavBar = () => {
    return (
        <div className="p-2 flex bg-black text-white min-h-min justify-between items-center">
                <img src={logo} alt="hmlogo" className="h-8" />
                <ul className="flex flex-row space-x-8 min-h-max">
                    <li className="hover:bg-slate-500 min-h-full">Home</li>
                    <li>Men's</li>
                    <li>Women's</li>
                    <li>Kid's</li>
                    <li>Baby</li>
                    <li>Sport</li>
                    <li>Sale</li>
                </ul>

        </div>
    );
};

export default NavBar;
