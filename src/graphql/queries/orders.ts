import gql from 'graphql-tag';

export const ORDERS_QUERY = gql`
  query Orders {
    orders {
      id
      date
      price
      ingredients {
        name
        amount
      }
    }
  }
`;
