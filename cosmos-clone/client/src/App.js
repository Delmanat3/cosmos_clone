import Customs from './testation/Customs'
import {Home} from './pages/home'
import {Login} from './pages/Login'
import {SignUp} from './pages/signup'
import  {NavBar}  from './components/NavStuff/NavBar';
// import  {FeaturedPost}from './components/News/News'
import Row from './components/Table/CoinInfo'
import {Coins} from './components/SingleCoin/Coins'
import  SimpleLineChart  from './components/chart';
import React  from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router,Switch, Route ,useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/Footer/footer';
import { SimpleSearch } from './utils/API';
import Dashboard from './components/Info/Dash';
import LeftNav from './components/LeftNav';
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


  return (
      <ApolloProvider client={client}>
        <Router>
        <NavBar style={{backgroundColor:'black'}}/>
          
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
              <Route exact path='/login'component={Login} />
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
              <Route exact path='/info' component={Dashboard}/>
            </Switch>
            <Footer/>
        </Router>
     </ApolloProvider>
    
  );
}

export default App;
