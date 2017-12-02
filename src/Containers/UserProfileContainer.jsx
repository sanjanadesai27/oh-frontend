import React, { Component } from 'react';

import UserProfile from '../Components/UserProfile.jsx';

class UserProfileContainer extends Component {

  constructor () {
    super();
    this.state = { userInformation: {} }
  }

  // componentDidMount() {
  //   fetch('/student/1')
  //   .then( results => {return results.json();})
  //   .then (data => {
  //     this.setState(data)      
  //   })
  // }

  render() {
    return (
      <UserProfile />
    );
  }
//   render() {
//     let userInfo = this.state.userInformation
//      return([
//       <Profile userInformation = {userInfo} /> 
//      ]);
//   }

}

export default UserProfileContainer;
