import React, { Component } from 'react';
import UserProfile from '../Components/UserProfile.jsx';
import SideBar from '../Components/SideBar';
import UserTitle from '../Components/UserTitle';

class UserProfileContainer extends Component {

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
    let d = [<UserProfile userInformation = {userInfo} />];

     return(
        <SideBar title={<UserTitle/>} data={d}/>
     )
  }

}

export default UserProfileContainer;