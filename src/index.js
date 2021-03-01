import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap-4.3.1-dist/css/bootstrap.css';
//import UserForm from './Form.js';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { BrowserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');

ReactDOM.render(
   <BrowserRouter basename={'/'}>
     <App />
   </BrowserRouter>

  , rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
