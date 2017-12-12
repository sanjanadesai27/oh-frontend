import React, { Component } from 'react'
import { Sidebar, Divider,Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Title from './AppTitle';

class SidebarLeftSlideAlong extends Component {
  state = { 
    visible: false,
    id: window.localStorage.getItem('id')
  }


  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  handleSignOut= () => window.localStorage.setItem("userToken",null)

  render() {
    let homeLink = `/feed/${this.state.id}`;
    let studentLink = `/student/${this.state.id}`;
    let tutorLink = `/tutor/${this.state.id}`;
    const { visible } = this.state;
    return (
      <div className="NavWrapper">
        <Button className="feedBtn" onClick={this.toggleVisibility} > 
          <Icon size="large" name="content" />
        </Button>
        <Title />
        <Sidebar.Pushable as={Container} className="mainBody">
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              <Link to={homeLink}>Home</Link>
            </Menu.Item>
            <Menu.Item name='user'>
              <Icon name='user' />
              <Link to={studentLink}>Profile</Link>
            </Menu.Item>
            <Menu.Item name='sign out'>
              <Icon name='sign out' />
              <Link to='/login' onClick={this.handleSignOut}> Sign out </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
              <Container >
                {this.props.title}
                <Divider fitted />
                {<div className="content">
                     {this.props.data.map(q => q)}
                     {this.props.btn}
                </div>}
                </Container>
              <Image src='/assets/images/wireframe/paragraph.png' />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftSlideAlong