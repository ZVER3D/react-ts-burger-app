import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { RootContext } from '../../store/RootStore';
import BurgerControl from './BurgerControl';

const Div = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: ${scale} 0.3s linear;
  }
`;

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

interface IProps {
  orderHandler: () => void;
}

const BurgerControls = observer<IProps>(({ orderHandler }) => {
  const { burger } = useContext(RootContext);

  const moreHandler = (type: string) => () => burger.addIngredient(type as any);
  const lessHandler = (type: string) => () => burger.removeIngredient(type as any);

  return (
    <Div>
      <p>
        Current Price: <strong>{burger.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BurgerControl
          key={ctrl.type}
          label={ctrl.label}
          moreHandler={moreHandler(ctrl.type)}
          lessHandler={lessHandler(ctrl.type)}
          disabled={burger.ingredients[ctrl.type] === 0}
        />
      ))}
      <Button onClick={orderHandler} disabled={!burger.purchasable}>
        ORDER NOW
      </Button>
    </Div>
  );
});

export default BurgerControls;
