import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Burger from '../components/burger/Burger';
import BurgerControls from '../components/burger/BurgerControls';
import OrderSummary from '../components/burger/OrderSummary';
import Modal from '../components/UI/Modal';
import { RootContext } from '../store/RootStore';

interface IProps extends RouteComponentProps {}

const Index = observer<IProps>(({ history }) => {
  const [purchasing, setPurchasing] = useState(false);
  const { user } = useContext(RootContext);

  const startPurchasing = useCallback(() => {
    setPurchasing(true);
  }, []);

  const cancelPurchasing = useCallback(() => {
    setPurchasing(false);
  }, []);

  const continuePurchasing = useCallback(() => {
    if (!user.isAuthenticated) {
      user.redirect = true;
      return history.push('/auth');
    }
    history.push('/checkout');
  }, [user.isAuthenticated]);

  return (
    <>
      <Modal isOpen={purchasing} closeHandler={cancelPurchasing}>
        <OrderSummary cancelHandler={cancelPurchasing} continueHandler={continuePurchasing} />
      </Modal>
      <Burger />
      <BurgerControls orderHandler={startPurchasing} />
    </>
  );
});

export default React.memo(Index);
