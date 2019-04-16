import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components/macro';
import { MeQuery } from '../../generated/graphql';
import { ME_QUERY } from '../../graphql/user/queries/me';
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
  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY, { fetchPolicy: 'cache-first' });
  const { user } = useContext(RootContext);

  if (!loading && data && !error) {
    const { email, name, deliveryMethod, address } = data.me;
    // TODO: add more info here (history, etc.)
    user.fillUser({ email, name, deliveryMethod, address });
  }

  return (
    <Ul>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {loading ? null : data && !error ? (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/logout">Logout</NavigationItem>
        </>
      ) : (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      )}
    </Ul>
  );
});

export default NavigationItems;
