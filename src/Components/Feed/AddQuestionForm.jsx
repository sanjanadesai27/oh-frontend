import React, { Component } from 'react';
import {Segment,Container, Icon,Button, Form} from 'semantic-ui-react' 

const options = [ { key:"1" , text:"COMP307", value:"COMP307" },
                  { key:"2" , text:"COMP303", value:"COMP303" }, 
                  { key: "1", text: "COMP273", value: "COMP273" }];
//note these are just place holder values - they need to be dynamically rendered based on the courses
//that any student is in. -- fetch data from database


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
        <Form onSubmit={this.handleSubmit}> 
            <Form.Dropdown label="Course" options={options} placeholder="course" />
            <Form.TextArea label='Question' placeholder=' i.e. "What is the difference between IP & TCP?' />
            <Button type="submit" className="questionSubmit">Submit</Button> 
        </Form>
            
             {/* <div >
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
             </div> */}
        </Segment>
      );
  }
}
export default AddQuestionForm;