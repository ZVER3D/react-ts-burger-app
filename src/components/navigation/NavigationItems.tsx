import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { RootContext } from '../../store/RootStore';
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

const NavigationItems = observer<IProps>(() => {
  const { user } = useContext(RootContext);

  return (
    <Ul>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {user.isAuthenticated ? (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/edit-profile">Edit Profile</NavigationItem>
          <NavigationItem link="/logout">Logout</NavigationItem>
        </>
      ) : (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      )}
    </Ul>
  );
});

export default NavigationItems;
