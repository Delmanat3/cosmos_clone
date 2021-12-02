import { gql } from '@apollo/client';

export const GET_LOAD = gql`
  {
    coins{
   name
   description
   links
   coinId
   images
   price
   supply
   date_added
    }
  }

  
`;
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      pic
      bio
    }
  }
`;
