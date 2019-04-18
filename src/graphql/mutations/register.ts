import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    register(data: { email: $email, password: $password }) {
      email
      name
      deliveryMethod
    }
  }
`;
