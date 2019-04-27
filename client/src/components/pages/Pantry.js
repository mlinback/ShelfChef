import React, { Component } from 'react'
import Nav from '../Navbar/Navbar';
import '../../css/App.css';
import PantryForm from '../PantryForm/PantryForm'

export default class Pantry extends Component {
  render() {
    return (
      <div className='pantry'>
        <Nav /> 
        <PantryForm />
      </div>
    )
  }
}
