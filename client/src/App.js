import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from './components/pages/Login';
import Create from './components/pages/Create'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Container>
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={Create} />
      {/* <Route exact path="/login" component={Login} /> */}
      </Container>
      </div>
      </Router>
    );
  }
}

export default App;
