import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';

class ChannelPage extends Component {
    constructor () {
        super();
        this.state = { channel: '', messageToChannel: '' };
    }

    render () {
        const {
            channel, messageToChannel
        } = this.state;

        const {
            dispatch,
            disconnected,
            received
        } = this.props;
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);

        return (
            <div id="channelpage">
                <div>
                    Send message to channel:
                    <textarea
                        rows="1" cols="15"
                        value={channel}
                        onChange={(f) => this.setState({ channel: f.target.value })}
                    />
                    <textarea
                        rows="1" cols="40"
                        value={messageToChannel}
                        onChange={(f) => this.setState({ messageToChannel: f.target.value })} />
                    <button onClick={() => {
                        let newMessage2 = "{\"command\": \"message\", \"channel\":\"" +
                            channel + "\", \"message\":\"" + messageToChannel + "\"}";
                        dispatch({ type: send, payload: newMessage2 });
                    }}
                    disabled={disconnected}>
                        send
                    </button>
                    <hr />
                    <div id="messagesOnChannelPage">Messages:
                        <ul>{m}</ul>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    disconnected: !state.websocket.connected,
    workspace: state.profile.workspace,
    joined: state.profile.joined,
    users: state.users.users,
    channels: state.channels.channels,
    received: state.received.received
});
ChannelPage.propTypes = {
    disconnected: PropTypes.bool,
    dispatch: PropTypes.func,
    received: PropTypes.array
};
export default connect(mapStateToProps)(ChannelPage);
