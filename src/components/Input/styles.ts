import styled, { css } from 'styled-components';

type WithErrorProp = { error: boolean };

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 18px 1fr 18px;
  gap: 4px;

  @media (min-width: 1024px) {
    grid-template-columns: 160px;
    gap: 8px;
    grid-template-rows: 21px 1fr 21px;
  }
`;

export const Label = styled.label<WithErrorProp>`
  ${({ theme, error }) => css`
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${error ? theme.colors.red : theme.colors.grey};

    @media (min-width: 1024px) {
      font-size: 14px;
      line-height: 21px;
    }
  `}
`;

export const Input = styled.input<WithErrorProp>`
  ${({ theme, error }) => css`
    font-family: 'Poppins', sans-serif;
    padding: 12px 16px;
    border: 1px solid ${error ? theme.colors.red : theme.colors.lightGrey};
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: ${theme.colors.black};
    width: 100%;

    ::placeholder {
      color: ${theme.colors.grey};
    }

    @media (min-width: 1024px) {
      font-size: 32px;
      line-height: 48px;
      padding: 12px 24px;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    word-break: break-word;
    color: ${theme.colors.red};

    @media (min-width: 1024px) {
      font-size: 14px;
      line-height: 21px;
    }
  `}
`;
