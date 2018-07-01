import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';

class WebSocket extends Component {
    constructor () {
        super();
        this.state = { messageToUser: '', user: '', channel: '', messageToChannel: '', newChannel: '' };
    }

    renderMessage (message, idx) {
        return (
            <li key={idx}>
                <pre>{message}</pre>
            </li>
        );
    }
    render () {
        const {
            messageToUser, user, channel, messageToChannel
        } = this.state;

        const {
            dispatch,
            disconnected,
            messages
        } = this.props;

        return (
            <div className="pure-form">
                <hr />
                <div>
                    Send message to user:
                    <input
                        rows="1" cols="10"
                        value={user}
                        onChange={(e) => this.setState({ user: e.target.value })}
                    />
                    <input
                        rows="1" cols="40"
                        value={messageToUser}
                        onChange={(e) => this.setState({ messageToUser: e.target.value })} />
                    <button className="pure-button" onClick={() => {
                        let newMessage = "{\"command\": \"message\", \"user\":\"" +
                            user + "\", \"message\":\"" + messageToUser + "\"}";
                        dispatch({ type: send, payload: newMessage });
                    }}
                    disabled={disconnected}>
                        send
                    </button>
                </div>
                <div>
                    Send message to channel:
                    <input
                        rows="1" cols="15"
                        value={channel}
                        onChange={(e) => this.setState({ channel: e.target.value })}
                    />
                    <input
                        rows="1" cols="40"
                        value={messageToChannel}
                        onChange={(e) => this.setState({ messageToChannel: e.target.value })} />
                    <button className="pure-button" onClick={() => {
                        let newMessage = "{\"command\": \"message\", \"channel\":\"" +
                            channel + "\", \"message\":\"" + messageToChannel + "\"}";
                        dispatch({ type: send, payload: newMessage });
                    }}
                    disabled={disconnected}>
                        send
                    </button>
                </div>
                <hr />
                <hr />
                <div id="socketMessagesList">
                    <p>Websocket activity:</p>
                    <ul id="websocket-activity">
                        {messages.map(this.renderMessage)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    disconnected: !state.websocket.connected,
    names: state.received.names,
    users: state.received.users,
    channels: state.received.channels

});
WebSocket.propTypes = {
    dispatch: PropTypes.func,
    disconnected: PropTypes.bool,
    messages: PropTypes.array,
    handleSubmit: PropTypes.func
};

export default connect(mapStateToProps)(WebSocket);
