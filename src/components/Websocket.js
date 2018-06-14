import React, { Component } from 'react';
import { connect } from 'react-redux';
import { send } from '../store/websocket';

class WebSocket extends Component {
    constructor () {
        super();
        this.state = { input: '' };
    }

  renderExample = (message) => {
      return (
          <li>
              <code>{message}</code>
              <button className="try"
                  disabled={this.props.disconnected}
                  href="." onClick={() => this.props.dispatch({ type: send, payload: message })}>
          try
              </button>
          </li>
      );
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
          input
      } = this.state;

      const {
          dispatch,
          disconnected,
          messages
      } = this.props;

      return (
          <div>
              <div>
          Send message:
                  <textarea
                      className="input" rows="4" cols="40"
                      id="chatInput"
                      value={input}
                      onChange={(e) => this.setState({ input: e.target.value })} />

                  <button onClick={() => { dispatch({ type: send, payload: input }); }}
                      disabled={disconnected}>
            send
                  </button>
              </div>
              <div>
                  <p>Websocket activity:</p>
                  <ul>
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
