import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Websocket from '../components/Websocket';
import PropTypes from 'prop-types';
import ChannelListComponent from '../components/ChannelListComponent';
import UsersListComponent from '../components/UsersListComponent';
import MessageListComponent from '../components/MessageListComponent';

class Dashboard extends PureComponent {
    render() {
        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div className="pure-g">
                    <div className="pure-u-1-4" id="sidebar">
                        <UsersListComponent />
                        <hr />
                        <ChannelListComponent />
                        <p />
                    </div>
                    <div className="pure-u-3-4" id="messagelist">
                        <MessageListComponent />
                        <hr />
                        <Websocket />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    received: state.received.received
});
Dashboard.propTypes = {
    received: PropTypes.array
};

export default connect(mapStateToProps)(Dashboard);
