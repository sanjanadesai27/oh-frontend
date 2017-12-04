import React, {Component}   from 'react';
import Question             from '../Components/Thread/Question.jsx';
import Answer               from '../Components/Thread/Answer.jsx';
import Sidebar              from '../Components/SideBar';
import QuestionTitle        from '../Components/Thread/QuestionTitle.jsx';

class ThreadContainer extends Component
{
    constructor()
    {
        super()
        this.state = {question: "", answers: [], error: ""};
    }

    componentDidMount()
    {
        // let token = JSON.parse(window.localStorage.getItem("userToken"));
        // let headers = new Headers();
        // headers.append("Authorization", token);
        // fetch(`/thread/${token.id}`, headers)
        fetch('/thread/1')
        .catch (error => this.setState({error: error.message}))
        // .then (res => res.json())
        .then (info => this.setState(
            {
                // answers:info[0].commentText
            }
        ))
    }

    render()

    {
        let answers = this.state.answers
        // answers = answers.map(a => <Answer key={a.courses_id_courses} answers={a.courses_id_courses}/>);
        return(
            [
                <Sidebar title={<div><Question/><Answer/></div>} data={answers} />,
                // <Question />
                // <Answer />
            ]
        );
    }
}

export default ThreadContainer;