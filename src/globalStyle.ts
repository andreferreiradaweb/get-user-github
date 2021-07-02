import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    --font: 'montserrat', sans-serif;
    --text: #78828d;
    --blue: #5C6BC0;
    --blue-dark: #4152a8;
    --blue-font: #1c0051;
    --white: #f9f9f9;
    --white-default: #fff;
    --black: #070707;
    font-family: 'open-sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 200;
    color: #78828d;
    outline: none;
  }  

  strong {
    font-size: 18px;
  }

  h1 {
    font-family: 'montserrat', sans-serif;
    font-weight: bold;
    font-size: 70px;
  }

  img {
    max-width: 100%;
  }
`
