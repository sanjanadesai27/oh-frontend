import React, { Component } from 'react';
import { 
  Route, 
  Switch
} from 'react-router-dom';

import Login from '../Containers/LoginFormContainer';
import Main from '../Containers/Main.jsx';

class App extends Component { 
  render() { 
    return(
      <Main/>
    );
  }
}
export default App;