import React from 'react';
import styled from 'styled-components/macro';

interface IProps {
  price: number;
  ingredients: Array<{ name: string; amount: number }>;
  date: Date;
}

export const OrderStyle = styled.div`
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

const Order: React.FC<IProps> = ({ price, ingredients, date }) => {
  const ings = ingredients.map(({ name, amount }) => (
    <Ingredient key={name}>
      {name} ({amount})
    </Ingredient>
  ));

  const formated = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <OrderStyle>
      <p>Ingredients: {ings}</p>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
      <p>
        Order Date: <strong>{formated}</strong>
      </p>
    </OrderStyle>
  );
};

export default React.memo(Order);
