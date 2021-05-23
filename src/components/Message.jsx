import React from 'react';

export default class Message extends React.Component {
   
    state = {
        message: ({
            author: "",
            value: "",
        }) ,
}
    render() {
        const { message } = this.props;
        const { author, value } = message;
        return (
            < div>
                <p><b>{author}</b>:&nbsp;&nbsp;{value}</p>
                <hr />
            </div >
        )
    }
}
