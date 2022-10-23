import React, { useState } from "react";

import MenuItems from "./MenuItems";

type Props = {};

const Header = (props: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="z-50">
      <div className="container">
        <header className="flex justify-evenly items-center">
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
