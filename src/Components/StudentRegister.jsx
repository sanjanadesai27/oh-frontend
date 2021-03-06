import React, { Component } from 'react';
import { Grid, Header, Form, Message, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppTitle from './AppTitle'

class StudentRegister extends Component {
  render() {
       return (
    <div className="initial-form">
      <AppTitle />
      <style>
          {`
        body > div,
        body > div > div,
        body > div > div > div.initial-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header as='h2' color='grey' textAlign='center'>
              {' '}Create a Student Account
          </Header>
            <Form size='large' onSubmit={this.props.submitHandler}>
                <Form.Group widths="equal"> 
                <Form.Input
                  fluid
                  iconPosition='left'
                  placeholder='First Name'
                  className="firstname"
                  name="firstname"
                />
                <Form.Input
                  fluid
                  iconPosition='left'
                  placeholder='Last Name'
                  className="lastname"
                  name="lastname"
                />
                <Form.Input
                  fluid
                  iconPosition='left'
                  placeholder='username'
                  className="username"
                  name="username"
                />
                <select className="ui dropdown">
                  <option value="U0">U0</option>
                  <option value="U1">U1</option>
                  <option value="U2">U2</option>
                  <option value="U3">U3</option>
                  <option value="U4">U4</option>
                </select>
                </Form.Group>
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
                <Form.Button color='blue' fluid size='large'>Register</Form.Button>
            </Form>
            <Message>
              Already have an account? <Link to='/login'>Login!</Link> Are you a tutor? <Link to='/tutorregister'> Register as a tutor</Link> 
            </Message>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}
export default StudentRegister; 
