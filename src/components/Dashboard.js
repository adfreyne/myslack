import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import WebSocket from './Websocket';
import { push } from 'redux-first-routing';

class Dashboard extends PureComponent {
    render () {
        const { workspace, joined, users, channels, received, dispatch, send } = this.props;//eslint-disable-line

        let c = channels.map((channel, index) => (
            <li key={index}>
                <button onClick={() => {
                    dispatch(push("/channels"));
                }}
                >{channel}
                </button>
            </li >
        ));
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
                        <WebSocket />
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    workspace: state.profile.workspace,
    joined: state.profile.joined,
    users: state.users.users,
    channels: state.channels.channels,
    received: state.received.received
});
export default connect(mapStateToProps)(Dashboard);
