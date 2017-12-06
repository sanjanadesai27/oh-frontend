import React, { Component } from 'react';
import SideBar from '../Components/SideBar';
import FeedTitle from '../Components/Feed/FeedTitle';
import Question from '../Components/Feed/Question';
import AddQuestion from '../Components/Feed/AddQuestion';
import {withRouter } from 'react-router-dom';

class FeedContainer extends Component { 
  constructor(){
    super()
    this.state = {
      id:[],
      student:[],
      questions:[],
      courses:[],
      error:""};
  }
  componentDidMount(){
    let token = JSON.parse(window.localStorage.getItem("userToken"));
    let id = JSON.parse(window.localStorage.getItem("id"));
    this.setState({id:id})
    let headers = new Headers();
    headers.append("Authorization", token);
    fetch(`/feed/${id}`,headers)
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
    questions = questions.map(q => <Question key={q.id_questions} id={q.id_questions} ques={q.questionText} title={ checkId(q.courseIdCourses) } />);
    questions.push(<AddQuestion />)
    return([
     <SideBar title={<FeedTitle/>} data={questions}/>,
     ]);

  }
}
export default withRouter(FeedContainer);