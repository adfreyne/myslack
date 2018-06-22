import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';

class WebSocket extends Component {
    constructor () {
        super();
        this.state = { input: '', user: '', channel: '', input2: '' };
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
          Send message to channel:
                    <textarea
                        rows="1" cols="15"
                        value={channel}
                        onChange={(f) => this.setState({ channel: f.target.value })}
                    />
                    <textarea
                        rows="1" cols="40"
                        value={input2}
                        onChange={(f) => this.setState({ input2: f.target.value })} />
                    <button onClick={() => {
                        let newMessage2 = "{\"command\": \"message\", \"channel\":\"" +
              channel + "\", \"message\":\"" + input2 + "\"\}";
                        dispatch({ type: send, payload: newMessage2 });
                    }}
                    disabled={disconnected}>
            send
                    </button>
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
