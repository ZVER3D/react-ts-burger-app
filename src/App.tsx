import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import Layout from './components/Layout';
import Routes from './Routes';
import { GlobalStyle, globalTheme } from './theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <>
          <GlobalStyle />
          <Layout>
            <Routes />
          </Layout>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
