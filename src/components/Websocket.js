import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
//import WebsocketActivity from './WebsocketActivity';

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
                    <h5>Send message to user:</h5>
                    <input className="pure-u-1-8"
                        placeholder="username"
                        value={user}
                        onChange={(e) => this.setState({ user: e.target.value })}
                    />
                    <input className="pure-u-7-8"
                        value={messageToUser}
                        placeholder="message"
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
                    <h5>Send message to channel:</h5>
                    <input className="pure-u-1-8"
                        placeholder="channel"
                        value={channel}
                        onChange={(e) => this.setState({ channel: e.target.value })}
                    />
                    <input className="pure-u-7-8"
                        value={messageToChannel}
                        placeholder="message"
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

                {/*<WebsocketActivity />*/}
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
