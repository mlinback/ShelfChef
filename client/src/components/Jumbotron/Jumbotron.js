import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
export default class JumbotronTitle extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid id ="fluid">
          <Container id="container">
          </Container>
        </Jumbotron>
      </div>
    )
  }
}