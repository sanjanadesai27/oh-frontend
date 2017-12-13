import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'semantic-ui-react' ;

class Answer extends Component { 
  render() { 
     return(
       <div className="Questions">

          <div className="courseWrapper" >
              <div className="courseTitle">
                {this.props.title}
              </div>
              <div className="quesDescription">
                {this.props.ques}
              </div>
              <small> Submitted by {this.props.user} on {this.props.date} </small>
          </div>

        </div>
      );
  }
}
export default Answer;