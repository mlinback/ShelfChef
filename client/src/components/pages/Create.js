import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Form from '../Form/From'
import Container from 'react-bootstrap/Container'
import '../../css/App.css'
import CreateFrom from '../../CreateForm/CreateForm';


export default class Login extends Component {
  render() {
    return (
      <div>
        <Container />
        <Jumbotron />
        <CreateFrom />
        <Form /> 
      </div>
    )
  }
}
