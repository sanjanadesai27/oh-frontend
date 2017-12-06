import React, {Component}   from 'react';
// import Question             from '../Components/Thread/Question.jsx';
import Answer               from '../Components/Answer';
import Sidebar              from '../Components/SideBar';
import QuestionTitle        from '../Components/Thread/QuestionTitle.jsx';
import { Segment } from 'semantic-ui-react';

class ThreadContainer extends Component
{
    constructor()
    {
        super()
        this.state = {question: "", answers: [], error: ""};
    }

    componentDidMount()
    {
        fetch('/thread/3')
        .catch (error => this.setState({error: error.message}))
        .then (res => res.json())
        .then (info => this.setState(
            {
                answers:info
            }
        ))
    }

    render()


    {
        let answers = this.state.answers
        answers = answers.map(a => <Answer key={a.id_comments} ques={a.commentText} title={"Answer"}/>);
        return([
                <Sidebar title={<Segment><div className="answerTitle">HOW DO I SET UP SLIM???</div></Segment>} data={answers} />,
        ]);
    }
}

export default ThreadContainer;