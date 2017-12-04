import React, {Component} from 'react';

class Answer extends Component
{
    render()
    {
        var test = 
        {
            day: "02",
            month: "January",
            year: "2018",
            by: "Bob",
            body: "An array is a data structure."
        }

        return(
            <div className="answer">
                <small>on {test.month} {test.day}, {test.year} by <a href="#">{test.by}</a></small>
                <br/>
                <p>{test.body}</p>
            </div>
        );
    }
}

export default Answer;