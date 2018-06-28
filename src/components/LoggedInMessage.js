import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoggedInMessage extends PureComponent {
    render () {
        const { connected } = this.props;
        let date = new Date();
        let d = date.toDateString();
        if (connected) {
            return <p id="loggedInAs">{d} - Websocket connected </p>;
        } else return <p>Websocket NOT connected .Run "chat-backend" from Terminal</p>;
    }
}
const mapStateToProps = (state) => ({
    connected: state.websocket.connected
});
LoggedInMessage.propTypes = {
    connected: PropTypes.bool
};
export default connect(mapStateToProps)(LoggedInMessage);
