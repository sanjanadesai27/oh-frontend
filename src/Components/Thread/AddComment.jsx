import React, { Component } from 'react';
import {Icon,Button} from 'semantic-ui-react' 
import AddCommentForm from './AddCommentForm'

class AddComment extends Component { 
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
        <div className="AddCommentFeed">
            <Button onClick={this.toggle} content='Add Comment' color="blue" />
       </div>,
        <AddCommentForm questionId={this.props.questionId} />
      ]
      );
     }
     return(
       <div className="AddCommentFeed">
           <Button onClick={this.toggle} content='Add Comment' color="blue" />
      </div>
    );
  }
}
export default AddComment;