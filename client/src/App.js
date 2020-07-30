import React from 'react';

//components
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//custom components
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
//establish new connection to GraphQL server using apollo
//where one can pass config settings!!
const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
        <div className='container'>
          <Home />
        </div>
      <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
