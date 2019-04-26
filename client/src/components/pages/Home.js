import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Jumbotron from '../Jumbotron2/Jumbotron2.js';




export default class Nav extends Component {
    render() {
      return (
        <div className = "home">
        <Navbar />
        <Jumbotron />
      </div>
      );
    }
  }