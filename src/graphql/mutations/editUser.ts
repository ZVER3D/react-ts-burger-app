import gql from 'graphql-tag';

export const EDIT_USER_MUTATION = gql`
  mutation EditUser($address: String!, $name: String!, $deliveryMethod: String!, $phone: String!) {
    editUser(
      data: { address: $address, name: $name, deliveryMethod: $deliveryMethod, phone: $phone }
    )
  }
`;
