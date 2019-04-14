import React from 'react';
import styled from 'styled-components/macro';
import Backdrop from './Backdrop';

const Div = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

interface IProps {
  isOpen: boolean;
  closeHandler: () => void;
}

const Modal: React.FC<IProps> = ({ isOpen, closeHandler, children }) => {
  return (
    <>
      <Backdrop closeHandler={closeHandler} isOpen={isOpen} />
      <Div
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {children}
      </Div>
    </>
  );
};

export default Modal;
