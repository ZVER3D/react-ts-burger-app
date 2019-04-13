import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Toolbar from './navigation/Toolbar';

interface IProps {}

const Main = styled.main`
  margin-top: 72px;
`;

const Layout: React.FC<IProps> = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const drawerToggleHandler = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Toolbar />
      <Main>{children}</Main>
    </>
  );
};

export default React.memo(Layout);
