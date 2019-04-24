import gql from 'graphql-tag';

export const ORDER_MUTATION = gql`
  mutation Order(
    $ingredients: [IngredientInput!]!
    $address: String!
    $phone: String!
    $deliveryMethod: String!
    $name: String!
  ) {
    order(
      data: {
        ingredients: $ingredients
        address: $address
        phone: $phone
        deliveryMethod: $deliveryMethod
        name: $name
      }
    )
  }
`;
