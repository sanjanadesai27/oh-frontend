import React, { Component } from 'react';
import {Segment,Container, Icon,Button, Form, Label} from 'semantic-ui-react';

class AddQuestionForm extends Component { 
    
    constructor(){
        super()
        this.state = {
          course:[],
          question:[]
      }
    }

    render() { 
        return(
        <Segment className="AddQuestionFeedForm">
            <Form className="AddQuestionFeedForm"onSubmit={this.props.f}> 
                <Label>Course</Label>
                    <select label= "course" className="ui dropdown">
                        {this.props.courses.map(course => <option value={course}>{course}</option>)}
                    </select>
                <Label>Question</Label>
                <Form.TextArea className="question" name="question" placeholder=' i.e. "What is the difference between IP & TCP?' />
                <Button type="submit" className="questionSubmit">Submit</Button> 
            </Form>
        </Segment>
      );
  }
}
export default AddQuestionForm;