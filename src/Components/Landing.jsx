import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import history from './history.js';

class Home extends Component { 
  constructor(props) { 
    super(props);
    this.state = { 
      isLoggedIn : false
    }
  }
  componentWillMount() { 
    if(window.localStorage.getItem("userToken")){
      let token = JSON.parse(window.localStorage.getItem("userToken"));
      let id = JSON.parse(window.localStorage.getItem("id"));
      let header = new Headers({
        "Content-Type":"application/json",
        "Authorization":token
      });
      fetch('/authorize',{
        method: "GET",
        headers:header,
        mode: 'cors',
        cache: 'default'
      })
      .then(c=> c.json())
      .then(c =>{
          if (c.success)
          {
            this.setState({isLoggedIn : true});
            history.push(`/feed/${JSON.parse(window.localStorage.getItem('id'))}`);
          }
      });
  }
    else {
      this.handleLogin();
    }
  }

  handleLogin = () => { 
    this.props.history.push('/login');
  };

  handleRegister = () => { 
    this.props.history.push('/studentregister');
  };

  render() { 
    return( 
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: '1000px', padding: '1em 0' }}
        vertical
      >
      <Container text>
        <Header
          as='h1'
          content='OH.io'
          inverted
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3.5em'}}
        />
        <Header
          as='h2'
          content='Have a question? Get an answer.'
          inverted
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <Button primary size='huge' onClick={this.handleLogin}>
          Login
                <Icon name='right arrow' />
        </Button>
          <Button primary size='huge' onClick={this.handleRegister}>
            Register
                <Icon name='right arrow' />
          </Button>
      </Container>
    </Segment>

    );
  }
}

export default withRouter(Home);
