import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Websocket from '../components/Websocket';
import { push } from 'redux-first-routing';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { send } from '../store/websocket';


class Dashboard extends PureComponent {
    render () {
        const { users, channels, received, dispatch, handleSubmit } = this.props;

        let c = channels.map((channel, index) => (
            <li key={index}>
                <button className="pure-button" onClick={() => {
                    dispatch(push("/channels"));
                }}
                >{channel}
                </button>
            </li >
        ));
        let u = users.map((user, index) => <li key={index}>{user}</li>);
        let m = received.map((mess, index) => <li className="messageListItem" key={index}>{mess}</li>);

        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div className="pure-g" id="messagesarea">
                    <div className="pure-u-1-4" id="sidebar">
                        <div>Channels:
                            <ul>
                                {c}
                            </ul>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                Add:
                                <Field name="newChannel" component="input" type="text" />
                                <button type="submit">Add channel</button>
                            </div>
                        </form>
                        <p />
                        <hr />

                        <div>Users online:
                            <ul>
                                {u}
                            </ul>
                        </div>
                        <hr />

                    </div>
                    <div className="pure-u-3-4" id="messagelist">
                        <div>
                            <ul>{m}</ul>
                        </div>
                        <hr />
                        <Websocket />
                    </div>
                </div>
            </div >
        );
    }
}
const onSubmit = ({ newChannel }, dispatch) => {
    let sendToServer = JSON.stringify({ command: 'join', channel: newChannel });
    dispatch({ type: send, payload: sendToServer });
};

const mapStateToProps = (state) => ({
    firstname: state.received.firstname,
    channels: state.received.channels,
    // activeChannel: state.channels.activeChannel,
    received: state.received.received,
    users: state.received.users
});
Dashboard.propTypes = {
    users: PropTypes.array,
    channels: PropTypes.array,
    received: PropTypes.array,
    dispatch: PropTypes.func
};
Dashboard = reduxForm({
    form: 'newchannel',
    onSubmit
})(Dashboard);
export default connect(mapStateToProps)(Dashboard);
