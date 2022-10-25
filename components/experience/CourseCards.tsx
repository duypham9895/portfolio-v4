import React from "react";
import { FaAward } from "react-icons/fa";

import { ICourse } from "../../types";
import CourseCard from "./CourseCard";
import Title from "./Title";

type Props = {
  courses: ICourse[];
};

const CourseCards = ({ courses }: Props) => {
  return (
    <>
      <Title content="Courses" icon={FaAward} />
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
};

export default CourseCards;
