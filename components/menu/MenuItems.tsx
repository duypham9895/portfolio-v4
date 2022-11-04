import React from "react";
import { useRouter } from "next/router";

// Icons
import { FaCode, FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { RiContactsBookLine } from "react-icons/ri";

import NavLink from "../UI/NavLink";
import SwitchTheme from "../UI/SwitchTheme";

const MENU_ITEMS = [
  {
    id: "02",
    name: "About",
    link: "/about",
    icon: <FaRegUser />,
  },
  {
    id: "06",
    name: "Resume",
    link: "/resume",
    icon: <CgNotes />,
  },
  {
    id: "03",
    name: "Skills",
    link: "/skills",
    icon: <FaCode />,
  },
  {
    id: "05",
    name: "Contact",
    link: "/contact",
    icon: <RiContactsBookLine />,
  },
];

type Props = {
  isOpenMenu: boolean;
  menuHandler: (value: React.SetStateAction<boolean>) => void;
};

const MenuItems = ({ isOpenMenu, menuHandler }: Props) => {
  const location = useRouter();
  return (
    <ul
      className={`${
        isOpenMenu
          ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4"
          : "flex my-12 "
      }`}
    >
      {MENU_ITEMS.map(({ id, link, icon, name }) => (
        <li onClick={() => menuHandler(false)} key={id}>
          <NavLink
            key={id}
            activeClassName={`${
              isOpenMenu
                ? "text-[#FA5252] dark:text-[#FA5252] "
                : "text-white dark:text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
            }`}
            inactiveClassName={`${
              isOpenMenu
                ? "dark:hover:text-[#FA5252]"
                : "dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]"
            }  transition-all duration-300 ease-in-out `}
            className={`font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out ${
              location.pathname === "/home" && id === "01"
                ? "text-white linked dark:text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                : ""
            } ${
              isOpenMenu
                ? "pl-4 dark:text-white hover:text-[#FA5252] dark:hover:text-[#FA5252]"
                : "rounded-md cursor-pointer font-poppins bg-white text-gray-lite"
            }`}
            href={link}
            isExternalLink={link.includes("http")}
          >
            <span className="mr-2 text-xl">{icon}</span> {name}
          </NavLink>
        </li>
      ))}

      {/* dark mode */}
      <SwitchTheme />
    </ul>
  );
};

export default MenuItems;
