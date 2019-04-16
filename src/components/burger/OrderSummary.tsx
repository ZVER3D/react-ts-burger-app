import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { RootContext } from '../../store/RootStore';
import Button from '../UI/Button';

interface IProps {
  continueHandler: () => void;
  cancelHandler: () => void;
}

const OrderSummary = observer<IProps>(({ cancelHandler, continueHandler }) => {
  const { burger, user } = useContext(RootContext);

  const ingredientSummary = Object.entries(burger.ingredients).map(([ingr, amount]) => (
    <li key={ingr}>
      <span style={{ textTransform: 'capitalize' }}>{ingr}</span>: {amount}
    </li>
  ));

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${burger.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button type="success" clickHandler={continueHandler}>
        {user.isAuthenticated ? 'CONTINUE' : 'LOGIN AND CONTINUE'}
      </Button>
      <Button type="danger" clickHandler={cancelHandler}>
        CANCEL
      </Button>
    </>
  );
});

export default OrderSummary;
