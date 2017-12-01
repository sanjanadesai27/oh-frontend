import React, { Component } from 'react';
import { 
  Route, 
  Switch
} from 'react-router-dom';
import Login from '../Containers/LoginFormContainer';
import Home from '../Containers/HomeContainer.jsx';

class App extends Component { 
  render() { 
    return(
      // <Home/>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} />
        <Route path="/feed" component={MainFeed} />
        <Route path="/question/:id" component={Question} />
        <Route path="/user/:id" component={User} /> */}
      </Switch>
    );
  }
}
export default App;