import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: sans-serif;
  }

  body {
    background-color: #eeeeee;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }
`;
