import Image from "next/image";
import React from "react";

import { Skill } from "../../types/generated";

type Props = {
  skill: Skill;
};

const SkillCard = ({ skill }: Props) => {
  const { title, experience_years: experienceYears, image } = skill;
  const imageUrl = image?.data?.attributes?.url;
  return (
    <div className="group justify-self-center relative flex">
      <div className="relative object-cover h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 p-1.5 filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          src={imageUrl as string}
          alt={title as string}
          layout="fill"
          className="object-contain"
          priority={true}
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white dark:group-hover:bg-[#151515] h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black dark:text-white opacity-100">
            {experienceYears}y
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
