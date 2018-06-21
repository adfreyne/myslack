import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';

class WebSocket extends Component {
    constructor () {
        super();
        this.state = { input: '', user: '', channel: '', input2: '' };
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
            input, user, channel, input2
        } = this.state;

        const {
            dispatch,//eslint-disable-line
            disconnected,//eslint-disable-line
            messages//eslint-disable-line
        } = this.props;

        return (
            <div>
                <div>
                    Send message to user:
                    <textarea
                        rows="1" cols="10"
                        value={user}
                        onChange={(e) => this.setState({ user: e.target.value })}
                    />
                    <textarea
                        rows="1" cols="40"
                        value={input}
                        onChange={(e) => this.setState({ input: e.target.value })} />
                    <button onClick={() => {
                        let newMessage = "{\"command\": \"message\", \"user\":\"" + user + "\", \"message\":\"" + input + "\"\}";
                        dispatch({ type: send, payload: newMessage });
                    }}
                    disabled={disconnected}>
                        send
                    </button>
                </div>
                <div>
                    Send message to channel:
                    <textarea
                        rows="1" cols="15"
                        value={channel}
                        onChange={(e) => this.setState({ channel: e.target.value })}
                    />
                    <textarea
                        rows="1" cols="40"
                        value={input2}
                        onChange={(e) => this.setState({ input2: e.target.value })} />
                    <button onClick={() => {
                        let newMessage = "{\"command\": \"message\", \"channel\":\"" + channel + "\", \"message\":\"" + input2 + "\"\}";
                        dispatch({ type: send, payload: newMessage });
                    }}
                    disabled={disconnected}>
                        send
                    </button>
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

export default connect(mapStateToProps)(WebSocket);
