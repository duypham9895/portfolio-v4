import React, { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#4f4f4f] dark:border-2 dark:bg-transparent bg-[#EEF5FA]">
      {children}
    </div>
  );
};

export default Card;
