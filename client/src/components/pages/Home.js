import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.js';
import Container from 'react-bootstrap/Container'


export default class Nav extends Component {
    render() {
      return (
        <div>
        <Navbar />
        <Container />
      </div>
      );
    }
  }