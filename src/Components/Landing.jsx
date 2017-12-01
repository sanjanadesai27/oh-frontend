import React, { Component } from 'react';
import LoginForm from '../Containers/LoginFormContainer';
import { withRouter } from 'react-router-dom';

class Home extends Component { 

  handleLogin = () => { 
    this.props.history.push('/login');
  }

  handleRegister = () => { 
    this.props.history.push('/register');
  }

  render() { 
    return( 
      <div className="container-fluid">
        <h1 className="text-center">Welcome to OH.io</h1>
        <div>   
          <div className="col-6">
            <button className="btn btn-primary" type="button" onClick={this.handleLogin}>Login</button> 
          </div> 
          <div className="col-6"> 
            <button className="btn btn-primary" type="button" onClick={this.handleRegister}>Register</button> 
          </div> 
        </div> 
      </div> 
    );
  }
}



export default withRouter(Home);
