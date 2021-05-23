import React from 'react';
import Message from './Message.jsx'
import Button from '@material-ui/core/Button';
import { Input, InputAdornment } from '@material-ui/core';

// const StyledTextField = withStyles(() => ({
//     root: {
//         "&": {
//             color: "#9a9fa1",
//             padding: "10px 15px",
//             fontSize: "15px",
//         },
//     },
// }))(TextField)

export default class MessageList extends React.Component {
    state = {
        messages: [],
    };

    input = React.createRef()
    field = React.createRef()

    enter = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage()
        }
    }

    sendMessage = () => {
        const { messages } = this.state
        if (this.input.current.lastChild.value != "") {
            this.setState({
                messages: [...messages, { author: "Yaroslav", value: this.input.current.lastChild.value }]
            });
            this.input.current.lastChild.value = "";
        }
    }

    componentDidUpdate() {
        const { messages } = this.state
        const lastMessage = messages[messages.length - 1]
        if (lastMessage.author != "Bot") {
            setTimeout(() => {
                this.setState({
                    messages: [...messages, { author: "Bot", value: "i'm robot" }]
                })
            }, 1000)
        };
        this.field.current.scrollTo(0, this.field.current.scrollHeight);

    }

    render() {

        const { messages } = this.state
        return (
            <div >
                <div ref={this.field} className="messenger__message-list-field">
                    {
                        messages.map((message, index) => (
                            <Message message={message} key={index} />
                        ))
                    }
                </div>
                <hr />
                <Input fullWidth={true} id="standard-basic" className="messenger__message-list-input"
                    placeholder="Placeholder" ref={this.input} value={this.state.value} onKeyUp={(event) => this.enter(event)} type="text"
                />
                <Button fullWidth={true} position="end" variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>

            </div>
        )
    }

}

