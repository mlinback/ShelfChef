import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class JumbotronTitle extends Component {
  render() {
    return (
      <div>
        <Jumbotron id = "homeJumbo">
        <div className = "img"/>
          <Container className = "homeContainer">
            <h2>
            Let ShelfChef help you plan your next meal with the following easy steps. Create a free account. Save items to your online pantry. Search recipes based on your pantry's contents and filter based off dietary restrictions.
            </h2>
            <br />
            <h2>"Not everyone can become a great chef, but a great chef can come from anywhere"</h2>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}