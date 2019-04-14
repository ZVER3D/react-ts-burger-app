import React from 'react';
import Burger from '../components/burger/Burger';
import BurgerControls from '../components/burger/BurgerControls';

interface IProps {}

const Index: React.FC<IProps> = () => {
  return (
    <>
      <Burger />
      <BurgerControls />
    </>
  );
};

export default Index;
