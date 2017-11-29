import React, { Component } from 'react';




class Home extends Component { 
  render() { 
    return( 
      <div className="container-fluid">
        <h1 className="text-center">Welcome to OH.io</h1>
        <div className="row justify-content-between">   
          <div className="col-4">
            <button className="btn btn-primary">Login</button> 
          </div> 
          <div className="col-4"> 
            <button className="btn btn-primary">Register</button> 
          </div> 
        </div> 
      </div> 
    );
  }
}


export default Home;
