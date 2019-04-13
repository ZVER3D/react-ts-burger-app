import React from 'react';
import styled from 'styled-components/macro';
import Backdrop from '../UI/Backdrop';
import Logo from './Logo';

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

interface IProps {
  isOpen: boolean;
  closeHandler: () => void;
}

const SideDrawer: React.FC<IProps> = ({ isOpen, closeHandler }) => {
  return (
    <>
      <Backdrop isOpen={isOpen} closeHandler={closeHandler} />
      <Div className={isOpen ? 'open' : 'close'} onClick={closeHandler}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <nav>Navigation Items</nav>
      </Div>
    </>
  );
};

export default SideDrawer;
