import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  html, body {
    height: auto;
    min-height: 100%;
    background: #fff;
  }

  body, input, textarea {
    font-family: Montserrat, sans-serif;
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

  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
    outline: 0;
  }
  
  body {
    color: ${(props) => props.theme.color.text};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    min-width: 300px;
    overflow-x: hidden;
  } */
`;

export default GlobalStyle;
