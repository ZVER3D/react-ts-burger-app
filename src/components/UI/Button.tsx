import React from 'react';
import styled from 'styled-components/macro';

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  &:disabled {
    cursor: not-allowed;
    color: #ccc;
  }

  &.success {
    color: #5c9210;
  }

  &.danger {
    color: #944317;
  }
`;

interface IProps {
  disabled?: boolean;
  type: 'success' | 'danger';
  clickHandler: () => void;
}

const Button: React.FC<IProps> = ({ type, disabled = false, clickHandler, children }) => (
  <Btn disabled={disabled} className={type} onClick={clickHandler}>
    {children}
  </Btn>
);
export default Button;
