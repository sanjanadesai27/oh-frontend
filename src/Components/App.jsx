import React, { Component } from 'react';
import history from './history.js';
import { 
  Router,
  Route, 
  Switch,
} from 'react-router-dom';
import Landing from './Landing.jsx';
import Login from './LoginForm.jsx';
import StudentRegister from './StudentRegister.jsx';
// import UserProfile from './UserProfile.jsx';
import Feed from '../Containers/FeedContainer';
import Student from '../Containers/StudentContainer';
import Thread from '../Containers/ThreadContainer';

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
    let email = document.querySelector('div.field.email input[name="email"]').value; 
    let password = document.querySelector('div.field.password input[name="password"]').value; 
    let formData = { email, password };
    fetch('/login',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then((res) => { 
      let token = res.token;
      if(token) { 
        window.localStorage.setItem("userToken", JSON.stringify(res.token));
        window.localStorage.setItem("id", res.user.id);
        this.setState({
          isLoggedIn: true,
          userId: res.user.id
         });
           history.push('/feed');
      } 
      else { 
        this.setState({ 
          loginError: "User not found"
        });
         history.push('/');
      }
    }).catch((err) => { 
      this.setState({
        loginError: "User not found"
      });
         history.push('/');
    })
  }

  registerHandler = (e) => { 
    e.preventDefault();
    let firstname = document.querySelector('div.field.firstname input[name="firstname"]').value;
    let lastname = document.querySelector('div.field.lastname input[name="lastname"]').value;
    let email = document.querySelector('div.field.email input[name="email"]').value;
    let password = document.querySelector('div.field.password input[name="password"]').value;
    let year = document.querySelector('select').value;
    let formData = { firstname, lastname, email, password, year }; 
    fetch('/createStudent',{ 
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(res => { 
      let token = res.token;
      if (token) {
        window.localStorage.setItem("userToken", JSON.stringify(res.token));
        window.localStorage.setItem("id", res.user.id);
        this.setState({
          isLoggedIn: true,
          userId: res.user.id
        });
        history.push('/feed');
      } else { 
        this.setState({ 
          loginError:"User not created"
        });
      }
    })
    .catch(err => { 
      this.setState({ 
        loginError:"User not created"
      });
    }); 
  }

  componentDidMount() { 
    if(!this.state.isLoggedIn) { 
      this.setState({
        loginError: "User not found"
      }); 
      history.push('/login');
    }
  }

  render() { 
    const LoginPage = (props) => {
      return (<Login submitHandler={this.loginHandler} loginError={this.state.loginError} /> );
    };

    const LandingPage = (props) => { 
      return (<Landing isLoggedIn={this.state.isLoggedIn} />);
    }
    const StudentRegistrationPage = (props) => { 
      return ( <StudentRegister submitHandler={this.registerHandler} /> )
    }

    return(
      <Router history={history}> 
        <Switch>
          <Route exact path="/" render={LandingPage} />
          <Route path="/login" render={LoginPage} />
          <Route path="/studentregister" component={StudentRegistrationPage} />
          {/* <Route path="/tutorregister" component={TutorRegistrationPage}/> */}
           <Route path="/feed" component={Feed}/> 

          <Route path="/student/:id" component={Student}/>
          {/* <Route path="/tutor/:id" component={User}/> */}

          <Route path="/thread/:quesId" component={Thread}/>
        </Switch> 
      </Router> 
    );
  }
}
export default App;