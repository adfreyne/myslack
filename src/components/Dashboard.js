import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Chatbox from './Chatbox';
import WebSocket from './Websocket';
import NewChannelButton from '../navigation/NewChannelButton';

class Dashboard extends PureComponent {
    render () {
        const { workspace, joined, users, channels, received } = this.props;//eslint-disable-line
        let c = channels.map((channel, index) => <li key={index}>{channel}</li>);
        let u = users.map((user, index) => <li key={index}>{user}</li>);
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);
        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div id="messagesarea">
                    <div id="sidebar">
                        <div><p>Workspace: {workspace}</p><p>Joined on {joined}</p></div>
                        <hr />
                        <div>Channels:
                            <NewChannelButton />
                            <ul>
                                {c}
                            </ul>
                        </div>
                        <hr />
                        <div>Users in your workspace:
                            <ul>
                                {u}
                            </ul>
                        </div>
                        <hr />
                        <div id="messageschatbox">Messages:
                            <ul>{m}</ul>
                        </div>
                        <hr />
                    </div>
                    <div id="messagelist">Messages: <hr />
                        Possible commands:
                        <ul id="commands">
                            <li>{"{"}"command": "echo", "payload": "this will be sent back" }</li>
                            <li>{"{"}"command": "name", "name": "Adri" }</li>
                            <li>{"{"}"command": "users" }</li>
                            <li>{"{"}"command": "join", "channel": "#test" }</li>
                            <li>{"{"}"command": "channels" }</li>
                            <li>{"{"}"command": "message", "user": "Adri", "message": "hello world!" }</li>
                            <li>{"{"}"command": "message", "channel": "#test", "message": "hello world!" }</li>
                            <li>{"{"}"command": "part", "channel": "#test" }</li>
                        </ul>
                        <button>Connect to back-end chat-box</button>
                        {/* <Chatbox /> */}
                        <WebSocket />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    workspace: state.reducer.workspace,
    joined: state.reducer.joined,
    users: state.users.users,
    channels: state.channel.channels,
    received: state.received.received
});
export default connect(mapStateToProps)(Dashboard);
