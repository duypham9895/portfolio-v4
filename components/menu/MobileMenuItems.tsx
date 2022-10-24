import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {
  isOpenMenu: boolean;
  menuHandler: (value: React.SetStateAction<boolean>) => void;
};

const MobileMenuItems = ({ isOpenMenu, menuHandler }: Props) => {
  if (isOpenMenu) {
    return (
      <span
        onClick={() => menuHandler((prevState) => !prevState)}
        className="lg:opacity-0 lg:invisible visible opacity-100 cursor-pointer bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
      >
        <AiOutlineClose />
      </span>
    );
  }
  return (
    <span
      onClick={() => menuHandler((prevState) => !prevState)}
      className="lg:opacity-0 lg:invisible visible opacity-100 cursor-pointer bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3"
    >
      <AiOutlineMenu />
    </span>
  );
};

export default MobileMenuItems;
