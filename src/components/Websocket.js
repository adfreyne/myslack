import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
import WebsocketActivity from './WebsocketActivity';

class WebSocket extends Component {
    constructor () {
        super();
        this.state = { messageToUser: '', user: '', channel: '', messageToChannel: '', newChannel: '' };
    }
    render () {
        const {
            messageToUser, user, channel, messageToChannel
        } = this.state;

        const {
            dispatch,
            disconnected
        } = this.props;

        return (
            <div className="pure-form">
                <hr />
                <div>
                    Send message to user:
                    <input
                        value={user}
                        onChange={(e) => this.setState({ user: e.target.value })}
                    />
                    <input
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

                <WebsocketActivity />
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
