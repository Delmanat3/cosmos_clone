import {Home} from './pages/home'
import {Login} from './pages/Login'
import {SignUp} from './pages/signup'
import  {NavBar}  from './components/NavStuff/NavBar';
import Row from './components/Table/CoinInfo'
import {Coins} from './components/SingleCoin/Coins'
import Footer from './components/Footer/footer'
import React  from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Profile from './pages/Profile'
import { Marque } from "./components/Marque/index";



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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/serviceWorker.js").then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }

  return (
      <ApolloProvider client={client}>
        <Router>
        <Marque style={{backgroundColor:'black'}} />
        <NavBar style={{backgroundColor:'black'}}/>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
            <Switch>          
                  <Route exact path='/login'component={Login} />
</Switch>
              <Switch>
              <Route exact path='/signup' component={SignUp}/>
            </Switch>
            <Switch>
              <Route exact path='/coininfo' component={Row}/>
            </Switch>
            <Switch>
              <Route exact path='/coins' component={Coins}/>
            </Switch>
            <Switch>
              <Route exact path='/profile' component={Profile}/>
            </Switch>
          <Footer/>
        </Router>
     </ApolloProvider>
    
  );
}

export default App;
