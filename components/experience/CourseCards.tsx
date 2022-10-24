import React from "react";
import { FaAward } from "react-icons/fa";

import { ICourse } from "../../types";
import CourseCard from "./CourseCard";
import Title from "./Title";

type Props = {
  defaultTheme: string;
  courses: ICourse[];
};

const CourseCards = ({ defaultTheme, courses }: Props) => {
  return (
    <>
      <Title content="Courses" icon={FaAward} />
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          defaultTheme={defaultTheme}
          course={course}
        />
      ))}
    </>
  );
};

export default CourseCards;
