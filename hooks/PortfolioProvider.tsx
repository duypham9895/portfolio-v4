import React, { useCallback, useEffect, useState } from "react";
import PortfolioContext from "./portfolio-context";

// save to storage
const saveToStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
};

// get from storage
const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
};

type Props = {
  children?: React.ReactNode;
};

const PortfolioProvider = ({ children }: Props) => {
  const [isSelectedTheme, setIsSelectedTheme] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState(getFromStorage("theme"));

  // useEffect(() => {
  //   const checkUserTheme = () => {
  //     const theme = getThemeFromLocalStorage();
  //     if (theme) {
  //       setDefaultTheme(theme);
  //     }
  //   };
  //   window.addEventListener("storage", checkUserTheme);

  //   return () => {
  //     window.removeEventListener("storage", checkUserTheme);
  //   };
  // }, [getThemeFromLocalStorage]);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");
    if (!themeValue) {
      setIsSelectedTheme(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setIsSelectedTheme(true);
      themeValue === "light" && setIsSelectedTheme(false);
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (theme: string): void => {
    if (theme === "light") {
      setIsSelectedTheme(false);
      // localStorage.setItem("theme", "light");
      saveToStorage("theme", "light");
      setDefaultTheme("light");
    } else {
      setIsSelectedTheme(true);
      // localStorage.setItem("theme", "dark");
      saveToStorage("theme", "dark");
      setDefaultTheme("dark");
    }

    getFromStorage("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  const value = { isSelectedTheme, handleTheme, defaultTheme };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
