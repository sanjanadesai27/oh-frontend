import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Components/Landing.jsx';
import Login from '../Containers/LoginFormContainer.jsx';


class LandingContainer extends Component { 


  render() { 
    return(
      <div> 
        <Landing/>
      </div> 
    );
  }
} 
export default LandingContainer; 

//TODO: Add logic to check whether or not user is logged in to determine which page to show - i.e. main feed vs login register page