import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import { withRouter } from 'react-router-dom';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

class Home extends Component { 

  handleLogin = () => { 
    this.props.history.push('/login');
  }

  handleRegister = () => { 
    this.props.history.push('/register');
  }

  render() { 
    return( 
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
      <Container text>
        <Header
          as='h1'
          content='OH.io'
          inverted
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
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
