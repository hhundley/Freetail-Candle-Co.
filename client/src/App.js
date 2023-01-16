import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navigation from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Policies from "./components/policies";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";
import Footer from "./components/footer";

// Construct our main GraphQL API endpoint
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
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [pageState,setPageState] = useState({
    main:true,
    about:false,
    policies:false,
    contact:false,
    login:false,
    cart:false,
   })
  return (
    <ApolloProvider client={client}>
    <div>
      <Header />
      <Navigation pageState={pageState} setPageState={setPageState} />
      {pageState.main? <Main />: ''}
      {pageState.about? <About />: ''}
      {pageState.policies? <Policies />: ''}
      {pageState.signup? <Signup />: ''}
      {pageState.contact? <Contact />: ''}
      {pageState.login? <Login />: ''}
      {/* {pageState.cart? <Cart />: ''} */}
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
