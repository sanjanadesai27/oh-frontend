import React, { Component } from 'react';
import EditProfileContainere from '../Components/EditProfile.jsx';

class EditProfileContainer extends Component {

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
      <EditProfile userInformation = {userInfo} /> 
     ]);
  }

}

export default EditProfileContainer;