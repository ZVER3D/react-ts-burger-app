import React from 'react';
import styled from 'styled-components/macro';

interface IProps {
  isOpen: boolean;
  closeHandler: () => void;
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop: React.FC<IProps> = ({ isOpen, closeHandler }) => {
  return isOpen ? <Div onClick={closeHandler} /> : null;
};

export default Backdrop;
