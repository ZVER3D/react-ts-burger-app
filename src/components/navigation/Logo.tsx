import React from 'react';
import styled from 'styled-components/macro';
import BurgerLogo from '../../assets/images/burger-logo.png';

interface IProps {}

const Div = styled.div`
  background-color: #fff;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;

  & img {
    height: 100%;
  }
`;

const Logo: React.FC<IProps> = () => {
  return (
    <Div>
      <img src={BurgerLogo} alt="Burger Builder" />
    </Div>
  );
};

export default Logo;
