import React, { Component } from 'react';
import { Form, Segment, Button, Message, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const options = [ 
  {key: 'U0', text: 'U0', value: 'U0'},
  { key: 'U1', text: 'U1', value: 'U1' },
  { key: 'U2', text: 'U2', value: 'U2' },
  { key: 'U3', text: 'U3', value: 'U3' },
  { key: 'U4', text: 'U4', value: 'U4' }
];

class StudentRegister extends Component {
  render() {

     return (
      <div className='login-form'>
        <style>{`
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
              {' '}Create your account
            </Header>
            <Form size='large'>
              <Form.Group widths='equal'>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Last name' placeholder='Last name' />
                <Form.Select options={options} placeholder='U0'/> 
              </Form.Group>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  className="email"
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  className="password"
                />
                <Form.Button color='blue' fluid size='large'>Register</Form.Button>
            </Form>
            <Message>
              Already have an account? <Link to='/login'>Login!</Link>
            </Message>
          </Grid.Column>
        </Grid>
    </div> 
    );
  }
}
export default StudentRegister; 