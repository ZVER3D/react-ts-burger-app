import React from 'react';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';
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

export interface IDeliveryMethod {
  label: string;
  value: string;
}

interface IProps {
  options: IDeliveryMethod[];
  label: string;
  invalid?: boolean;
  errMessage?: string;
  value: ValueType<IDeliveryMethod>;
  onChange: (option: ValueType<IDeliveryMethod>) => void;
}

const SelectInput: React.FC<IProps> = ({
  label,
  invalid,
  value,
  onChange,
  errMessage,
  options,
}) => (
  <Div>
    <Label>{label}</Label>
    <Select onChange={onChange} options={options} value={value} />
    <p style={{ fontSize: '.9rem', color: '#e11' }}>{errMessage}</p>
  </Div>
);

export default React.memo(SelectInput);
