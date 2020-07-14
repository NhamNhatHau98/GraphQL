import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

//apollo set up client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
