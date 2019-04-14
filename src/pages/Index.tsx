import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Burger from '../components/burger/Burger';
import BurgerControls from '../components/burger/BurgerControls';
import OrderSummary from '../components/burger/OrderSummary';
import Modal from '../components/UI/Modal';

interface IProps extends RouteComponentProps {}

const Index: React.FC<IProps> = ({ history }) => {
  const [purchasing, setPurchasing] = useState(false);

  const startPurchasing = () => {
    // TODO: check if auth and if not -
    setPurchasing(true);
  };

  const cancelPurchasing = () => {
    setPurchasing(false);
  };

  const continuePurchasing = () => {
    history.push('/checkout');
  };

  return (
    <>
      <Modal isOpen={purchasing} closeHandler={cancelPurchasing}>
        <OrderSummary cancelHandler={cancelPurchasing} continueHandler={continuePurchasing} />
      </Modal>
      <Burger />
      <BurgerControls orderHandler={startPurchasing} />
    </>
  );
};

export default React.memo(Index);
