import React, {Component} from 'react';

class ThreadTitle extends Component
{
    render()
    {
        return(
            <div className="FeedTitle">
             {this.props.title}
             </div>
        )
    }
}

export default ThreadTitle;