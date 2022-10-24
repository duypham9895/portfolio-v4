import React from "react";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

import { ICourse } from "../../types";
import Card from "./Card";
import { formatPeriodDate } from "../../utils/date";

type Props = {
  defaultTheme: string;
  course: ICourse;
};

const CourseCard = ({
  defaultTheme,
  course: {
    name,
    organization,
    startDate,
    endDate,
    credentialId,
    credentialUrl,
  },
}: Props) => {
  const formatDateCourse = formatPeriodDate(
    startDate,
    endDate,
    "No Expiration Date",
    "MMM yyyy"
  );

  return (
    <Card defaultTheme={defaultTheme}>
      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
        {formatDateCourse}
      </span>
      <h3 className="text-2xl dark:text-white">{name}</h3>
      <p className="text-xl dark:text-[#b7b7b7]">{organization}</p>
      <div className="flex lg:flex-row lg:justify-between lg:items-center md:flex-row md:justify-between md:items-center flex-col gap-3 items-start">
        <p className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          Credential ID: {credentialId}
        </p>
        <button className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-4 py-2 text-base text-white rounded-[35px]">
          <Link href={credentialUrl} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center "
            >
              Show credential{" "}
              <span className="ml-2">
                <TbExternalLink />
              </span>
            </a>
          </Link>
        </button>
      </div>
    </Card>
  );
};

export default CourseCard;
