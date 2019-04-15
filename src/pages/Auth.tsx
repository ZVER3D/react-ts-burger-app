import React, { useState } from 'react';
import styled from 'styled-components/macro';
import * as yup from 'yup';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
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

const Auth: React.FC = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

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
    if (!(await checkValidity())) {
      return;
    }
    console.log('Login logic here...');
  };

  const registerHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!(await checkValidity())) {
      return;
    }
    console.log('Register logic here...');
  };

  return (
    <Div>
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
};

export default Auth;
