import gql from 'graphql-tag';

export const ORDER_MUTATION = gql`
  mutation Order($ingredients: [ing!]) {
    order(ingredients: $ingredients)
  }
`;
