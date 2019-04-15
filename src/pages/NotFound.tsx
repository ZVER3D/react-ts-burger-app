import React from 'react';
import styled from 'styled-components/macro';

const H1 = styled.h1`
  color: #222;
  text-align: center;
`;

const NotFound: React.FC = () => {
  return <H1>Page Not Found.</H1>;
};

export default NotFound;
