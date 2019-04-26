import React, { Component } from "react";
import '../../css/App.css'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button' 
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <Form id='form'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br></br>
          <Link
          to = "/login">
          <Button variant="outline-light" type="submit">
            Login
          </Button>
          </Link>
          <Link to = "/create" >
          <Button variant="outline-light" type="submit">
            Create Account
          </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

