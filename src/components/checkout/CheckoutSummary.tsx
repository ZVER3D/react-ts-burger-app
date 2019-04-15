import React from 'react';
import styled from 'styled-components/macro';
import Burger from '../burger/Burger';

const Main = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const BurgerContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const CheckoutSummary: React.FC = () => {
  return (
    <Main>
      <h1>We hope it tastes good!</h1>
      <BurgerContainer>
        <Burger />
      </BurgerContainer>
    </Main>
  );
};

export default CheckoutSummary;
