import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from './logo.png';
import './App.css';

const restLink = new RestLink({ uri: "https://api.spacexdata.com/v3" });

const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Link to="/" className="logo"><img src={logo} alt="SpaceX"/></Link>
            <Route exact path="/" component={Launches}/>
            <Route exact path="/launch/:flight_number" component={Launch}/>
          </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
