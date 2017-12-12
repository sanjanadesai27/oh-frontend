import React, { Component } from 'react';
import {Icon,Button} from 'semantic-ui-react' 
import AddQuestionForm from './AddQuestionForm'

class AddQuestion extends Component { 
  constructor() { 
    super();
    this.state = { 
        active:false
      }
  } 
  toggle = () => this.setState({active: !this.state.active})
  render() { 
    if (this.state.active)
    {
      return([
        <div className="AddQuestionFeed">
            <Button onClick={this.toggle} content='Add Question' color="blue" />
       </div>,
        <AddQuestionForm f={this.props.f} courses={this.props.courses} />
      ]
      );
     }
     return(
       <div className="AddQuestionFeed">
           <Button onClick={this.toggle} content='Add Question' color="blue" />
      </div>
    );
  }
}
export default AddQuestion;