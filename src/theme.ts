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
  }
`;
