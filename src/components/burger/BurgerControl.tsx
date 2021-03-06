import React from 'react';
import styled from 'styled-components/macro';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Less = styled(Button)`
  background-color: #d39952;
  color: white;

  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
`;

const More = styled(Button)`
  background-color: #8f5e1e;
  color: white;

  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;

interface IProps {
  label: string;
  moreHandler: () => void;
  lessHandler: () => void;
  disabled: boolean;
}

const BurgerControl: React.FC<IProps> = ({ label, lessHandler, moreHandler, disabled }) => {
  return (
    <Main>
      <Label>{label}</Label>
      <Less className="less" onClick={lessHandler} disabled={disabled}>
        Less
      </Less>
      <More className="more" onClick={moreHandler}>
        More
      </More>
    </Main>
  );
};

export default BurgerControl;
