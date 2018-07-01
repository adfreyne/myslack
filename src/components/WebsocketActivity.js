import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WebSocketActivity extends Component {
    constructor () {
        super();
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
            messages
        } = this.props;
        return (
            <div>
                <div id="socketMessagesList">
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
    messages: state.messages.log
});

WebSocketActivity.propTypes = {
    messages: PropTypes.array
};

export default connect(mapStateToProps)(WebSocketActivity);
