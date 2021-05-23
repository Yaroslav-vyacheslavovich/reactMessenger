import React from 'react';
import MessageList from './MessageList.jsx'
import ChatList from './ChatList.jsx'

export default class Messenger extends React.Component {
    state = {
        messageList: <MessageList />,
        chatList: <ChatList />,

    }

    render() {
        const { messageList, chatList } = this.state

        const Messenger = ({ messageList, chatList }) => {
            return (
                <div className="messenger">
                    <div className="messenger__message-list">{messageList}</div>
                    <div className="messenger__chat-list">{chatList}</div>
                </div>
            )
        }

        return (
            <Messenger messageList={messageList} chatList={chatList} />
        )
    }
}