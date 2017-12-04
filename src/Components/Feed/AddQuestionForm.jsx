import React, { Component } from 'react';
import {Segment,Container, Icon,Button} from 'semantic-ui-react' 

class AddQuestionForm extends Component { 
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
        let courseName = document.querySelector(".AddQInput1");
        let question = document.querySelector(".AddQInput2");
        let formData = { courseName, question };
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
         <Segment className="AddQuestionFeedForm" secondary>
             <div >
                <form onSubmit={this.handleSubmit} >
                <label className = "TopLabel">
                    Course: <br/>
                    <input className="AddQInput1" type="text" name="course"/> <br/>
                    </label><br/>
                    Question: <br/>
                    <input className="AddQInput2"  type="text" name="question"  /> <br/><br/>
                <input type="submit" value="Submit" />
                <br/>
                </form>
             </div>
        </Segment>
      );
  }
}
export default AddQuestionForm;