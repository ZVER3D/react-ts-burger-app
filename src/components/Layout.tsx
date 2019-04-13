import React from 'react';
import styled from 'styled-components/macro';
import SideDrawer from './navigation/SideDrawer';
import Toolbar from './navigation/Toolbar';

interface IProps {}

const Main = styled.main`
  margin-top: 72px;
`;

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <Main>{children}</Main>
    </>
  );
};

export default React.memo(Layout);
