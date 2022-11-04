import React from "react";

import Card from "./Card";
import { formatPeriodDate } from "../../utils/date";
import { Education } from "../../types/generated";

type Props = {
  education: Education;
};

const EducationCard = ({
  education: { degree, school, start_date: startDate, end_date: endDate },
}: Props) => {
  const formatDateEducation = formatPeriodDate(
    startDate,
    endDate,
    "Present",
    "MMM yyyy",
  );

  return (
    <Card>
      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {formatDateEducation}
      </span>
      <h3 className="text-2xl dark:text-white">{degree}</h3>
      <p className="text-tiny text-gray-lite dark:text-[#b7b7b7]">{school}</p>
    </Card>
  );
};

export default EducationCard;
