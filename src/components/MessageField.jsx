import React from 'react';
import Message from './Message.jsx'

export default class MessageField extends React.Component {
    state = {
        input: <input className="messenger__input" type="text" />,
        button: <button className='messenger__button'>Send</button>,
        messages:[]

    };

     
    sendMessage = () => {
        const{messages} = this.state
        let input = document.getElementsByClassName("messenger__input");
        if (input[0].value != "") {
            this.setState({
                messages: [...messages, { author: "Yaroslav", value: input[0].value}]
            });
            input[0].value = "";
        }
    }


    componentDidMount(){
        let button = document.querySelector(".messenger__button");
        button.addEventListener("click", this.sendMessage);
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
        const field = document.getElementsByClassName('messenger__field');
        field[0].scrollTo(0, field[0].scrollHeight);
    }

    render() {
        
        const { messages } = this.state
        return (
            <div className="messenger">
                <div className = "messenger__field">
                {
                    messages.map((message,index)=>(
                        <Message message={message} key={ index}/>
                    ) )
                    }
                </div>
                {this.state.input}
                {this.state.button}
            </div>
        )
    }

 }

