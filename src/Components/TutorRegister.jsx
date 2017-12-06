import React, { Component } from 'react';
import { Grid, Header, Form, Message, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppTitle from './AppTitle'

class TutorRegister extends Component {
  render() {
    return (
      <div>
        <AppTitle />
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
            <Grid.Column style={{ maxWidth: 800 }}>
              <Header as='h2' color='blue' textAlign='center'>
                {' '}Create a Tutor Account
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
                Already have an account? <Link to='/login'>Login!</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
export default StudentRegister; 
