import gql from 'graphql-tag';

export const GET_PRICES = gql`
  query GetPrices {
    getPrices {
      salad
      meat
      cheese
      bacon
    }
  }
`;
