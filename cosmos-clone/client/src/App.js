import {MediaQuery} from './pages/mediaQueries'
import {Home} from './pages/home'
import {Login} from './pages/Login'
import {SignUp} from './pages/signup'
import  {NavBar}  from './components/NavBar';
import CoinInfo from './pages/CoinInfo'
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';


import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it existsauthLink.concat(httpLink),
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
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
              <Route exact path='/login'component={Login} />
              <Switch>
              <Route exact path='/signup' component={SignUp}/>
            </Switch>
            <Switch>
              <Route exact path='/coininfo' component={CoinInfo}/>
            </Switch>
          </>
        </Router>
        
       
     </ApolloProvider>
    
  );
}

export default App;
