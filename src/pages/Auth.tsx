import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { Redirect, RouteComponentProps } from 'react-router';
import styled from 'styled-components/macro';
import * as yup from 'yup';
import Button from '../components/UI/Button';
import { Error } from '../components/UI/Error';
import Input from '../components/UI/Input';
import { LoginMutationVariables, RegisterMutationVariables } from '../generated/graphql';
import { LOGIN_MUTATION } from '../graphql/mutations/login';
import { REGISTER_MUTATION } from '../graphql/mutations/register';
import { RootContext } from '../store/RootStore';
import { useInput } from '../utils/useInput';

const Div = styled.div`
  margin: 20px auto;
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

const emailSchema = yup
  .string()
  .email()
  .required();
const passwordSchema = yup
  .string()
  .min(6)
  .max(75)
  .required();

interface IProps extends RouteComponentProps {}

const Auth = observer<IProps>(({ history }) => {
  const { user } = useContext(RootContext);

  const [serverError, setServerError] = useState<string | null>(null);

  const email = useInput('', emailSchema);
  const password = useInput('', passwordSchema);

  const login = useMutation<any, LoginMutationVariables>(LOGIN_MUTATION, {
    errorPolicy: 'all',
  });
  const register = useMutation<any, RegisterMutationVariables>(REGISTER_MUTATION, {
    errorPolicy: 'all',
  });

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setServerError(null);

    // Check validity
    await email.validate();
    await password.validate();
    if (email.error || password.error) {
      return;
    }

    const res = await login({ variables: { email: email.value, password: password.value } });

    if (res.error || !res.data || !res.data.login) {
      return setServerError('Invalid email/password.');
    }

    user.fillUser({
      email: res.data.login.email,
      name: res.data.login.name,
      address: res.data.login.address,
      deliveryMethod: res.data.login.address,
    });

    if (user.redirect) {
      user.redirect = false;
      history.push('/checkout');
    }
  };

  const registerHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setServerError(null);

    const res = await register({ variables: { email: email.value, password: password.value } });
    if (res.error || !res.data || !res.data.register) {
      return setServerError('User with that email already exists.');
    }

    user.fillUser({
      email: res.data.register.email,
    });

    if (user.redirect) {
      user.redirect = false;
      history.push('/checkout');
    }
  };

  if (user.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Div>
      {serverError && <Error>{serverError}</Error>}
      <form>
        <Input
          value={email.value}
          errMessage={email.error}
          onChange={email.onChange}
          onBlur={email.validate}
          label="Email"
        />
        <Input
          value={password.value}
          errMessage={password.error}
          onChange={password.onChange}
          onBlur={password.validate}
          elementConfig={{ type: 'password' }}
          label="Password"
        />
        <Button type="success" clickHandler={loginHandler}>
          LOGIN
        </Button>
        <Button type="danger" clickHandler={registerHandler}>
          REGISTER
        </Button>
      </form>
    </Div>
  );
});

export default Auth;
