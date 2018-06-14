import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class LoggedInMessage extends PureComponent {
    render () {
        const { firstname, connected } = this.props;
        let date = new Date();
        let d = date.toDateString();
        if (connected) {
            return <p id="loggedInAs">{d} - Logged in as: {firstname}</p>;
        } else return <p>Not logged in</p>;
    }
}
const mapStateToProps = (state) => ({
    firstname: state.reducer.firstname,
    connected: state.websocket.connected
});
export default connect(mapStateToProps)(LoggedInMessage);
