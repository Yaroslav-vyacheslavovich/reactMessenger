import React from 'react';

export default class Message extends React.Component {

    render() {

        const { title, handleListItemClick, selected } = this.props

        return (

            <div>{title}</div>
        )
    }
}