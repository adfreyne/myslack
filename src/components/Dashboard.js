import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Dashboard extends PureComponent {
    render () {
        const { workspace, joined } = this.props;
        return (
            <div>
                <header id="header">Searchable Log of All Conversation and Knowledge</header>
                <div id="messagesarea">
                    <div id="sidebar">
                        <div><p>Workspace: {workspace}</p><p>Joined on {joined}</p></div>
                        <div>Channels:
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                            ...etc.
                        </div>
                        <div>Users in your workspace:
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
    workspace: state.reducer.workspace,
    joined: state.reducer.joined
});
export default connect(mapStateToProps)(Dashboard);
