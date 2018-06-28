import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
import { loop, Cmd } from 'redux-loop';

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
            handleSubmit,
            messages
        } = this.props;

        return (
            <div className="pure-form">
                <form onSubmit={handleSubmit}>
                    <div>

                        Make new channel:
                        <Field name="newChannel" component="input" type="text" />
                        {/* <p>{users}</p> */}
                        <button type="submit">Add channel</button>
                    </div>
                </form>
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

const onSubmit = ({ newChannel }, dispatch) => {
    let sendToServer = JSON.stringify({ command: 'join', channel: newChannel });
    dispatch({ type: send, payload: sendToServer });
};
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
WebSocket = reduxForm({
    form: 'websocket',
    onSubmit
})(WebSocket);
export default connect(mapStateToProps)(WebSocket);
