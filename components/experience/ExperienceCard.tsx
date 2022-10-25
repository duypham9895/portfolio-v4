import React from "react";

import { IExperience } from "../../types";
import Card from "./Card";
import { formatPeriodDate } from "../../utils/date";

type Props = {
  experience: IExperience;
};

const ExperienceCard = ({
  experience: { title, companyName, startDate, endDate, summary },
}: Props) => {
  const formatDateWork = formatPeriodDate(
    startDate,
    endDate,
    "Present",
    "MMM yyyy"
  );

  return (
    <Card>
      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {formatDateWork}
      </span>
      <h3 className="text-3xl dark:text-white">{title}</h3>
      <p className="text-xl dark:text-[#b7b7b7]">{companyName}</p>

      <ul className="list-disc space-y-2 ml-10 py-2 text-justify pr-5 dark:text-white">
        {summary.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceCard;
