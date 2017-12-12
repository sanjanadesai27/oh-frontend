import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'semantic-ui-react' ;

class Question extends Component { 
  render() { 
    let path = `/thread/${this.props.id}`;
     return(
       <div className="Questions">
          <div className="courseWrapper" >
              <div className="courseTitle">
                <Link to={path}> {this.props.title} </Link>
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
export default Question;