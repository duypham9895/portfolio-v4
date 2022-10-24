import React from "react";

type Props = {
  content: string;
  icon: React.FC<{ className: string }>;
};

const Title = ({ content, icon: Icon }: Props) => {
  return (
    <div className="flex items-center space-x-2 mb-4 ">
      <Icon className="text-6xl text-[#F95054]" />
      <h4 className="text-5xl dark:text-white font-medium">{content}</h4>
    </div>
  );
};

export default Title;
