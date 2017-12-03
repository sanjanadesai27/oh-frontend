import React, { Component } from 'react';
import { 
  HashRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import Landing from './Landing.jsx';
import Login from './LoginForm.jsx';
import Register from './Register.jsx';
import UserProfile from './UserProfile.jsx';
import Feed from '../Containers/FeedContainer';
import EditProfile from './EditProfile.jsx';

class App extends Component { 
  
  constructor() { 
    super();
    this.state = { 
      isLoggedIn: false,
      userId: null,
      loginError: '',

    }
  }

  loginHandler = (e) => { 
    e.preventDefault();
    let email = document.querySelector(".email").value; 
    let password = document.querySelector(".password").value; 
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    fetch('/login',{
      method: 'POST',
      body: formData,
    })
    .then((res) => { 
      res = JSON.parse(res)
      if(res.token) { 
        window.localStorage.setItem("userToken", JSON.stringify(res.token)); //storing token in local storage
        this.setState({
          isLoggedIn: true
          // userId: token.id
        });
        <Redirect to='/feed'/>
      } else { 
        this.setState({ 
          loginError: "User not found"
        });
        <Redirect to="/login"/> 
      }
    }).catch((err) => { 
      this.setState({
        loginError: "User not found"
      });
      <Redirect to="/login" /> 
    })
  }

  componentDidMount() { 
    if(!this.state.isLoggedIn) { 
      this.setState({
        loginError: "User not found"
      });
      <Redirect to="/login"/> 
    }
  }

  render() { 
    const LoginPage = (props) => {
      return (<Login submitHandler={this.loginHandler} loginError={this.state.loginError} /> );
    };

    const LandingPage = (props) => { 
      return (<Landing isLoggedIn={this.state.isLoggedIn} />);
    }

    return(
      <Router> 
        <Switch>
          <Route exact path="/" render={LandingPage} />
          <Route path="/login" render={LoginPage} />
          <Route path="/register" component={Register} />
           <Route path="/feed" component={Feed}/> 
        {/* <Route path="/question/:id" component={Question}/>  */}
        <Route path="/user" component={UserProfile}/>
        <Route path="/edit" component={EditProfile}/> 
        </Switch> 
      </Router> 
    );
  }
}

export default App;