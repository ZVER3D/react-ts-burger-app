import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Redirect } from 'react-router';
import Order, { OrderStyle } from '../components/Order';
import Spinner from '../components/UI/Spinner';
import { OrdersQuery } from '../generated/graphql';
import { ORDERS_QUERY } from '../graphql/queries/orders';

interface IProps {}

const Orders: React.FC<IProps> = () => {
  const { data, error, loading } = useQuery<OrdersQuery>(ORDERS_QUERY);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Redirect to="/auth" />;
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
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
          date={new Date(order.date)}
        />
      ))}
    </>
  );
};

export default React.memo(Orders);
