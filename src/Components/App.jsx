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
import TutorRegister from './TutorRegister.jsx'
import Feed from '../Containers/FeedContainer';
import Student from '../Containers/StudentContainer';
import Thread from '../Containers/ThreadContainer';
import CourseSelect from './Feed/CourseSelect.jsx';

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
        window.localStorage.setItem("username", res.user.username);
        window.localStorage.setItem("isStudent", true);
        this.setState({
          isLoggedIn: true,
          userId: res.user.id
         });
           history.push(`/feed/${this.state.userId}`);
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

  studentRegisterHandler = (e) => { 
    e.preventDefault();
    let name = document.querySelector('div.field.firstname input[name="firstname"]').value;
    let surname = document.querySelector('div.field.lastname input[name="lastname"]').value;
    let username = document.querySelector('div.field.username input[name="username"]').value;
    let email = document.querySelector('div.field.email input[name="email"]').value;
    let password = document.querySelector('div.field.password input[name="password"]').value;
    let year = document.querySelector('select').value;
    let bool = true;
    let formData = { name, surname, username, email, password, year, bool }; 
    console.log(formData);
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
        window.localStorage.setItem("username", res.user.username);
        this.setState({
          isLoggedIn: true,
          userId: res.user.id
        });
        // history.push(`/feed/${this.state.userId}`);
        history.push('/courses');
        
      } else { 
        this.setState({ 
          loginError:"User not created"
        });
        history.push('/');
      }
    })
    .catch(err => { 
      this.setState({ 
        loginError:"User not created"
      });
    }); 
  }

  tutorRegisterHandler = (e) => { 
    e.preventDefault();
    let name = document.querySelector('div.field.firstname input[name="firstname"]').value;
    let surname = document.querySelector('div.field.lastname input[name="lastname"]').value;
    let username = document.querySelector('div.field.username input[name="username"]').value;
    let email = document.querySelector('div.field.email input[name="email"]').value;
    let password = document.querySelector('div.field.password input[name="password"]').value;
    let bool = false;
    let formData = { name, surname, username, email, password, bool }; 
    console.log(formData);
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
        window.localStorage.setItem("username", res.user.username);
        window.localStorage.setItem("isStudent",false);
        this.setState({
          isLoggedIn: true,
          userId: res.user.id
        });
        history.push(`/feed/${this.state.userId}`);
        
      } else { 
        this.setState({ 
          loginError:"User not created"
        });
        history.push('/');
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
      history.push('/');
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
      return ( <StudentRegister submitHandler={this.studentRegisterHandler} /> )
    }

    const TutorRegistrationPage = (props) => { 
      return ( <TutorRegister submitHandler={this.tutorRegisterHandler} /> )
    }

    // const CourseSelectionPage = (props) => { 
    //   return <CourseSelect submitHandler={this.handleCourseSubmit}/>
    // }

    return(
      <Router history={history}> 
        <Switch>
          <Route exact path="/" render={LandingPage} />
          <Route path="/login" render={LoginPage} />
          <Route path="/studentregister" component={StudentRegistrationPage} />
<<<<<<< HEAD
          {/* <Route path="/tutorregister" component={TutorRegistrationPage}/> */}
          <Route path="/feed/:id" component={Feed}/> 
          <Route path="/courses" component={CourseSelect}/>
          <Route path="/student/:id" component={Student}/>
=======
          <Route path="/tutorregister" component={TutorRegistrationPage}/>
           <Route path="/feed/:id" component={Feed}/> 

          <Route path="/profile/:id" component={Student}/>
>>>>>>> 0023e9fb59420dfa24cb9bd2e31fa710b915c577
          {/* <Route path="/tutor/:id" component={User}/> */}

          <Route path="/thread/:quesId" component={Thread}/>
        </Switch> 
      </Router> 
    );
  }
}
export default App;