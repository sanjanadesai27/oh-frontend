import React, { Component } from 'react';
import {Segment,Container, Icon,Button, Form, Label} from 'semantic-ui-react';
import history from '../history';

class AddQuestionForm extends Component { 
    
    constructor(){
        super();
        this.state = {
          course:[],
          question:[],
      }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let token = JSON.parse(window.localStorage.getItem("userToken"));
        let id = JSON.parse(window.localStorage.getItem('id'));
        let courseName = document.querySelector("select").value;
        let question = document.querySelector('div.field.question textarea[name="question"]').value;
        let username = window.localStorage.getItem("username");

        let formData = { id, courseName, question, username };

        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });
        fetch('/feed/question',
        {
            headers:header,
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'cors',
            cache: 'default'
        })
        .then(window.location.reload())
      }

    render() { 
        return(
        <Segment className="AddQuestionFeedForm">
            <Form className="AddQuestionFeedForm"onSubmit={this.handleSubmit}> 
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