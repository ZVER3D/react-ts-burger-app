import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { RootContext } from '../../store/RootStore';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const Header = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const Nav = styled.nav`
  height: 100%;

  @media (max-width: 499px) {
    display: none;
  }
`;

const BurgerButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }

  & div {
    width: 90%;
    height: 3px;
    background-color: #fff;
  }
`;

const LogoContainer = styled.div`
  height: 80%;
`;

interface IProps {}

const Toolbar = observer<IProps>(() => {
  const { drawer } = useContext(RootContext);

  return (
    <Header>
      <BurgerButton onClick={drawer.toggle}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>
        <NavigationItems />
      </Nav>
    </Header>
  );
});

export default Toolbar;
