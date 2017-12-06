import React, { Component } from 'react';
import StudentProfile from '../Components/Student/StudentProfile';
import SideBar from '../Components/SideBar';
import UserTitle from '../Components/Student/StudentTitle';

class UserProfileContainer extends Component {

  constructor () {
    super();
    this.state = { 
      userInfo: []
    }
  }

  componentDidMount() {
    fetch(`/student/${this.props.match.params.id}`)
    .then( results => {return results.json();})
    .then (data => {
      this.setState({userInfo: data[0]})      
    })
  }

  render() {

    let userInfo = this.state.userInfo;
    let d= [<StudentProfile info="userInfo"/>];
     return(
        <SideBar title={<UserTitle/>} data={d}/>
     )
  }

}

export default UserProfileContainer;