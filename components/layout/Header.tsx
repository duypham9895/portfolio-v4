import React, { useContext, useState } from "react";
import { FiSun, FiMoon, FiCoffee } from "react-icons/fi";

import MenuItems from "./MenuItems";
import PortfolioContext from "../../hooks/portfolio-context";
import Link from "next/link";
import SwitchTheme from "../UI/SwitchTheme";
import MobileMenuItems from "./MobileMenuItems";

type Props = {};

const Header = (props: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isSelectedTheme, handleTheme } = useContext(PortfolioContext);

  return (
    <div className="z-50">
      <div className="container">
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
          <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
              {/* website logo  */}
              <Link href="/">
                <a className="flex justify-evenly font-semibold text-2xl mb-1 dark:text-white">
                  <span className="mr-2 mt-1">
                    <FiCoffee />
                  </span>
                  Duy Pham
                </a>
              </Link>
              {/* </div> */}
              <div className="flex items-center">
                {/* mobile menu icon */}
                <MobileMenuItems
                  isOpenMenu={isOpenMenu}
                  menuHandler={setIsOpenMenu}
                />

                {/* dark mode icon */}
                <SwitchTheme isVisibleMobile={true} />
              </div>
            </div>
          </div>
          <nav
            className={`${
              isOpenMenu ? "block dark:bg-black " : "hidden lg:block"
            }`}
          >
            <MenuItems isOpenMenu={isOpenMenu} menuHandler={setIsOpenMenu} />
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
