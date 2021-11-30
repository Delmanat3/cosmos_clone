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