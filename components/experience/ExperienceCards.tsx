import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";

import { IExperience } from "../../types";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

type Props = {
  listExperience: IExperience[];
};

const ExperienceCards = ({ listExperience }: Props) => {
  return (
    <>
      <Title content="Work Experience" icon={MdOutlineBusinessCenter} />
      {listExperience.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </>
  );
};

export default ExperienceCards;
