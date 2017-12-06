import React, {Component}   from 'react';
import Answer               from '../Components/Thread/Answer';
import AddComment from '../Components/Thread/AddComment'
import Sidebar              from '../Components/SideBar';
import ThreadTitle        from '../Components/Thread/ThreadTitle.jsx';

class ThreadContainer extends Component
{
    constructor()
    {
        super()
        this.state = {question: [], answers: [], error: ""};
    }
    componentDidMount()
    {
        fetch(`/thread/${this.props.match.params.quesId}`)
        .catch (error => this.setState({error: error.message}))
        .then (res => res.json())
        .then (info => this.setState(
            {
                question: info[0].question.questionText,
                answers:info
            }
        ))
    }

    render()
    {
        let answers = this.state.answers;
        let question = this.state.question;
        answers = answers.map(a => <Answer key={a.id_comments} ques={a.commentText}/>);
        answers.push(<AddComment />)
        return([
                <Sidebar title={<ThreadTitle title={question}/>} data={answers} />,
        ]);
    }
}

export default ThreadContainer;