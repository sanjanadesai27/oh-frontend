import React, { Component } from 'react';
import {Segment,Container, Icon,Button,Form, Label} from 'semantic-ui-react' 

class AddCommentForm extends Component { 
    constructor(){
        super()
        this.state = {
          course:[],
          question:[]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let token = JSON.parse(window.localStorage.getItem("userToken"));
        let id = JSON.parse(window.localStorage.getItem('id'));

        let isStudent = true;
        let quesId = this.props.questionId;
        let comment = document.querySelector('div.field.comment textarea[name="comment"]').value;
        let username = window.localStorage.getItem("username");
        let formData = { id, comment, isStudent,quesId,username };
        console.log(formData);
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });
        fetch('/thread/comment/',
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
         <Segment className="AddCommentFeedForm" secondary>
            <Form className="addComment" onSubmit={this.handleSubmit}>
                <Label>Add a reponse</Label>
                <Form.TextArea className="comment" name="comment" placeholder="Submit your response here"/>
                <Button type="submit">Submit</Button>
            </Form>
        </Segment>
      );
  }
}
export default AddCommentForm;