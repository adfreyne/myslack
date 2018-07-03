import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
//import { sendMessage } from '../store/initChannel.js';

class ChannelPage extends Component {
    constructor () {
        super();
        this.state = { channel: '', messageToChannel: '' };
    }
    render () {
        const {
            //messageToChannel,
            channel
        } = this.state;

        const {
            connected,
            received,
            handleSubmit,
            activeChannel,
            text
        } = this.props;
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);
        return (
            <div id="channelpage">
                <form className="pure-form" onSubmit={handleSubmit}>
                    Send message to {activeChannel}:
                    {<div>
                        <Field name="channel" component="input" type="text" value={channel} />
                    </div>}
                    <div>
                        <Field name="messageToChannel" component="input" type="text"
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
const onSubmit = ({ activeChannel, text }, dispatch) => {
    let sendToChannel = "{\"command\": \"message\", \"channel\":\"" +
        activeChannel + "\", \"message\":\"" + text + "\"}";
    //JSON.stringify({ command: "message", channel: activeChannel, message: text });

    dispatch({ type: send, payload: sendToChannel });
};
// let newMessage2 = "{\"command\": \"message\", \"channel\":\"" +
//     channel + "\", \"message\":\"" + messageToChannel + "\"}";
// dispatch({ type: send, payload: newMessage2 });


const mapStateToProps = (state) => ({
    messages: state.messages.log,
    connected: state.websocket.connected,
    users: state.received.users,
    channels: state.channels.channels,
    received: state.received.received,
    activeChannel: state.initChannel.activeChannel,
    text: state.initChannel.text
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
