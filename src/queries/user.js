import { gql } from '@apollo/client';

export const getMeQuery = gql`
query{
  getMe{
    name
    email
    _id
  }
}
`;

export const loginMutation = gql`
mutation{
    login(email:"aman@gmail.com", password:"12345678"){
      name
      email
      _id
    }
  }
`;

export const registerMutation = gql`
mutation{
  register(name:"aman", email:"aman1@gmail.com", password:"12345678"){
    name
    email
    _id
  }
}
`;

export const logoutMutation = gql`
mutation{
  logout{
    name
    email
  }
}
`;