import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import ContactInfo from '../components/checkout/ContactInfo';
import { RootContext } from '../store/RootStore';

interface IProps extends RouteComponentProps {}

const Checkout = observer<IProps>(({ history }) => {
  const { user, burger } = useContext(RootContext);

  const cancelHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      history.goBack();
    },
    [history]
  );

  if (user.isAuthenticated && burger.purchasable) {
    return (
      <>
        <CheckoutSummary />
        <ContactInfo mode="checkout" cancelHandler={cancelHandler} />
      </>
    );
  } else {
    user.redirect = true;
    return <Redirect to="/auth" />;
  }
});

export default Checkout;
