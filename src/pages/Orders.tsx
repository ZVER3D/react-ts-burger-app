import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Redirect } from 'react-router';
import Order, { OrderStyle } from '../components/Order';
import Spinner from '../components/UI/Spinner';
import { OrdersQuery } from '../generated/graphql';
import { ORDERS_QUERY } from '../graphql/queries/orders';
import { RootContext } from '../store/RootStore';

interface IProps {}

const Orders = observer<IProps>(() => {
  const { user } = useContext(RootContext);

  if (!user.isAuthenticated) {
    return <Redirect to="/auth" />;
  }

  const { data, error, loading } = useQuery<OrdersQuery>(ORDERS_QUERY);

  if (loading || error) {
    return <Spinner />;
  }

  if (!data || !data.orders) {
    return (
      <OrderStyle>
        <p>You didn't order anything yet.</p>
      </OrderStyle>
    );
  }

  return (
    <>
      {data.orders.map(order => (
        <Order key={order.id} ingredients={order.ingredients} price={order.price} />
      ))}
    </>
  );
});

export default Orders;
