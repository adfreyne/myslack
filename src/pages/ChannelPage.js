import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
//import { sendMessage } from '../store/initChannel.js';

class ChannelPage extends Component {
    constructor () {
        super();
        this.state = { channel: '', text: '' };
    }
    render () {
        const {
            //messageToChannel,
            channel, text
        } = this.state;

        const {
            connected,
            received,
            handleSubmit,
            activeChannel
        } = this.props;
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);
        return (
            <div id="channelpage">
                <form className="pure-form" onSubmit={handleSubmit}>
                    Send message to {activeChannel}:
                    {<div>
                        <Field placeholder="channel" name="channel" component="input" type="text" value={channel} />
                    </div>}
                    <div>
                        <Field placeholder="message" name="messageToChannel" component="input" type="text"
                            value={text} />
                    </div>
                    <div>
                        <button className="pure-button" type="submit"
                            disabled={!connected}>
                            send
                        </button >
                    </div>
                    <hr />
                    <div id="messagesOnChannelPage">Messages:
                        <ul>{m}</ul>
                    </div>
                    <hr />
                </form>
            </div>
        );
    }
}
const onSubmit = ({ channel, text }, dispatch) => {
    let newMessage = "{\"command\": \"message\", \"channel\":\"" +
        channel + "\", \"message\":\"" + text + "\"}";
    dispatch({ type: send, payload: newMessage });
};

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    connected: state.websocket.connected,
    users: state.received.users,
    channels: state.channels.channels,
    received: state.received.received,
    activeChannel: state.initChannel.activeChannel
});
ChannelPage.propTypes = {
    connected: PropTypes.bool,
    handleSubmit: PropTypes.func,
    received: PropTypes.array,
    activeChannel: PropTypes.string,
    text: PropTypes.string
};
ChannelPage = reduxForm({
    form: 'channelMessage',
    onSubmit
})(ChannelPage);
export default connect(mapStateToProps)(ChannelPage);
