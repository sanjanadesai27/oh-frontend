import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'semantic-ui-react' ;

class Question extends Component { 
  render() { 
     return(
       <div className="Questions">
          {/* <div className="iconWrapper">
              <Icon className="quesIcon" size="big" name="question circle outline" />
          </div> */}
          
          <div className="courseWrapper" >
              <div className="courseTitle">
                <Link to="/thread">{this.props.title}</Link>
              </div>
              <div className="quesDescription">
                {this.props.ques}
              </div>
          </div>

        </div>
      );
  }
}
export default Question;