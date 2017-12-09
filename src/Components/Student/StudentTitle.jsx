
import React, { Component } from 'react';
import { Header, Icon, Button, Grid, Image, Menu, Segment } from 'semantic-ui-react';

class UserTitle extends Component {

  render() {
    return(
      <div className = "UserTitle">
            <Header as='h2' icon>
            Your Profile
            <Header.Subheader>
            Manage your settings
            </Header.Subheader>
          </Header>
    </div>
    );
  }
}
export default UserTitle;