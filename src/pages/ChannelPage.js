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
            <div className="pure-form">
                <hr />
                <div>
                    Send message to channel:
                    <input
                        value={channel}
                        onChange={(e) => this.setState({ channel: e.target.value })}
                    />
                    <input
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
                <div id="messagesOnChannelPage">Messages:
                    <ul>{m}</ul>
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
    channels: state.received.channels,
    connected: state.websocket.connected,
    received: state.received.received

});
ChannelPage.propTypes = {
    dispatch: PropTypes.func,
    disconnected: PropTypes.bool,
    messages: PropTypes.array,
    handleSubmit: PropTypes.func,
    received: PropTypes.array

};

export default connect(mapStateToProps)(ChannelPage);
