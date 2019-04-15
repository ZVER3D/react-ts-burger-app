import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import Layout from './components/Layout';
import Routes from './Routes';
import { GlobalStyle, globalTheme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
