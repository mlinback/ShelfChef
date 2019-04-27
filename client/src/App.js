import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Create from './components/pages/Create';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={Create} />
      </Container>
      </div>
      </Router>
    );
  }
}

export default App;

// // Auth0 Code:

// import React, { Component } from 'react';
// // import { Navbar, Button } from 'react-bootstrap';
// // import logo from './logo.svg';
// import './App.css';
// import Main from "./Components/Main";
// import Secret from "./Components/Secret";
// import NotFound from "./Components/NotFound";
// import Callback from './Components/Callback';

// class App extends Component {
//   // goTo(route) {
//   //   this.props.history.replace(`/${route}`)
//   // }

//   // login() {
//   //   this.props.auth.login();
//   // }

//   // logout() {
//   //   this.props.auth.logout();
//   // }

//   // componentDidMount() {
//   //   const { renewSession } = this.props.auth;

//   //   if (localStorage.getItem('isLoggedIn') === 'true') {
//   //     renewSession();
//   //   }
//   // }

//   render() {
//     // const { isAuthenticated } = this.props.auth;
//     let mainComponent = ""
//     switch(this.props.location) {
//       case "":
//         mainComponent = <Main {...this.props} />;
//         break;
//       case "callback":
//         mainComponent = <Callback />;
//         break;
//       case "secret":
//         mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
//         break;
//       default:
//         mainComponent = <NotFound />;
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src="./logo.svg" className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React, {this.props.name}</h1>
//         </header>
//         {mainComponent}
//       </div>


//       // <div>
//       //   <Navbar fluid>
//       //     <Navbar.Header>
//       //       <Navbar.Brand>
//       //         <a href="#">Auth0 - React</a>
//       //       </Navbar.Brand>
//       //       <Button
//       //         bsStyle="primary"
//       //         className="btn-margin"
//       //         onClick={this.goTo.bind(this, 'home')}
//       //       >
//       //         Home
//       //       </Button>
//       //       {
//       //         !isAuthenticated() && (
//       //             <Button
//       //               id="qsLoginBtn"
//       //               bsStyle="primary"
//       //               className="btn-margin"
//       //               onClick={this.login.bind(this)}
//       //             >
//       //               Log In
//       //             </Button>
//       //           )
//       //       }
//       //       {
//       //         isAuthenticated() && (
//       //             <Button
//       //               id="qsLogoutBtn"
//       //               bsStyle="primary"
//       //               className="btn-margin"
//       //               onClick={this.logout.bind(this)}
//       //             >
//       //               Log Out
//       //             </Button>
//       //           )
//       //       }
//       //     </Navbar.Header>
//       //   </Navbar>
//       // </div>
//     );
//   }
// }

// export default App;