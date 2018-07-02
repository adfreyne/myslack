import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class ChannelPage extends Component {
    constructor () {
        super();
        this.state = { channel: '', messageToChannel: '' };
    }
    render () {
        const {
            messageToChannel
        } = this.state;

        const {
            connected,
            received,
            handleSubmit,
            activatedChannel
        } = this.props;
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);

        return (
            <div id="channelpage">
                <form className="pure-form" onSubmit={handleSubmit}>
                    Send message to {activatedChannel}:
                    {/* <div>
                        <Field name="channel" component="input" type="text" value={channel}>{activatedChannel}</Field>
                    </div> */}
                    <div>
                        <Field name="messageToChannel" component="input" type="text"
                            value={messageToChannel} />
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
const onSubmit = (channel, { messageToChannel }, dispatch) => {
    let newMessage2 = "{\"command\": \"message\", \"channel\":\"" +
        channel + "\", \"message\":\"" + messageToChannel + "\"}";
    dispatch({ type: send, payload: newMessage2 });
};

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    connected: state.websocket.connected,
    users: state.received.users,
    channels: state.channels.channels,
    received: state.received.received,
    activatedChannel: state.initChannel.activatedChannel
});
ChannelPage.propTypes = {
    connected: PropTypes.bool,
    handleSubmit: PropTypes.func,
    received: PropTypes.array,
    activatedChannel: PropTypes.string
};
ChannelPage = reduxForm({
    form: 'channelMessage',
    onSubmit
})(ChannelPage);
export default connect(mapStateToProps)(ChannelPage);
