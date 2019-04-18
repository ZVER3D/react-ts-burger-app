import gql from 'graphql-tag';

export const ME_QUERY = gql`
  query Me {
    me {
      email
      name
      address
      deliveryMethod
      phone
    }
  }
`;
