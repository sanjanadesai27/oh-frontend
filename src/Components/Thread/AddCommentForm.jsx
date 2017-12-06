import React, { Component } from 'react';
import {Segment,Container, Icon,Button} from 'semantic-ui-react' 

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
        let textComment = document.querySelector(".AddQInput1");
        let formData = { textComment };
        fetch('/feed/question',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(formData)
        })
    }

    render() { 
        return(
         <Segment className="AddCommentFeedForm" secondary>
             <div >
                <form onSubmit={this.handleSubmit} >
                <label className = "TopLabel">
                    Comment: <br/>
                    <input className="AddQInput1" type="text" name="course"/> <br/>
                    </label><br/>
                <br/>
                </form>
             </div>
        </Segment>
      );
  }
}
export default AddCommentForm;