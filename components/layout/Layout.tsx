import React from "react";
import Header from "./Header";

type Props = {
  children?: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
