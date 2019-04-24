import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class JumbotronTitle extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
  <Container>
    <h1>Welcome!</h1>
    <p>
      Don't know what to make for dinner? Don't have a lot of time? Let ShelfChef do the work for you.
    </p>
  </Container>
</Jumbotron>
      </div>
    )
  }
}
