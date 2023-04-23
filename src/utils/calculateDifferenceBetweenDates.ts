const differenceBetweenDates = (
  startDate: Date,
  endDate: Date
): { years: number; months: number; days: number } => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    const lastMonthEndDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    );
    days = lastMonthEndDate.getDate() - startDate.getDate() + endDate.getDate();
    months--;
  }

  if (months < 0) {
    months = 12 - startDate.getMonth() + endDate.getMonth();
    years--;
  }

  return { years, months, days };
};

export default differenceBetweenDates;
