function isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

export function isValidDate(day: number, month: number, year: number): boolean {
  const date = new Date(`${year}-${month}-${day}`);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day &&
    !(month === 2 && day === 29 && !isLeapYear(year))
  );
}
