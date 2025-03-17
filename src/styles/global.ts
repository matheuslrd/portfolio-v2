import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    border: 0;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
  }

  html, body {
    height: auto;
    min-height: 100%;
    min-width: 300px;
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text};
    transition: all 0.3s ease;
  }

  body, input, textarea {
    font-family: 'Inter', 'Roboto', Montserrat, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    font-size: inherit;
  }

  *, a, button, div {
    &:focus-visible {
      outline: 0.187rem solid #cdd5f2;
    }
  }

  @media only screen and (max-width: 1440px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
