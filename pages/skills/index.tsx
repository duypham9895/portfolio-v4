import React from "react";

import HeadTitle from "../../components/UI/HeadTitle";
import SkillCard from "../../components/skills/SkillCard";
import { client } from "../../graphql";
import {
  Skill,
  SkillEntity,
  SkillsDocument,
  SkillsQuery,
  SkillsQueryVariables,
} from "../../types/generated";

type Props = {
  skills: SkillEntity[];
};

const Skills = ({ skills }: Props) => {
  return (
    <>
      <HeadTitle title="Resume" />
      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#151515] px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/*page title here */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 h-14">
                Skills
              </h2>
              <div className="pt-4 md:pt-[40px]">
                <p className="text-gray-lite dark:text-gray text-sm pb-10">
                  Hover over a skill for current proficiency{" "}
                  <span className="italic">(y=year(s), 0y=self-study)</span>
                </p>

                <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-7">
                  {skills.map(({ id, attributes }) => (
                    <SkillCard key={id} skill={attributes as Skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<SkillsQuery, SkillsQueryVariables>({
    query: SkillsDocument,
  });

  return {
    props: {
      skills: data.skills?.data,
    },
  };
}

export default Skills;
