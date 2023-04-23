import * as S from './styles';

type LabelType = 'years' | 'months' | 'days';

type DisplayProps = {
  value: number | null;
  label: LabelType;
};

export const Display = ({ label, value }: DisplayProps) => {
  return (
    <S.Display>
      <S.Value>{value !== null ? value : '--'}</S.Value>
      <S.Label>{label}</S.Label>
    </S.Display>
  );
};
