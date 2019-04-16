import { observer } from 'mobx-react-lite';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

interface IProps {}

const Orders = observer<IProps>(() => {
  const {} = useQuery('ORDERS_QUERY');

  return <div>hi</div>;
});

export default Orders;
