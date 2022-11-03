import React from "react";

import Card from "./Card";
import { formatPeriodDate } from "../../utils/date";
import { Experience } from "../../types/generated";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({
  experience: {
    job_title: title,
    company_name: companyName,
    company_url: companyUrl,
    start_date: startDate,
    end_date: endDate,
    description,
  },
}: Props) => {
  const formatDateWork = formatPeriodDate(
    startDate,
    endDate,
    "Present",
    "MMM yyyy"
  );
  const summary = description?.split("\n") as string[];

  return (
    <Card>
      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {formatDateWork}
      </span>
      <h3 className="text-3xl dark:text-white">{title}</h3>
      <a
        className="text-xl dark:text-[#b7b7b7] block"
        href={companyUrl as string}
        target="_blank"
        rel="noopener noreferrer"
      >
        {companyName}
      </a>

      <ul className="list-disc space-y-2 ml-10 py-2 text-justify pr-5 dark:text-white">
        {summary.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceCard;
