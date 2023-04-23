import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      display: flex;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      min-height: 100vh;
      background-color: ${theme.colors.lightGrey};
      padding: 0 16px;

      #root {
        width: 100%;

        form {
          width: 100%;
        }
      }

      @media (min-width: 1024px) {
        align-items: center;
      }
    }
  `}

`;

export default GlobalStyles;
