import React, { Component } from 'react';


class LoginForm extends Component { 
  render() { 
    return( 
    <div className="form-inline"> 
      <h2>Login</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="email"
        /> 
        <input
          className="form-control"
          type="password"
          placeholder="password"
        /> 
        <button
          className="btn btn-primary"
          type="button"
        /> 
      </div>      
      
    </div> 
    );
    }
  }
export default LoginForm; 
