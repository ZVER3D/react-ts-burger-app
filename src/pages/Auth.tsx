import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { Redirect, RouteComponentProps } from 'react-router';
import styled from 'styled-components/macro';
import * as yup from 'yup';
import Button from '../components/UI/Button';
import { Error } from '../components/UI/Error';
import Input from '../components/UI/Input';
import {
  LoginMutation,
  LoginMutationVariables,
  RegisterMutation,
  RegisterMutationVariables,
} from '../generated/graphql';
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

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .max(75)
    .required(),
  email: yup
    .string()
    .email()
    .required(),
});

interface IProps extends RouteComponentProps {}

const Auth = observer<IProps>(({ history }) => {
  const { user } = useContext(RootContext);

  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const login = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    errorPolicy: 'all',
  });
  const register = useMutation<RegisterMutation, RegisterMutationVariables>(REGISTER_MUTATION, {
    errorPolicy: 'all',
  });

  const [emailValid, setEmailValid] = useState('');
  const [passwordValid, setPasswordlValid] = useState('');

  const checkValidity = async () => {
    try {
      await schema.validate({ email, password }, { abortEarly: true });
      return true;
    } catch (res) {
      setEmailValid('');
      setPasswordlValid('');
      if (res.path === 'email') {
        setEmailValid(res.message);
      } else {
        setPasswordlValid(res.message);
      }
      return false;
    }
  };

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoginError('');
    setRegisterError('');
    if (!(await checkValidity())) {
      return;
    }
    const res = await login({ variables: { email, password } });
    if (res.error || !res.data || !res.data.login) {
      return setLoginError('Invalid email/password.');
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
    setLoginError('');
    setRegisterError('');
    if (!(await checkValidity())) {
      return;
    }
    const res = await register({ variables: { email, password } });
    if (res.error || !res.data || !res.data.login) {
      return setRegisterError('User with that email already exists.');
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
      {loginError && <Error>{loginError}</Error>}
      {registerError && <Error>{registerError}</Error>}
      <form>
        <Input
          value={email}
          invalid={emailValid !== ''}
          errMessage={emailValid}
          onChangeHandler={onEmailChange}
          label="Email"
        />
        <Input
          value={password}
          invalid={passwordValid !== ''}
          errMessage={passwordValid}
          onChangeHandler={onPasswordChange}
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
