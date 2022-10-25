import React from "react";
import { MdOutlineSchool } from "react-icons/md";

import Title from "./Title";
import { IEducation } from "../../types";
import EducationCard from "./EducationCard";

type Props = {
  educations: IEducation[];
};

const EducationCards = ({ educations }: Props) => {
  return (
    <>
      <Title content="Education" icon={MdOutlineSchool} />
      {educations.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </>
  );
};

export default EducationCards;
