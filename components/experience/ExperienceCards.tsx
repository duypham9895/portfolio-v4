import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";

import { IExperience } from "../../types";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

type Props = {
  defaultTheme: string;
  listExperience: IExperience[];
};

const ExperienceCards = ({ defaultTheme, listExperience }: Props) => {
  return (
    <>
      <Title content="Work Experience" icon={MdOutlineBusinessCenter} />
      {listExperience.map((experience) => (
        <ExperienceCard
          key={experience.id}
          defaultTheme={defaultTheme}
          experience={experience}
        />
      ))}
    </>
  );
};

export default ExperienceCards;
