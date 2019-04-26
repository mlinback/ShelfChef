import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Form from '../Form/From'
import Container from 'react-bootstrap/Container'
import '../../css/App.css'
import CreateForm from '../../CreateForm/CreateForm';


export default class Login extends Component {
  render() {
    return (
      <div>
        <Container />
        <Jumbotron />
        <CreateForm />
        <Form /> 
      </div>
    )
  }
}
