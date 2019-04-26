import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Form from '../Form/From';
import Container from 'react-bootstrap/Container';
import CreateForm from '../../CreateForm/CreateForm';
import Navbar from '../Navbar/Navbar.js';


export default class Login extends Component {
  render() {
    return (
      <div className="create">
        <Navbar />
        <Container />
        <Jumbotron />
        <CreateForm />
        <Form /> 
      </div>
    )
  }
}
