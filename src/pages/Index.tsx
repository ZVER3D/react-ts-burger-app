import React, { useState } from 'react';
import Burger from '../components/burger/Burger';
import BurgerControls from '../components/burger/BurgerControls';

const Index: React.FC = () => {
  const [purchasing, setPurchasing] = useState(false);

  return (
    <>
      <Burger />
      <BurgerControls />
    </>
  );
};

export default Index;
