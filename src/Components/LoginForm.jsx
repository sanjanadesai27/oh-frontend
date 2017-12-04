import React, { Component } from 'react';
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends Component {  

  render() { 
    return(
    <div className='login-form'>
    <style>
      {`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          {' '}Login to your account
          </Header>
        <Form size='large' onSubmit={this.props.submitHandler}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              className="email"
              name="email"
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              className="password"
              name="password"
            />
            <Form.Button color='blue' fluid size='large'>Login</Form.Button>
          </Segment>
        </Form>
            <Message>
              New to us? <Link to='/studentregister'>Register!</Link>
            </Message>
      </Grid.Column>
    </Grid>
  </div>
    );
    }
  }
export default withRouter(LoginForm); 
