import React, { Component } from 'react';

class Question extends Component { 
  render() { 
     return(
       <div className="Questions">
       
          <div className="courseTitle">
             {this.props.title}
          </div>

          <div className="quesDescription">
            <p>{this.props.ques}</p>
          </div>

        </div>
      );
  }
}
export default Question;