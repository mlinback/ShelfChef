import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Form from '../Form/From';
import Container from 'react-bootstrap/Container';
import Navbar from '../Navbar/Navbar.js';
import '../../css/App.css';



export default class Login extends Component {
  render() {
    return (
      <div className = 'login'>
        <Navbar />
        <Container />
        <Jumbotron />
        <Form /> 
      </div>
    )
  }
}
