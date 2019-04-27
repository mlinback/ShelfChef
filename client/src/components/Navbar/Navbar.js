import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav"


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center" defaultActiveKey="/home">
          <Nav.Item className ="NavButton">
            <Nav.Link href="/">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">LOGIN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/create">SIGN UP!</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

