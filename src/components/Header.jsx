import React from 'react';

export default class Header extends React.Component {

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        const { time } = this.state
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() }), 1000
        })
    }

    render() {
        const { time } = this.state
        return (
            time
        )
    }
}
