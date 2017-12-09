import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon, Button, Grid, Image, Menu, Segment,  } from 'semantic-ui-react'

class TutorProfile extends Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    return (
      <div>
            <div className="studentInformation">
              {this.props.info.username} <br/>
              {this.props.info.email} <br/>
              {this.props.info.name} {this.props.info.surname} <br/>
            </div>

            <div className="studentCourses">
                <div className="displayEnrolled">
                    Your Courses:
                </div>

                 <div class="ui middle aligned divided list">
                  {this.props.courses.map(c => <div class="item"> {c.department} {c.number} </div>)}
                </div>

                <div> Add a course </div>

                <div class="ui form">
                  <div class="fields">
                      <div class="field">
                        <input type="text" placeholder="Department"/>
                      </div>
                      
                      <div class="field">
                        <input type="text" placeholder="Course Number"/>
                      </div>
                      <div class="ui submit button">Submit</div>
                  </div>
                </div>

            </div>
      </div>
    );
  }
}

export default TutorProfile; 
