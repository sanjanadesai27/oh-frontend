
import React, { Component } from 'react';
import { Header, Icon, Button, Grid, Image, Menu, Segment } from 'semantic-ui-react';

class TutorTitle extends Component {

  render() {
    return(
      <div className = "UserTitle">
            <Header as='h2' icon>
            <Icon name='settings' />
            Account Settings
            <Header.Subheader>
            Manage your account settings
            </Header.Subheader>
          </Header>
    </div>
    );
  }
}
export default TutorTitle;