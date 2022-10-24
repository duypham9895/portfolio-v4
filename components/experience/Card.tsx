import React from "react";

type Props = {
  children?: React.ReactNode;
  defaultTheme: string;
};

const Card = ({ defaultTheme, children }: Props) => {
  return (
    <div
      style={{
        background: `${defaultTheme === "dark" ? "transparent" : "#EEF5FA"}`,
      }}
      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#4f4f4f] dark:border-2"
    >
      {children}
    </div>
  );
};

export default Card;
