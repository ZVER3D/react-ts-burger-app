import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components/macro';

export const globalTheme: DefaultTheme = {
  backgroundColor: '#aaa',
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    background-color: rgb(255, 254, 252);
  }

  a {
    color: #0d0d0d;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`;
