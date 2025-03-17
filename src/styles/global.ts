import { createGlobalStyle } from 'styled-components';
import { getAccentColor, getContentDensityStyles, getAnimationStyles } from './accentColors';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    --content-spacing: 1;
    --accent-color: #5d2de2;
    --accent-color-hover: #4924b4;
    --accent-color-light: rgba(93, 45, 226, 0.1);
    --accent-color-dark: #3b1c91;
  }
  
  ${getAccentColor()}
  ${getContentDensityStyles()}
  ${getAnimationStyles()}

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
  
  /* Aplicar espaçamento baseado na densidade de conteúdo */
  .content-spacing {
    padding: calc(var(--content-spacing) * 1rem);
  }
  
  .content-spacing-sm {
    padding: calc(var(--content-spacing) * 0.5rem);
  }
  
  .content-spacing-lg {
    padding: calc(var(--content-spacing) * 1.5rem);
  }

  body, input, textarea {
    font-family: 'Inter', 'Roboto', Montserrat, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, span, a {
    font-size: inherit;
  }

  *, a, button, div {
    &:focus-visible {
      outline: 0.187rem solid var(--accent-color-light, #cdd5f2);
    }
  }

  @media only screen and (max-width: 1440px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
