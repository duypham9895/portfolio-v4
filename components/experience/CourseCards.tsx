import React from "react";
import { FaAward } from "react-icons/fa";

import CourseCard from "./CourseCard";
import Title from "./Title";
import { Course, CourseEntity } from "../../types/generated";

type Props = {
  courses: CourseEntity[];
};

const CourseCards = ({ courses }: Props) => {
  return (
    <>
      <Title content="Courses" icon={FaAward} />
      {courses.map(({ id, attributes }) => (
        <CourseCard key={id} course={attributes as Course} />
      ))}
    </>
  );
};

export default CourseCards;
