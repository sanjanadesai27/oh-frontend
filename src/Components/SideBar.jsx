import React, { Component } from 'react'
import { Sidebar, Divider,Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Title from './AppTitle';

class SidebarLeftSlideAlong extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="NavWrapper">
        <Button className="feedBtn" onClick={this.toggleVisibility} > 
        <Icon size="large" name="content" />
        </Button>
        <Title />
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='user'>
              <Icon name='user' />
              Your Profile
            </Menu.Item>
            <Menu.Item name='sign out'>
              <Icon name='sign out' />
              Sign Out
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'></Header>
              <Segment >
                {this.props.title}
        
                <Divider fitted />
                {<div>
                     {this.props.data.map(q => q)}
                </div>}
                </Segment>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftSlideAlong