import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    margin: 88px auto 0 auto;
    border-radius: 24px 24px 100px 24px;
    padding: 48px 24px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 32px;
    max-width: 840px;

    @media (min-width: 1024px) {
      margin: 0 auto;
      padding: 48px 64px;
      gap: 0px;
    }
  `}
`;

export const InputWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 160px);
  }
`;

export const Display = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0px;
  padding-top: 24px;
`;
