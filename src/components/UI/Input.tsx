import React from 'react';
import styled from 'styled-components/macro';

const Div = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const Inp = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background-color: #eee;
  }

  &.invalid {
    border: 1px solid red;
    background-color: rgb(255, 187, 187);
  }
`;

interface IProps {
  label: string;
  invalid?: boolean;
  errMessage?: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  elementConfig?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: React.FC<IProps> = ({
  label,
  invalid,
  value,
  onChangeHandler,
  elementConfig,
  errMessage,
}) => {
  return (
    <Div>
      <Label>{label}</Label>
      <Inp
        {...elementConfig}
        onChange={onChangeHandler}
        value={value}
        className={invalid ? 'invalid' : ''}
      />
      <p style={{ fontSize: '.9rem', color: '#f00' }}>{errMessage}</p>
    </Div>
  );
};

export default Input;
