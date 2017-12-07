import React, { Component } from 'react';
import StudentProfile from '../Components/Student/StudentProfile';
import SideBar from '../Components/SideBar';
import UserTitle from '../Components/Student/StudentTitle';
import history from '../Components/history'
class UserProfileContainer extends Component {

  constructor () {
    super();
    this.state = {
      isLoggedIn:false,
      userInfo: []
    }
  }

  componentWillMount() {
    let token = JSON.parse(window.localStorage.getItem("userToken"));
    let id = JSON.parse(window.localStorage.getItem("id"));
    let header = new Headers({
        "Content-Type":"application/json",
        "Authorization":token
      });
    fetch(`/student/${this.props.match.params.id}`,{
        method: "GET",
        headers:header,
        mode: 'cors',
        cache: 'default'
    })
    .then( results => {return results.json();})
    .then (data => {
      this.setState({isLoggedIn:true, userInfo: data[0]})      
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