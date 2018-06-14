import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Chatbox from './Chatbox';
import WebSocket from './Websocket';

class Dashboard extends PureComponent {
    render () {
        const { workspace, joined, users } = this.props;//eslint-disable-line
        let u = users.map((user, index) => <li key={index}>{user}</li>);
        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div id="messagesarea">
                    <div id="sidebar">
                        <div><p>Workspace: {workspace}</p><p>Joined on {joined}</p></div>
                        <hr />
                        <div>Channels:
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                            ...etc.
                        </div>
                        <hr />
                        <div>Users in your workspace:
                            <ul>
                                {u}
                            </ul>
                            ...etc.
                        </div>
                    </div>
                    <div id="messagelist">Messages: <hr />
                        {/* <Chatbox /> */}
                        <WebSocket />
                        {/*
{ "command": "echo", "payload": "this will be sent back" }
{ "command": "name", "name": "olmo" }
{ "command": "join", "channel": "#test" }
{ "command": "message", "channel": "#test", "message": "hello world!"}
                        */}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    workspace: state.reducer.workspace,
    joined: state.reducer.joined,
    users: state.reducer.users
});
export default connect(mapStateToProps)(Dashboard);
