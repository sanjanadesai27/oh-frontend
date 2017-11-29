import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Components/Home.jsx';


class HomeContainer extends Component { 
  render() { 
    return(
      <div> 
        <Route exact path="/" component={Home} />
      </div> 
    );
  }
}
export default HomeContainer; 

//TODO: Add logic to check whether or not user is logged in to determine which page to show - i.e. main feed vs login register page