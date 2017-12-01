//login handling goes here - function to pass data to server to verify login
import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm.jsx';

class LoginFormContainer extends Component { 
  //writer handlers here
  render() { 
    return(
      <LoginForm handleModal={this.props.handleModal} show={this.props.show}/>         
    );
  }
}

export default LoginFormContainer;