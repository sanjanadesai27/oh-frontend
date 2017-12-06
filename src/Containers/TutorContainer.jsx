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

  componentDidMount() {
    fetch(`/tutor/${this.props.match.params.id}`)
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