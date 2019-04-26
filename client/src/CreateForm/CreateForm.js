import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class CreateForm extends Component {
  render() {
    return (
      <div>
        <Form.Control type="text" placeholder="First Name" />
        <br />
        <Form.Control type="text" placeholder="Last Name" />
      </div>
    );
  }
}
