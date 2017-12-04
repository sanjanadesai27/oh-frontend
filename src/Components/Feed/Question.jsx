import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react' 

class Question extends Component { 
  render() { 
     return(
       <div className="Questions">
          {/* <div className="iconWrapper">
              <Icon className="quesIcon" size="big" name="question circle outline" />
          </div> */}
          
          <div className="courseWrapper" >
              <div className="courseTitle">
                {this.props.title}
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