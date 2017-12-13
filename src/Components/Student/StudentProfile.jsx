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
                You are registered in:
            </div>
              <List>
                {this.props.courses.map(course => <List.Item>{course.department} {course.number}</List.Item>)}
              </List>
            </Segment>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default TutorProfile; 
