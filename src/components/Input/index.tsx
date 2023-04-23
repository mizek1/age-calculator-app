import * as S from './styles';

export type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  error: string | null;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

export const Input = ({
  name,
  label,
  placeholder,
  onBlur,
  onChange,
  value,
  error,
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name} error={!!error}>
        {label}
      </S.Label>
      <S.Input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
