import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components/macro';
import { MeQuery } from '../generated/graphql';
import { ME_QUERY } from '../graphql/queries/me';
import { RootContext } from '../store/RootStore';
import SideDrawer from './navigation/SideDrawer';
import Toolbar from './navigation/Toolbar';

interface IProps {}

const Main = styled.main`
  margin-top: 72px;
`;

const Layout = observer<IProps>(({ children }) => {
  const { user } = useContext(RootContext);

  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY, { errorPolicy: 'all' });

  if (!loading && data && !error) {
    const { email, name, deliveryMethod, address } = data.me;
    user.fillUser({ email, name, deliveryMethod, address });
  }

  return (
    <>
      <Toolbar />
      <SideDrawer />
      <Main>{children}</Main>
    </>
  );
});

export default Layout;
