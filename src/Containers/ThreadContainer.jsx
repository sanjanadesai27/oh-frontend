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
        this.state = {
            isLoggedIn:false,
            question: [], 
            answers: [], 
            error: ""};
    }
    componentWillMount()
    {
        let token = JSON.parse(window.localStorage.getItem("userToken"));
        let id = JSON.parse(window.localStorage.getItem("id"));
        let header = new Headers({
            "Content-Type":"application/json",
            "Authorization":token
          });
        fetch(`/thread/${this.props.match.params.quesId}`,{
            method: "GET",
            headers:header,
            mode: 'cors',
            cache: 'default'
          })
        .catch (error => this.setState({error: error.message}))
        .then (res => res.json())
        .then (info => {
            if (info.length===0){
                this.setState({
                    isLoggedIn:true,
                })
            }
            else{
                this.setState(
                    {
                        isLoggedIn:true,
                        question: info[0].question.questionText,
                        answers:info
                    })
            }
        })
    }

    render()
    {
        let answers = this.state.answers;
        let question = this.state.question;
        if (answers.length===0){
            answers.push(<div> There are no answers </div>);
        }
        else{
            answers = answers.map(a => <Answer key={a.id_comments} ques={a.commentText}/>);
        }
        answers.push(<AddComment />)
        return([
                <Sidebar title={<ThreadTitle title={question}/>} data={answers} />,
        ]);
    }
}

export default ThreadContainer;