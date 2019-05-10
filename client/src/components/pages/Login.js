import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Form from '../Form/From';
import Container from 'react-bootstrap/Container';
import Navbar from '../Navbar/Navbar.js';
import '../../css/App.css';



export default class Login extends Component {
  render() {
    return (
      <div className = 'login'>
        <Navbar />
        {/* <Container />
        <Jumbotron /> */}
        <div id='ShelfLogo' />
        <Form /> 
      </div>
    )
  }
}

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// // import Navbar from '../Navbar/Navbar.js';
// import '../../css/App.css';

// const FormPage = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h5 text-center mb-4">Sign in</p>
//             <div className="grey-text">
//               <MDBInput
//                 label="Type your email"
//                 icon="envelope"
//                 group
//                 type="email"
//                 validate
//                 error="wrong"
//                 success="right"
//               />
//               <MDBInput
//                 label="Type your password"
//                 icon="lock"
//                 group
//                 type="password"
//                 validate
//               />
//             </div>
//             <div className="text-center">
//               <MDBBtn>Login</MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormPage;