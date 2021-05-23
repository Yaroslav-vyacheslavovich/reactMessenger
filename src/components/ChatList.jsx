import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './Chat.jsx'




export default class ChatList extends React.Component {
    state = {
        chats: ["room1", "room2", "room3"],
        selectedIndex: 1,
    }

    render() {

        const { chats, selectedIndex } = this.state

        return (
            <div>
                {chats.map((room, index) => (

                    <List component="nav" aria-label="main mailbox folders" >
                        <ListItem fullwidth="true"
                            button
                            selected={selectedIndex === 0}
                        // onClick={(event) => this.handleListItemClick(event, index++)}
                        >
                            <Chat title={room} key={index} selected={selectedIndex} />
                        </ListItem>

                    </List>
                ))}
            </div>
        )
    }
}