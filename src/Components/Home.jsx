import React, { Component } from 'react';
import LoginForm from '../Containers/LoginFormContainer';
// import { Link } from 'react-router-dom';

class Home extends Component { 
  render() { 
    return( 
      <div className="container-fluid">
        <h1 className="text-center">Welcome to OH.io</h1>
        <div className="row justify-content-center">   
          <div className="col-6">
            <button className="btn btn-primary" type="button" onClick={this.props.handleModal}>Login</button> 
          </div> 
          <LoginForm closeModal={this.props.handleModal} show={this.props.show}/> 
          <div className="col-6"> 
            <button className="btn btn-primary" type="button">Register</button> 
          </div> 
        </div> 
      </div> 
    );
  }
}


export default Home;
