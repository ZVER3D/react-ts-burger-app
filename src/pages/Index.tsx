import React from 'react';
import Burger from '../components/burger/Burger';

interface IProps {}

const Index: React.FC<IProps> = () => {
  return <Burger ingredients={{ salad: 2, bacon: 2, cheese: 1, meat: 1 }} />;
};

export default Index;
