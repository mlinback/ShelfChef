import React, { Component } from 'react'
import '../../css/home.css'
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className = "justify-content-center" variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">LOGIN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/create">SIGN UP!</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container id="container2">
        </Container>
      </div>
    );
  }
}
