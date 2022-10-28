import React from "react";

import { ICourse, IEducation, IExperience } from "../../types";
import HeadTitle from "../../components/UI/HeadTitle";
import CourseCards from "../../components/experience/CourseCards";
import EducationCards from "../../components/experience/EducationCards";
import ExperienceCards from "../../components/experience/ExperienceCards";

type Props = {
  courses: ICourse[];
  listExperience: IExperience[];
  educations: IEducation[];
};

const Experience = ({ courses, listExperience, educations }: Props) => {
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
                <ExperienceCards listExperience={listExperience} />
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
  const courses: ICourse[] = [
    {
      id: new Date(2022, 10, 1).toISOString(),
      startDate: new Date(2022, 10, 1).toISOString(),
      endDate: null,
      name: "React (Basic)",
      organization: "HackerRank",
      credentialId: null,
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/28ae560526c3",
    },
    {
      id: new Date(2022, 10, 1).toISOString(),
      startDate: new Date(2022, 10, 1).toISOString(),
      endDate: null,
      name: "Node (Basic)",
      organization: "HackerRank",
      credentialId: null,
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/b5c0fe3d4373",
    },
    {
      id: new Date(2022, 10, 1).toISOString(),
      startDate: new Date(2022, 10, 1).toISOString(),
      endDate: null,
      name: "JavaScript (Intermediate)",
      organization: "HackerRank",
      credentialId: null,
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/3f36d699fb65",
    },
    {
      id: new Date(2022, 10, 1).toISOString(),
      startDate: new Date(2022, 10, 1).toISOString(),
      endDate: null,
      name: "JavaScript (Basic)",
      organization: "HackerRank",
      credentialId: null,
      credentialUrl:
        "https://www.hackerrank.com/certificates/iframe/af348e134141",
    },
    {
      id: "1",
      startDate: new Date(2022, 9, 1).toISOString(),
      endDate: null,
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      organization: "Udemy",
      credentialId: "UC-4e7ddc8d-97e9-48d7-aaf8-d7d7bb598bc8",
      credentialUrl: "https://ude.my/UC-4e7ddc8d-97e9-48d7-aaf8-d7d7bb598bc8",
    },
    {
      id: "2",
      startDate: new Date(2021, 4, 1).toISOString(),
      endDate: null,
      name: "The Ultimate Python Unit Testing Course",
      organization: "Udemy",
      credentialId: "UC-e22a81cf-7548-4b5c-b455-418bb7700fe2",
      credentialUrl: "https://ude.my/UC-e22a81cf-7548-4b5c-b455-418bb7700fe2",
    },
    {
      id: "3",
      startDate: new Date(2021, 2, 1).toISOString(),
      endDate: null,
      name: "Neural Networks and Deep Learning",
      organization: "Coursera",
      credentialId: "CJUWD9PNBQ65",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/certificate/CJUWD9PNBQ65",
    },
  ];

  const listExperience: IExperience[] = [
    {
      id: "1",
      title: "Software Engineer",
      companyName: "Bizzi Vietnam",
      startDate: new Date(2020, 10, 30).toISOString(),
      endDate: new Date(2022, 8, 31).toISOString(),
      summary: [
        "Maintain and update features with the solution agreed to APIs to integrate with customer systems. Successfully integrated Oracle and SAP of customers such as Mega Market, Circle K, Ân Nam, and The Coffee House.",
        "Construct a service that receives P.O. (purchase order) emails, reads, and extracts P.O. (purchase order) information from PDF files to create S.O. (sales order) on the clients' system. In charge of building the service from scratch: design database, APIs for integrating client's system, source code organization, Serverless configuration, code optimization, deployment, and testing.",
        "Build A.I. models to extract the data required from VAT invoices. Investigate deep-learning methods for locating and extracting data from invoices such as YOLO and Faster RCNN for text localization tasks. CRNN, VietOCR for a text recognition task. To achieve the project's deadline and ensure that each invoice template is accurate.",
      ],
    },
  ];

  const educations: IEducation[] = [
    {
      id: "1",
      major: "Bachelor of Software Engineering",
      university: "Ton Duc Thang University",
      startDate: new Date(2018, 8, 30).toISOString(),
      endDate: null,
    },
  ];
  return {
    props: {
      courses,
      listExperience,
      educations,
    },
  };
}

export default Experience;
