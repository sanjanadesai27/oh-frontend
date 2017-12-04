
import React, { Component } from 'react';
import { Header, Icon, Button, Grid, Image, Menu, Segment } from 'semantic-ui-react';
import UserProfile from '../Components/UserProfile.jsx';
import SideBar from '../Components/SideBar';

class UserTitle extends Component {

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
    return(<Header as='h2' icon>
    <Icon name='settings' />
      Account Settings
    <Header.Subheader>
      Manage your account settings
    </Header.Subheader>
    </Header>);
  }
}
export default UserTitle;