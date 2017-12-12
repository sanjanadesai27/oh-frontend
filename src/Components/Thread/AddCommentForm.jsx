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
        let comment = document.querySelector('div.field.comment textarea[name="comment"]').value;
        let formData = { id, comment };
        let header = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });
        fetch('/feed/question',
        {
            headers:header,
            method: 'POST',
            body: JSON.stringify(formData)
        })
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