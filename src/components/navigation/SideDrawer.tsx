import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { RootContext } from '../../store/RootStore';
import Backdrop from '../UI/Backdrop';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const Div = styled.div`
  position: fixed;
  width: 280px;
  min-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }
`;

const LogoContainer = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

interface IProps {}

const SideDrawer = observer<IProps>(() => {
  const { drawer } = useContext(RootContext);

  return (
    <>
      <Backdrop isOpen={drawer.isOpen} closeHandler={drawer.close} />
      <Div className={drawer.isOpen ? 'open' : 'close'} onClick={drawer.close}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <nav>
          <NavigationItems />
        </nav>
      </Div>
    </>
  );
});

export default SideDrawer;
