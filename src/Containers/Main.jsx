import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './LandingContainer';
import Login from './LoginFormContainer';
import Register from './RegisterContainer';
import Feed from './FeedContainer';

class Main extends Component { 
  render() { 
    return( 
      <Switch> 
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/> 
        <Route path="/register" component={Register}/> 
        
        <Route path="/feed" component={Feed}/>

         {/* 
              <Route path="/question/:id" component={Question}/> 
              <Route path="user/:id" component={User}/>  
         */}

      </Switch>
    );
  }
  
}
export default Main; 
