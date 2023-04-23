import styled, { css } from 'styled-components';

export const Display = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: italic;
  white-space: nowrap;

  span {
    font-weight: 800;
    font-size: 56px;
    line-height: 110%;

    @media (min-width: 1024px) {
      font-size: 104px;
      line-height: 110%;
    }
  }
`;

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;
