import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Form from '../Form/From'
import Conatiner from 'react-bootstrap/Container'


export default class Login extends Component {
  render() {
    return (
      <div>
        <Conatiner />
        <Jumbotron />
        <Form /> 
      </div>
    )
  }
}