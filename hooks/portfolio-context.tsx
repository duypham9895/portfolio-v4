import React from "react";

const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
};

const ISSERVER = typeof window === "undefined";

const initialState = {
  handleTheme: (theme: string): void => {},
  isSelectedTheme: false,
  // defaultTheme: ISSERVER ? "dark" : localStorage.getItem("theme"),
  defaultTheme: getFromStorage("theme"),
  // handleData,
  // data,
  // singleData,
  // handleModelData,
  // isOpen,
  // setIsOpen,
};

const PortfolioContext = React.createContext(initialState);

export default PortfolioContext;
