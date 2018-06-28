import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import WebSocket from '../components/Websocket';
import { push } from 'redux-first-routing';
import PropTypes from 'prop-types';


class Dashboard extends PureComponent {
    render () {
        const { users, channels, received, dispatch } = this.props;

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
        let m = received.map((mess, index) => <li key={index}>{mess}</li>);
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
                        <hr />
                        <div>Users online:
                            <ul>
                                {u}
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <ul>{m}</ul>
                        </div>
                        <hr />
                    </div>
                    <div className="pure-u-3-4" id="messagelist">
                        <WebSocket />
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    workspace: state.profile.workspace,
    joined: state.profile.joined,
    channels: state.channels.channels,
    activeChannel: state.channels.activeChannel,
    received: state.received.received,
    users: state.received.users
});
Dashboard.propTypes = {
    workspace: PropTypes.string,
    joined: PropTypes.string,
    users: PropTypes.array,
    channels: PropTypes.array,
    received: PropTypes.array,
    dispatch: PropTypes.func
};
export default connect(mapStateToProps)(Dashboard);
