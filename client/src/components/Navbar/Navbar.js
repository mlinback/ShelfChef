import React from "react";
import Nav from "react-bootstrap/Nav";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">ABOUT US</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">LOGIN</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
