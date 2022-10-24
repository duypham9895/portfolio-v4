import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import PortfolioContext from "../../hooks/portfolio-context";

type Props = {
  isVisibleMobile?: boolean;
};

const SwitchTheme = ({ isVisibleMobile = false }: Props) => {
  const { handleTheme, isSelectedTheme } = useContext(PortfolioContext);

  const classNameDarkMode = `${
    isVisibleMobile
      ? "bg-white w-[40px] opacity-100 visible flex lg:opacity-0 lg:hidden h-[40px]  rounded-full justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer ml-4"
      : "bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2"
  }`;

  const classNameLightMode = `${
    isVisibleMobile
      ? "bg-[#4D4D4D] w-[40px] h-[40px] rounded-full  opacity-100 visible flex lg:opacity-0 lg:hidden justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer  ml-4"
      : "bg-[#4D4D4D] w-[40px] h-[40px] hidden rounded-full lg:flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2"
  }`;

  if (isSelectedTheme) {
    return (
      <span onClick={() => handleTheme("light")} className={classNameLightMode}>
        <FiSun className="text-white text-3xl" />
      </span>
    );
  }
  return (
    <span onClick={() => handleTheme("dark")} className={classNameDarkMode}>
      <FiMoon className="text-3xl" />
    </span>
  );
};

export default SwitchTheme;
