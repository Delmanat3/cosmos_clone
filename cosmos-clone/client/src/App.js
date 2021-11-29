import {MediaQuery} from './pages/mediaQueries'
import {Home} from './pages/home'
import { Cards } from './components/CardData';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (

    <div >
      <ApolloProvider client={client}>
     <Home/>
     {/* <>
     <Cards/>
     </> */}
     </ApolloProvider>
    </div>
  );
}

export default App;
