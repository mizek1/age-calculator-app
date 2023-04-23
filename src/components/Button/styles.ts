import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${theme.colors.line};
    margin-top: -32px;
    height: 64px;

    @media (min-width: 1024px) {
      height: 96px;
      margin-top: -48px;
      justify-content: flex-end;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: none;
    transform: translateY(50%);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    img {
      width: 24px;
    }

    &:hover {
      background: ${theme.colors.black};
    }

    @media (min-width: 1024px) {
      width: 96px;
      height: 96px;
      transform: translateY(50%);

      img {
        width: 44px;
      }
    }
  `}
`;
