import React, { Component } from 'react';
import EditStudentContainer from '../Components/EditStudent.jsx';

class EditStudentContainer extends Component {

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
      <EditStudent userInformation = {userInfo} /> 
     ]);
  }

}

export default EditStudentContainer;