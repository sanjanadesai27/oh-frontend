import React, {Component} from 'react';
import QuestionTitle from './QuestionTitle.jsx';
class Question extends Component
{
    render()
    {
        var test =
        {
            title    : "Arrays",
            day      : "01",
            month    : "January",
            year     : "2018",
            course   : "COMP 202",
            asked_by : "John Doe",
            TAs      : ["Bob", "Mary"],
            body     : "What is an array?",
            tags     : ["array", "Java", "data structures"]
        }
        let questionId = this.props.key;
        let question = this.props.ques;
        
        return(
            <div className="question">
                {/* <h2 className="qtitle">{test.title}</h2> */}
                <QuestionTitle/>
                <small className="small">
                on {test.month} {test.day}, {test.year} in <a href="#">{test.course}</a> by <a href="#">{test.asked_by}</a>
                    <br/>
                    Assigned TA(s) for this course: {test.TAs[0]}, {test.TAs[1]}
                </small>
                <br/>
                <p className="qbody">{test.body}</p>
                <br/>
                <p className="qbody">{question}</p>
                <br/>
                <hr/>
                <br/>
                <h3 className="atitle">Answers:</h3>
            </div>
        );
    }
}

export default Question;