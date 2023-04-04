import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  body {
    background-color: ${props => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 500 1rem Hanken Grotesk, sans-serif;
  }

  /* - Mobile: 375px
  - Desktop: 1440px */
`