import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components/macro';
import { GetPricesQuery, MeQuery } from '../generated/graphql';
import { GET_PRICES } from '../graphql/queries/getPrices';
import { ME_QUERY } from '../graphql/queries/me';
import { RootContext } from '../store/RootStore';
import SideDrawer from './navigation/SideDrawer';
import Toolbar from './navigation/Toolbar';

interface IProps {}

const Main = styled.main`
  margin-top: 72px;
`;

const Layout = observer<IProps>(({ children }) => {
  const { user, burger } = useContext(RootContext);

  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY, { errorPolicy: 'all' });
  const { data: prices, loading: pricesLoading, error: pricesError } = useQuery<GetPricesQuery>(
    GET_PRICES
  );

  if (!loading && data && !error) {
    user.fillUser(data.me);
  }

  if (!pricesLoading && !pricesError && prices) {
    burger.fillPrices(prices.getPrices);
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
