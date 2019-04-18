import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import styled from 'styled-components/macro';
import { OrderMutation, OrderMutationVariables } from '../../generated/graphql';
import { ORDER_MUTATION } from '../../graphql/mutations/order';
import { RootContext } from '../../store/RootStore';
import { useInput } from '../../utils/useInput';
import Button from '../UI/Button';
import Input from '../UI/Input';

interface IProps {
  cancelHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  mode: 'checkout' | 'edit-profile';
}

const Main = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const ContactInfo = observer<IProps>(({ cancelHandler, mode }) => {
  const { user } = useContext(RootContext);

  const order = useMutation<OrderMutation, OrderMutationVariables>(ORDER_MUTATION, {
    errorPolicy: 'all',
  });

  const [name, setName] = useInput(user.name);
  const [address, setAddress] = useInput(user.address);
  const [phone, setPhone] = useInput(user.phone);
  const [deliveryMethod, setDeliveryMethod] = useInput(user.deliveryMethod);

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    email: '',
    deliveryMethod: '',
  });

  const isFormValid = () => {
    return !Object.values(errors).some(e => e !== '');
  };

  const orderHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // TODO: sort out address, and delivery method name and email info stuff
    await order({
      variables: {
        address,
        deliveryMethod,
        phone,
        ingredients: [
          /* TODO: add stuff */
        ],
      },
    });
  };

  return (
    <Main>
      <h4>Enter Your Contact Data</h4>
      <form>
        <Input label="Your Name" value={name} onChangeHandler={setName} />
        <Input label="Phone Number" value={phone} onChangeHandler={setPhone} />
        <Input label="Address" value={address} onChangeHandler={setAddress} />
        {/** TODO: Add choise of delivery method */}
        {mode === 'checkout' ? (
          <>
            <p>
              This is where credit card stuff should go, using API services like Stripe. But im not
              gonna do it, because im lazy 😝.
            </p>
            <Button clickHandler={orderHandler} disabled={!isFormValid()} type="success">
              ORDER NOW
            </Button>
            <Button clickHandler={cancelHandler!} type="danger">
              CANCEL
            </Button>
          </>
        ) : null /** TODO: add edit profile buttons here */}
      </form>
    </Main>
  );
});

export default ContactInfo;
