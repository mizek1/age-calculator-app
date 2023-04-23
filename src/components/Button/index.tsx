import icon from '../../assets/icon-arrow.svg';
import * as S from './styles';

type ButtonProps = {};

export const Button = () => {
  return (
    <S.Wrapper>
      <S.Button>
        <img src={icon} />
      </S.Button>
    </S.Wrapper>
  );
};
