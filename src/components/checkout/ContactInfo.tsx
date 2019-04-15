import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
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
  const {} = useContext(RootContext);

  // TODO: get initial vals from user context
  const [name, setName] = useInput('');
  const [address, setAddress] = useInput('');
  const [zipcode, setZipcode] = useInput('');
  const [email, setEmail] = useInput('');
  const [deliveryMethod, setDeliveryMethod] = useInput('');

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    zipcode: '',
    email: '',
    deliveryMethod: '',
  });

  const isFormValid = () => {
    return Object.values(errors).filter(e => e !== '').length === 0;
  };

  const orderHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('ODERED');
  };

  return (
    <Main>
      <h4>Enter Your Contact Data</h4>
      <form>
        <Input label="Your Name" value={name} onChangeHandler={setName} />
        <Input label="Email" value={email} onChangeHandler={setEmail} />
        <Input label="Address" value={address} onChangeHandler={setAddress} />
        <Input label="ZipCode" value={zipcode} onChangeHandler={setZipcode} />
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
