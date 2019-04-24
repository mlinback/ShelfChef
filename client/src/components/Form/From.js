import React, { Component } from "react";
import '../../css/App.css'
import Form from "react-bootstrap/Form";
 import Button from 'react-bootstrap/Button'

export default class LoginFrom extends Component {
  render() {
    return (
      <div>
        <Form id='form'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
