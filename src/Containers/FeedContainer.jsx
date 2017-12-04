import React, { Component } from 'react';
import SideBar from '../Components/SideBar'
import FeedTitle from '../Components/Feed/FeedTitle';
import Question from '../Components/Feed/Question'

class FeedContainer extends Component { 
  constructor(){
    super()
    this.state = {
      student:[],
      questions:[],
      courses:[],
      error:""};
  }
  componentDidMount(){
    let token = JSON.parse(window.localStorage.getItem("userToken"));
    let headers = new Headers();
    headers.append("Authorization", token);
    fetch(`/feed/${token.id}`,headers)
    .catch(error => this.setState({error:error.message}))
    .then(res => res.json())
    .then(info => this.setState({
      student:info[0],
      questions:((info[0]).courses.map(x => x.questions)).reduce((a,b)=>a.concat(b)),
      courses:(info[0].courses).map(x => [x.id_courses,""+x.department+" "+ x.number])
    }))
  }
  render() { 
    //get student record
    let courses= this.state.courses;
    console.log(courses);
    let student = this.state.student;
    let questions = this.state.questions;
    let checkId = function(x){
      for(var i=0; i<courses.length; i++){
        if (courses[i][0]===x)
        {
        return courses[i][1];
        }
      }
    }
    questions = questions.map(q => <Question key={q.id_questions} ques={q.questionText} title={ checkId(q.courseIdCourses) } />);
     
    return([
     <SideBar title={<FeedTitle/>} data={questions}  />,
     ]);

  }
}
export default FeedContainer;