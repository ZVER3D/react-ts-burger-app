import React from 'react';
import { RouteComponentProps } from 'react-router';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import ContactInfo from '../components/checkout/ContactInfo';

interface IProps extends RouteComponentProps {}

const Checkout: React.FC<IProps> = ({ history }) => {
  const cancelHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <CheckoutSummary />
      <ContactInfo mode="checkout" cancelHandler={cancelHandler} />
    </>
  );
};

export default Checkout;
