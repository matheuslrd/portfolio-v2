import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    font-size: inherit;
  }
`;

export default GlobalStyles;
