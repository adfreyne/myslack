import React, { PureComponent } from 'react';


class Dashboard extends PureComponent {
    render () {
        return (
            <div>
                <header id="header">Slack</header>
                <div id="messagesarea">
                    <div id="sidebar">Sidebar
                        <div>ChannelList </div>
                        <div>UserList </div>
                    </div>
                    <div id="messagelist">MessageList </div>
                </div>
                <footer>Footer</footer>
            </div>
        );
    }
}

export default Dashboard;
