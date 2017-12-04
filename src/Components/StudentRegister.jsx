import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Message, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const options = [
  { key: 'U0', text: 'U0', value: 'U0'},
  { key: 'U1', text: 'U1', value: 'U1'},
  { key: 'U2', text: 'U2', value: 'U2'},
  { key: 'U3', text: 'U3', value: 'U3'},
  { key: 'U4', text: 'U4', value: 'U4'}
];


class StudentRegister extends Component {
  render() {
       return (
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
              {' '}Create an Account
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
                <Form.Field control={Select}  options={options} placeholder="Year"/> 
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
      {/* <Segment>
      <div>
      <h2>Register!</h2>  
      <form onSubmit={this.props.submitHandler} className='registration' style={styles}>
        <label>Firstname</label>
        <input type="text" className="firstname" placeholder='firstname'/>
        <label>Lastname</label>
        <input type='text' className='lastname' placeholder='lastname'/> 
        <br/> 
        <label>Email</label>
        <input type='email' className='email' placeholder='email'/>
        <label>Password</label>
        <input type='password' className='password' placeholder='password' />
        <br/> 
         <select name="year">
           <option value="U0">U0</option>
           <option value="U1">U1</option>
           <option value="U2">U2</option>
           <option value="U3">U3</option>
           <option value="U4">U4</option>
         </select>
         <button type="submit" className="studentRegButton">Submit</button>
      </form> 
      </div>
      </Segment> */}
       </div>
    );
  }
}
export default StudentRegister; 
