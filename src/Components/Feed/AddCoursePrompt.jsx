import React, { Component } from 'react';
import {Icon,Button} from 'semantic-ui-react'; 
import { Link } from 'react-router-dom';

class AddCoursePrompt extends Component { 
  render() { 
    let id = JSON.parse(window.localStorage.getItem("id"));
    let linkToCourses = `/student/${id}`;
     return(
       <div className="coursePrompt">
           <Link to={linkToCourses}> Add Courses Here </Link>
      </div>
    );
  }
}
export default AddCoursePrompt;