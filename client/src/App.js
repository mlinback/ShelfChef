import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Create from './components/pages/Create';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Container>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={Create} />
      </Container>
      </div>
      </Router>
    );
  }
}

export default App;
