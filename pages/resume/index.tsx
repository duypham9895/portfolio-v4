import React from "react";

import HeadTitle from "../../components/UI/HeadTitle";
import CourseCards from "../../components/experience/CourseCards";
import EducationCards from "../../components/experience/EducationCards";
import ExperienceCards from "../../components/experience/ExperienceCards";
import { client } from "../../graphql";
import {
  CourseEntity,
  EducationEntity,
  ExperienceEntity,
  ResumeDocument,
  ResumeQuery,
  ResumeQueryVariables,
} from "../../types/generated";

type Props = {
  courses: CourseEntity[];
  experiences: ExperienceEntity[];
  educations: EducationEntity[];
};

const Resume = ({ courses, experiences, educations }: Props) => {
  return (
    <>
      <HeadTitle title="Resume" />
      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#151515] px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/*page title here */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0">
                Resume
              </h2>
              <div className="pt-4 md:pt-[40px]">
                <ExperienceCards experiences={experiences} />
                <CourseCards courses={courses} />
                <EducationCards educations={educations} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<ResumeQuery, ResumeQueryVariables>({
    query: ResumeDocument,
  });

  const courses = data.courses?.data;
  const experiences = data.experiences?.data;
  const educations = data.educations?.data;

  return {
    props: {
      courses,
      experiences,
      educations,
    },
  };
}

export default Resume;
