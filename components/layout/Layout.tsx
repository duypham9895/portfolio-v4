import React, { PropsWithChildren } from "react";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed w-full md:pb-16">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
