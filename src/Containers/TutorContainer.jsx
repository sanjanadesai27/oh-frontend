import React, { Component } from 'react';
import TutorProfile from '../Components/Tutor/TutorProfile';
import SideBar from '../Components/SideBar';
import UserTitle from '../Components/Tutor/TutorTitle';

class TutorContainer extends Component {

  constructor () {
    super();
    this.state = { 
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
    fetch(`/tutor/${this.props.match.params.id}`,
    {
      method: "GET",
      headers:header,
      mode: 'cors',
      cache: 'default'
    })
    .then( results => {return results.json();})
    .then (data => {
      this.setState({ userInfo: data[0] })      
    })
  }

  render() {

    let userInfo = this.state.userInfo;
    let d = [<TutorProfile info="userInfo" />];
     return(
        <SideBar title={<TutorTitle/>} data={d}/>
     )
  }

}

export default TutorContainer;