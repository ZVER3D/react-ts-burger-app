import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { globalTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;

const Div = styled.div`
  color: #bbb;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <>
        <GlobalStyle />
        <Div>Hi there, this is react</Div>
      </>
    </ThemeProvider>
  );
};

export default App;
