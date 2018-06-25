import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class LoggedInMessage extends PureComponent {
    render () {
        const { connected } = this.props;
        let date = new Date();
        let d = date.toDateString();
        if (connected) {
            return <p id="loggedInAs">{d} - Connected to chat-backend-server </p>;
        } else return <p>Not connected to chat-backend-server</p>;
    }
}
const mapStateToProps = (state) => ({
    firstname: state.profile.firstname,
    connected: state.websocket.connected
});
export default connect(mapStateToProps)(LoggedInMessage);
