import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from './components/pages/Login';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Container>
      <Route exact path="/" component={Login} />
      </Container>
      </div>
      </Router>
    );
  }
}

export default App;
