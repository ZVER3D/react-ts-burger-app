import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import styled from 'styled-components/macro';
import * as yup from 'yup';
import { EditUserMutationVariables, OrderMutationVariables } from '../../generated/graphql';
import { EDIT_USER_MUTATION } from '../../graphql/mutations/editUser';
import { ORDER_MUTATION } from '../../graphql/mutations/order';
import { RootContext } from '../../store/RootStore';
import { useInput } from '../../utils/useInput';
import { useSelect } from '../../utils/useSelect';
import Button from '../UI/Button';
import { Error } from '../UI/Error';
import Input from '../UI/Input';
import SelectInput from '../UI/SelectInput';

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

const nameSchema = yup
  .string()
  .required()
  .min(3)
  .max(200);
const addressSchema = yup
  .string()
  .notRequired()
  .min(6)
  .max(255);
const phoneSchema = yup
  .string()
  .required()
  .min(6)
  .max(15);
const deliveryMethodSchema = yup
  .string()
  .nullable()
  .required()
  .oneOf(['courier', 'take out']);

const ContactInfo = observer<IProps>(({ cancelHandler, mode }) => {
  const { user, burger } = useContext(RootContext);

  const order = useMutation<any, OrderMutationVariables>(ORDER_MUTATION, {
    errorPolicy: 'all',
  });

  const editUser = useMutation<any, EditUserMutationVariables>(EDIT_USER_MUTATION, {
    errorPolicy: 'all',
  });

  const name = useInput(user.name, nameSchema);
  const address = useInput(user.address, addressSchema);
  const phone = useInput(user.phone, phoneSchema);
  const deliveryMethod = useSelect(null, deliveryMethodSchema);

  const [serverError, setServerError] = useState<string | null>(null);

  const editHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      e.preventDefault();
      setServerError(null);

      // Validate fields
      await name.validate();
      await address.validate();
      await phone.validate();
      await deliveryMethod.validate();
      if (name.error || address.error || phone.error || deliveryMethod.error) {
        return;
      }

      const res = await editUser({
        variables: {
          address: address.value,
          phone: phone.value,
          deliveryMethod: deliveryMethod.value!.value,
          name: name.value,
        },
      });

      if (res.error || !res.data || !res.data.editUser) {
        return setServerError('Sent incorrect data');
      }

      user.fillUser({
        address: address.value,
        phone: phone.value,
        deliveryMethod: deliveryMethod.value!.value,
        name: name.value,
      });
    } catch (err) {
      setServerError('Sent incorrect data');
    }
  };

  const orderHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      e.preventDefault();
      setServerError(null);

      // Validate fields
      await name.validate();
      await address.validate();
      await phone.validate();
      await deliveryMethod.validate();
      if (name.error || address.error || phone.error || deliveryMethod.error) {
        return;
      }

      const res = await order({
        variables: {
          address: address.value,
          phone: phone.value,
          deliveryMethod: deliveryMethod.value!.value,
          name: name.value,
          ingredients: Object.entries(burger.ingredients).map(([ingName, amount]) => ({
            name: ingName,
            amount,
          })),
        },
      });

      if (res.error || !res.data || !res.data.order) {
        return setServerError('Sent incorrect data');
      }

      burger.clearIngredients();
    } catch (err) {
      setServerError('Sent incorrect data');
    }
  };

  return (
    <Main>
      <h4>Enter Your Contact Data</h4>
      <form>
        {serverError && <Error>{serverError}</Error>}
        <Input
          label="Your Name"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.validate}
          errMessage={name.error}
        />
        <Input
          label="Phone Number"
          value={phone.value}
          onChange={phone.onChange}
          onBlur={phone.validate}
          errMessage={phone.error}
        />
        <Input
          label="Address"
          value={address.value}
          onChange={address.onChange}
          onBlur={address.validate}
          errMessage={address.error}
        />
        <SelectInput
          options={[
            { value: 'courier', label: 'Courier' },
            { value: 'take out', label: 'Take Out' },
          ]}
          label="Delivery Method"
          value={deliveryMethod.value}
          onChange={deliveryMethod.onChange}
          onBlur={deliveryMethod.validate}
          errMessage={deliveryMethod.error}
        />
        {mode === 'checkout' ? (
          <>
            <p>
              This is where credit card stuff should go, using API services like Stripe. But im not
              gonna do it, because im lazy 😝.
            </p>
            <Button clickHandler={orderHandler} type="success">
              ORDER NOW
            </Button>
            <Button clickHandler={cancelHandler!} type="danger">
              CANCEL
            </Button>
          </>
        ) : (
          <Button clickHandler={editHandler} type="success">
            SAVE CHANGES
          </Button>
        )}
      </form>
    </Main>
  );
});

export default ContactInfo;
