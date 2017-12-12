import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, List, Segment, Form } from 'semantic-ui-react';

class TutorProfile extends Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    return (
      <div>
        <Segment.Group> 
          <Segment className="studentInformation">
              Username: {this.props.info.username} <br/>
              Email: {this.props.info.email} <br/>
              Full Name: {this.props.info.name} {this.props.info.surname}
            <Segment className="courses">
              <div className="displayEnrolled">
                Your Courses:
            </div>
              <List>
                {this.props.courses.map(course => <List.Item>{course.department} {course.number}</List.Item>)}
              </List>
            </Segment>
          </Segment>
          <Segment>
            <Form className="addCoursesForm"> 
            <div>Add a course:</div>
              <Form.Group widths="equal"> 
                <Form.Input label="Department" placeholder="i.e. COMP"/>
                <Form.Input label="Course Number" placeholder="i.e. 303"/>
              </Form.Group> 
              <Button type="submit">Submit</Button>
            </Form> 
          </Segment> 
        </Segment.Group>
      </div>
    );
  }
}

export default TutorProfile; 
