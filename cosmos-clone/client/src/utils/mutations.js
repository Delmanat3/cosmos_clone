import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_DATA=gql`
mutation addData($name:String!,$description:String,$links:[String],$coinId:String!,$images:[String],$price:[String],$supply:String,$date_added:String){
  addData(name:$name,description:$description,links:$links,coinId:$coinId,images:$images,price:$price,supply:$supply,date_added:$date_added){
  
    _id
    name

  
  }
}

`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id 
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newBook: InputBook!) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;