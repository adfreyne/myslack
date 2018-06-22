import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import Link from '../navigation/Link';
import WebSocket from './Websocket';
//import { push } from 'redux-first-routing';
//import NewChannelButton from '../navigation/NewChannelButton';

class Dashboard extends PureComponent {
    render () {
        const { workspace, joined, users, channels, received, dispatch, push, send } = this.props;//eslint-disable-line

        let c = channels.map((channel, index) => (
            <li key={index}>
                <button>
                    {channel}
                </button>
            </li >
        ));
        let u = users.map((user, index) => <li key={index}>{user}</li>);
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);
        // let sendPayload = "{ \"command\": \"name\", \"name\": \"Adri\" \}";
        //let joinChannel = "{ \"command\": \"join\", \"channel\": \"#general\" \}";
        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div id="messagesarea">
                    <div id="sidebar">
                        <div><p>Workspace: {workspace}</p><p>Joined on {joined}</p></div>
                        <hr />
                        <div>Channels:
                            {/* <NewChannelButton /> */}
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
                            <li>{"{"}"command": "users" }</li>
                            <li>{"{"}"command": "channels" }</li>
                        </ul>
                        {/* <button onClick=
                            {() => dispatch({ type: 'WEBSOCKET_SEND', payload: sendPayload })}
                        >
                            Connect to back-end chat-box as Adri
                        </button> */}

                        <WebSocket />
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    workspace: state.reducer.workspace,
    joined: state.reducer.joined,
    users: state.users.users,
    channels: state.channels.channels,
    received: state.received.received
});
export default connect(mapStateToProps)(Dashboard);
