//login handling goes here - function to pass data to server to verify login
import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm.jsx';

class LoginFormContainer extends Component { 
  //writer handlers here
  render() { 
    return(
      <LoginForm/>         
    );
  }
}

export default LoginFormContainer;