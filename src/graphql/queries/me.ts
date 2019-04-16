import gql from 'graphql-tag';

export const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      name
      address
      deliveryMethod
    }
  }
`;
