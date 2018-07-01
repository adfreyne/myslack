import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UsersListComponent extends PureComponent {
    render () {
        const { users } = this.props;
        let u = users.map((user, index) => <li key={index}>{user}</li>);
        return (
            <div className="pure-u-1-4" id="sidebar">
                <div>Users online:
                    <ul>
                        {u}
                    </ul>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.received.users
});
UsersListComponent.propTypes = {
    users: PropTypes.array
};

export default connect(mapStateToProps)(UsersListComponent);
