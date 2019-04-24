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
  errMessage?: string | null;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  elementConfig?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: React.FC<IProps> = ({ label, value, onChange, onBlur, elementConfig, errMessage }) => (
  <Div>
    <Label>{label}</Label>
    <Inp
      {...elementConfig}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      className={errMessage ? 'invalid' : ''}
    />
    {errMessage && <p style={{ fontSize: '.9rem', color: '#e11' }}>{errMessage}</p>}
  </Div>
);

export default React.memo(Input);
