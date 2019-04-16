import React from 'react';
import styled from 'styled-components/macro';
import { IIngredients } from '../store/BurgerStore';

interface IProps {
  price: number;
  ingredients: IIngredients;
}

const Main = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const Ingredient = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const Order: React.FC<IProps> = ({ price, ingredients }) => {
  const ings = Object.entries(ingredients).map(([name, amount]) => (
    <Ingredient key={name}>
      {name} ({amount})
    </Ingredient>
  ));

  return (
    <Main>
      <p>Ingredients: {ings}</p>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </Main>
  );
};

export default React.memo(Order);
