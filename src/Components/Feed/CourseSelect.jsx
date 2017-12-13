import React, { Component } from 'react';
import { Segment, Link, Form, Button, Container, Grid, Header, Dropdown } from 'semantic-ui-react';
import AppTitle from '../AppTitle.jsx';

const courses = [
  { key: 'comp307', text: 'COMP307', value: 'COMP 307' }, 
  { key: 'comp350', text: 'COMP350', value: 'COMP 350' },
  { key: 'comp303', text: 'COMP303', value: 'COMP 303' },
  { key: 'comp273', text: 'COMP273', value: 'COMP 273' },
  { key: 'comp421', text: 'COMP421', value: 'COMP 421' },
];

class CourseSelect extends Component {  
  constructor(){ 
    super();
    this.state={
      courses: []
    }; 
  }

  handleCourseSubmit = (e) => {
    e.preventDefault();
    this.setState({courses});
    console.log(this.state.courses);
  }

  render() { 
    return(
      <Container>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 800 }}>
            <AppTitle/>
            <Header as='h2' color='grey' textAlign='center'>
              {' '}Add your courses
            </Header>
              <Form onSubmit={this.handCourseSubmit}> 
                <Dropdown placeholder="course" name="courses" fluid multiple selection options={courses}/>
                <Form.Button content="submit"/>
              </Form> 
          </Grid.Column>
        </Grid>
      </Container> 
    );
  }


}
export default CourseSelect; 