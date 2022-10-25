import React from "react";

import { IEducation } from "../../types";
import Card from "./Card";
import { formatPeriodDate } from "../../utils/date";

type Props = {
  education: IEducation;
};

const EducationCard = ({
  education: { major, university, startDate, endDate },
}: Props) => {
  const formatDateEducation = formatPeriodDate(
    startDate,
    endDate,
    "Present",
    "MMM yyyy"
  );

  return (
    <Card>
      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {formatDateEducation}
      </span>
      <h3 className="text-2xl dark:text-white">{major}</h3>
      <p className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {university}
      </p>
    </Card>
  );
};

export default EducationCard;
