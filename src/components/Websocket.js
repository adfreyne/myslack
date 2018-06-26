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
            messageToUser, user, channel, messageToChannel, newChannel
        } = this.state;

        const {
            dispatch,
            disconnected,
            messages
        } = this.props;

        return (
            <div className="pure-form">
                <div>
                    Make new channel:
                    <input
                        rows="1" cols="10"
                        value={newChannel}
                        onChange={(e) => this.setState({ newChannel: e.target.value })}
                    />
                    <button className="pure-button" onClick={() => {
                        let newC = "{\"command\": \"join\", \"channel\":\"" + newChannel + "\"}";
                        dispatch({ type: send, payload: newC });
                    }}>Make</button>
                </div>
                <p />
                Messages:
                <hr />
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
                <div>Users online:
                    <button className="pure-button" onClick={() => {
                        let theUsers = "{\"command\": \"users\"}";
                        dispatch({ type: send, payload: theUsers });
                    }}>Show</button>
                </div>
                <div>Channels:
                    <button className="pure-button" onClick={() => {
                        let theChannels = "{\"command\": \"channels\"}";
                        dispatch({ type: send, payload: theChannels });
                    }}>Show</button>
                </div>
                <div>
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
    disconnected: !state.websocket.connected
});
WebSocket.propTypes = {
    dispatch: PropTypes.func,
    disconnected: PropTypes.bool,
    messages: PropTypes.array,
    handleSubmit: PropTypes.func
};
export default connect(mapStateToProps)(WebSocket);
