import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home.jsx';
import Login from '../Containers/LoginFormContainer.jsx';


class HomeContainer extends Component { 

  constructor() { 
    super(); 
    this.state = { isModalOpen : false };
  } 

  handleModal = () => { 
    this.setState({ 
      isModalOpen: !this.state.isModalOpen
    });
  }
  
  render() { 
    return(
      <div> 
        <Home handleModal={this.handleModal} show={this.state.isModalOpen}/>
        {/* <Switch> 
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/> 
          <Route path="/register" component={Register}/> 
          <Route path="/feed" component={MainFeed}/> 
          <Route path="/question/:id" component={Question}/> 
          <Route path="/user/:id" component={User}/>
        </Switch> */}
      </div> 
    );
  }
} 
export default HomeContainer; 

//TODO: Add logic to check whether or not user is logged in to determine which page to show - i.e. main feed vs login register page