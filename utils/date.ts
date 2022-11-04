import format from "date-fns/format";

export const formatPeriodDate = (
  startDate: string,
  endDate: string | null,
  replaceNullEndDate: string,
  formatType: string,
): string => {
  const formattedStartDate = format(new Date(startDate), formatType);
  const formattedEndDate = endDate
    ? format(new Date(endDate), formatType)
    : replaceNullEndDate;

  return `${formattedStartDate} - ${formattedEndDate}`;
};
