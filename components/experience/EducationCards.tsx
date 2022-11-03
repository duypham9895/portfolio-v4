import React from "react";
import { MdOutlineSchool } from "react-icons/md";

import Title from "./Title";
import EducationCard from "./EducationCard";
import { Education, EducationEntity } from "../../types/generated";

type Props = {
  educations: EducationEntity[];
};

const EducationCards = ({ educations }: Props) => {
  return (
    <>
      <Title content="Education" icon={MdOutlineSchool} />
      {educations.map(({ id, attributes }) => (
        <EducationCard key={id} education={attributes as Education} />
      ))}
    </>
  );
};

export default EducationCards;
