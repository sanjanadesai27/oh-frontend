import React, { Component } from 'react';
import StudentProfile from '../Components/StudentProfile.jsx';

class StudentProfileContainer extends Component {

  constructor () {
    super();
    this.state = { 
      userInformation: {} 
    }
  }

  componentDidMount() {
    fetch('/student/1')
    .then( results => {return results.json();})
    .then (data => {
      this.setState(data)      
    })
  }

  render() {
    let userInfo = this.state.userInformation
     return([
      <StudentProfile userInformation = {userInfo} /> 
     ]);
  }

}

export default StudentProfileContainer;