import React from 'react';
import Messenger from './Messenger.jsx';
import Header from './Header.jsx'



export default class Layout extends React.Component {
    state = {
        header: <Header />,
        main: <Messenger />,
        footer: ""

    }

    render() {
        const { header, main, footer } = this.state

        const Layout = ({ header, main, footer }) => {
            return (
                <div>
                    <header>{header}</header>
                    <main>{main}</main>
                    <footer>{footer}</footer>
                </div>
            )
        }

        return (
            <Layout main={main} header={header} footer={footer} />
        )

    }
}