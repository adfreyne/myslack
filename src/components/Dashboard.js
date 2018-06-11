import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Dashboard extends PureComponent {
    render () {
        return (
            <div>
                <header id="header">Slack</header>
                <div id="messagesarea">
                    <div id="sidebar">
                        <div>ChannelList
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                            ...etc.
                        </div>
                        <div>UserList
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                            ...etc.
                        </div>
                    </div>
                    <div id="messagelist">MessageList:
                        <ul>Today's date
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    firstname: state.firstname
});
export default connect(mapStateToProps)(Dashboard);
