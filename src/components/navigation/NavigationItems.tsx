import React from 'react';
import styled from 'styled-components/macro';
import NavigationItem from './NavigationItem';

interface IProps {}

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

const NavigationItems: React.FC<IProps> = () => {
  return (
    <Ul>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {true /** TODO: check auth */ ? (
        <>
          <NavigationItem exact={false} link="/orders">
            Orders
          </NavigationItem>
          <NavigationItem exact={false} link="/logout">
            Logout
          </NavigationItem>
        </>
      ) : (
        <NavigationItem exact={false} link="/auth">
          Auth
        </NavigationItem>
      )}
    </Ul>
  );
};

export default NavigationItems;
