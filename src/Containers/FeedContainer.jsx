import React, { Component } from 'react';
import SideBar from '../Components/SideBar'

import FeedTitle from '../Components/Feed/FeedTitle';
import Question from '../Components/Feed/Question'

class FeedContainer extends Component { 
  
  constructor(){
    super()
    this.state = {ques: []}
  }
  componentDidMount(){
    fetch('/feed/1')
    .then(res => res.json())
    .then(ques => this.setState({ques}))
  }

  render() { 
    let ques = this.state.ques
    ques = ques.map(q => <Question key={q.courses_id_courses} ques={q.courses_id_courses}/>);
     return([
     <SideBar title={<FeedTitle/>} data={ques} />,
     ]);
  }
}
export default FeedContainer;