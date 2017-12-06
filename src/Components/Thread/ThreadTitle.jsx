import React, {Component} from 'react';

class ThreadTitle extends Component
{
    render()
    {
        return(
            <div className="threadTitle">
             {this.props.title}
             </div>
        )
    }
}

export default ThreadTitle;