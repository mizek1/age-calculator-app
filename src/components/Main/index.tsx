import React from 'react';
import useInput from '../../hooks/useInput';
import differenceBetweenDates from '../../utils/calculateDifferenceBetweenDates';
import { isValidDate } from '../../utils/validateDate';
import { Button } from '../Button';
import { Display } from '../Display';
import { Input } from '../Input';
import * as S from './styles';

export const Main = () => {
  const [days, setDays] = React.useState<number | null>(null);
  const [months, setMonths] = React.useState<number | null>(null);
  const [years, setYears] = React.useState<number | null>(null);

  const day = useInput('day');
  const month = useInput('month');
  const year = useInput('year');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const dayValid = day.validate();
    const monthValid = month.validate();
    const yearValid = year.validate();

    if (dayValid && monthValid && yearValid) {
      if (
        !isValidDate(
          parseInt(day.value, 10),
          parseInt(month.value, 10),
          parseInt(year.value, 10)
        )
      ) {
        day.setError('Invalid date');
        month.setError(' ');
        year.setError(' ');

        return;
      }

      const { days, months, years } = differenceBetweenDates(
        new Date(`${year.value}-${month.value}-${day.value}`),
        new Date()
      );
      setDays(days);
      setMonths(months);
      setYears(years);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.InputWrapper>
          <Input name="days" label="DAY" placeholder="DD" {...day} />
          <Input name="months" label="MONTH" placeholder="MM" {...month} />
          <Input name="years" label="YEAR" placeholder="YYYY" {...year} />
        </S.InputWrapper>
        <Button />
        <S.Display>
          <Display value={years} label="years" />
          <Display value={months} label="months" />
          <Display value={days} label="days" />
        </S.Display>
      </S.Wrapper>
    </form>
  );
};
