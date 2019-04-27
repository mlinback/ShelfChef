import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Auth0 Code:

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import Auth from "./Auth";

// const auth = new Auth();

// let state = {};
// window.setState = (changes) => {
//   state = Object.assign({}, state, changes);

// ReactDOM.render(<App {...state} />, document.getElementById('root'));

// };

// /*eslint no-restricted-globals: 0*/
// let username = auth.getProfile().given_name || "Marissa";

// let initialState = {
//   name: username,
//   location: location.pathname.replace(/^\/?|\/$/g, ""),
//   auth
// };

// window.setState(initialState);

// registerServiceWorker();
