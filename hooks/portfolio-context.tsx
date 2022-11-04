import React from "react";

type PortfolioContextState = {
  handleTheme: (theme: string) => void;
  isSelectedTheme: boolean;
  defaultTheme: string | null | undefined;
};

const PortfolioContext = React.createContext<PortfolioContextState>(
  {} as PortfolioContextState,
);

export default PortfolioContext;
