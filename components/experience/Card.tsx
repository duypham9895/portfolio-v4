import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#4f4f4f] border-2 bg-[#EEF5FA] dark:bg-transparent">
      {children}
    </div>
  );
};

export default Card;
