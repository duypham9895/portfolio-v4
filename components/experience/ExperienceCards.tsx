import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Experience, ExperienceEntity } from "../../types/generated";

import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

type Props = {
  experiences: ExperienceEntity[];
};

const ExperienceCards = ({ experiences }: Props) => {
  return (
    <>
      <Title content="Work Experience" icon={MdOutlineBusinessCenter} />
      {experiences.map(({ id, attributes }) => (
        <ExperienceCard key={id} experience={attributes as Experience} />
      ))}
    </>
  );
};

export default ExperienceCards;
