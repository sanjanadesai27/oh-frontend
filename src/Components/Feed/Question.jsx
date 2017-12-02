import React, { Component } from 'react';

class Question extends Component { 
  render() { 
     return(
       <div className="Questions">
          <div className="courseTitle">
              Course
          </div>
          <div className="quesTitle">
              Question Title
          </div>
          <div className="quesDescription">
            <p>Description</p>
          </div>
        </div>
      );
  }
}
export default Question;