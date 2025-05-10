import { useCallback, useState } from "react";

import Logo from "../images/logo.png";
import { Link } from "react-router";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuMobileClick = useCallback(() => {
        setMenuVisible(prevState => !prevState);
    }, []);

    return (
        <header className="pt-5 z-50 relative px-6 flex items-center justify-between max-w-[1400px] mx-auto lg:px-10">
            <div>
                <img
                    src={Logo}
                    alt="Logo Dengoo"
                    className="w-48 sm:w-56 lg:w-60"
                />
            </div>

            <div className="lg:hidden">
                <label className="hamburger">
                    <input type="checkbox" checked={menuVisible} onChange={handleMenuMobileClick} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            <nav className={`
                absolute bg-blue-100 right-10 top-28 p-7 z-50 bg-rose-primary rounded-xl duration-700 
                lg:opacity-100 lg:translate-y-0 lg:bg-transparent lg:static
                ${menuVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-30px] opacity-0'}
            `}>
                <ul className="flex items-center flex-col gap-4 lg:flex-row lg:gap-20 lg:items-center">
                    <li className="font-bold md:text-white md:font-medium md:text-lg">
                        <Link to="/estrelas">
                            Estrelas
                        </Link>
                    </li>
                    <li className="font-bold md:text-white md:font-medium md:text-lg">
                        <Link to="/declaracoes">
                            Declaração
                        </Link>
                    </li>
                    <li className="font-bold md:text-white md:font-medium md:text-lg">
                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header