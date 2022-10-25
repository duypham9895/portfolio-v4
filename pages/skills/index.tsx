import React from "react";
import { IoLogoJavascript } from "react-icons/io";

import { ISkill } from "../../types";
import HeadTitle from "../../components/UI/HeadTitle";
import SkillCard from "../../components/skills/SkillCard";

type Props = {
  skills: ISkill[];
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
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
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
  const skills: ISkill[] = [
    {
      id: "1",
      imageUrl: "/images/skills/javascript.svg",
      name: "JavaScript",
      experience: 2,
    },
    {
      id: "2",
      imageUrl: "/images/skills/nodejs-icon.svg",
      name: "Node.js",
      experience: 2,
    },
    {
      id: "3",
      imageUrl: "/images/skills/nestjs.svg",
      name: "NestJS",
      experience: 1,
    },
    {
      id: "4",
      imageUrl: "/images/skills/nextjs.svg",
      name: "Next.js",
      experience: 0,
      bgDark: "white",
    },
    {
      id: "5",
      imageUrl: "/images/skills/typescript-icon.svg",
      name: "TypeScript",
      experience: 1,
    },
    {
      id: "6",
      imageUrl: "/images/skills/react.svg",
      name: "React",
      experience: 0,
    },
    {
      id: "7",
      imageUrl: "/images/skills/redux.svg",
      name: "Redux",
      experience: 0,
    },
    {
      id: "15",
      imageUrl: "/images/skills/jest.svg",
      name: "Jest",
      experience: 1,
    },
    {
      id: "8",
      imageUrl: "/images/skills/python.svg",
      name: "Python",
      experience: 1,
    },
    {
      id: "9",
      imageUrl: "/images/skills/graphql.svg",
      name: "GraphQL",
      experience: 1.5,
    },
    {
      id: "10",
      imageUrl: "/images/skills/postgresql.svg",
      name: "PostgreSQL",
      experience: 1.5,
    },
    {
      id: "11",
      imageUrl: "/images/skills/git-icon.svg",
      name: "Git",
      experience: 2,
    },
    {
      id: "12",
      imageUrl: "/images/skills/aws.svg",
      name: "AWS",
      experience: 2,
    },
    {
      id: "13",
      imageUrl: "/images/skills/serverless.svg",
      name: "Serverless",
      experience: 1.5,
    },
    {
      id: "14",
      imageUrl: "/images/skills/tailwindcss-icon.svg",
      name: "Tailwind",
      experience: 0,
    },
  ];
  return {
    props: {
      skills,
    },
  };
}

export default Skills;
