import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

export default class PantryForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How long do you have?</Form.Label>
            <Form.Control as="select">
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>15 minutes</option>
              <option>20 minutes</option>
              <option>25 mintues</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>How many incrediants do you have?</Form.Label>
            <Form.Control as="select" multiple>
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="outline-light" className="search">Find my dinner</Button>
      </div>
    );
  }
}
