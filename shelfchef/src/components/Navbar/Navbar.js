import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
